package main

import (
	"bytes"
	"fmt"
	"html/template"
	"os"
	"path/filepath"
	"strings"

	"github.com/yuin/goldmark"
)

type PageData struct {
	Title       string
	Description string
	PubDate     string
	UpdatedDate string
	Content     template.HTML
}

func main() {
	os.RemoveAll("public")
	if err := os.MkdirAll("public", 0755); err != nil {
		panic(err)
	}

	tmpl, err := template.ParseFiles(
		"templates/layout.html",
		"templates/header.html",
	)
	if err != nil {
		panic(fmt.Sprintf("Failed to parse templates: %v", err))
	}

	err = filepath.WalkDir("content", func(path string, d os.DirEntry, err error) error {
		if err != nil {
			return err
		}

		if d.IsDir() {
			return nil
		}

		ext := filepath.Ext(path)
		if ext != ".html" && ext != ".md" {
			return nil
		}

		rawBytes, err := os.ReadFile(path)
		if err != nil {
			return fmt.Errorf("Error reading %s: %v\n", path, err)
		}

		body := string(rawBytes)
		fileName := filepath.Base(path)
		title := strings.TrimSuffix(fileName, ext)
		var description string
		var pubDate string
		var updatedDate string

		// Parse YAML frontmatter
		if strings.HasPrefix(body, "---") {
			parts := strings.SplitN(body, "---", 3)

			if len(parts) >= 3 {
				frontMatter := parts[1]
				body = parts[2]

				for line := range strings.SplitSeq(frontMatter, "\n") {
					if after, ok := strings.CutPrefix(line, "title:"); ok {
						title = strings.TrimSpace(after)
					}
					if after, ok := strings.CutPrefix(line, "description:"); ok {
						description = strings.TrimSpace(after)
					}
					if after, ok := strings.CutPrefix(line, "pubDate:"); ok {
						pubDate = strings.TrimSpace(after)
					}
					if after, ok := strings.CutPrefix(line, "updatedDate:"); ok {
						updatedDate = strings.TrimSpace(after)
					}

				}
			}
		}

		// Convert markdown to HTML
		var htmlContent string
		if ext == ".md" {
			var buf bytes.Buffer
			if err := goldmark.Convert([]byte(body), &buf); err != nil {
				return fmt.Errorf("Markdown error in %s: %v\n", path, err)
			}
			htmlContent = buf.String()
		} else {
			htmlContent = body
		}

		relPath, err := filepath.Rel("content", path)
		if err != nil {
			return fmt.Errorf("failed to find relative path for %s: %w", path, err)
		}

		outRelPath := strings.TrimSuffix(relPath, ext) + ".html"
		outPath := filepath.Join("public", outRelPath)

		if err := os.MkdirAll(filepath.Dir(outPath), 0755); err != nil {
			return fmt.Errorf("failed to create directory for %s: %w", outPath, err)
		}

		outFile, err := os.Create(outPath)
		if err != nil {
			return fmt.Errorf("Failed to create %s: %v\n", outPath, err)
		}
		defer outFile.Close()

		data := PageData{
			Title:       title,
			Content:     template.HTML(htmlContent),
			Description: description,
			PubDate:     pubDate,
			UpdatedDate: updatedDate,
		}

		if err := tmpl.Execute(outFile, data); err != nil {
			fmt.Printf("Failed to compile template for %s: %v\n", outPath, err)
		}

		fmt.Printf("Built %s\n", outPath)
		return nil

	})

	if err != nil {
		panic(err)
	}

	// Copy static directory if it exists
	if _, err := os.Stat("static"); !os.IsNotExist(err) {
		err = copyDir("static", "public")
		if err != nil {
			panic(fmt.Sprintf("Failed to copy static assets: %v", err))
		}
		fmt.Println("Copied static assets")
	}

}

func copyDir(src, dst string) error {
	return filepath.WalkDir(src, func(path string, d os.DirEntry, err error) error {
		if err != nil {
			return err
		}

		// Determine destination target path
		relPath, err := filepath.Rel(src, path)
		if err != nil {
			return err
		}
		targetPath := filepath.Join(dst, relPath)

		// Create directories
		if d.IsDir() {
			return os.MkdirAll(targetPath, 0755)
		}

		// Copy file content
		fileContent, err := os.ReadFile(path)
		if err != nil {
			return err
		}
		return os.WriteFile(targetPath, fileContent, 0644)
	})
}
