<div class="hero">

  <video 
         loop
         muted
         autoplay
         preload='auto'>
    <source src='video.mp4' type='video/mp4'> Your browser does not support the video tag.
  </video>

    <div class="caption">
        <h1>This is a title</h1>
        <h2>This is a subtitle</h2>
    </div>
</div>

<style>
    :global(html, body) {
        margin: 0;
    }

    .hero {
        display: grid;
        grid-template-areas: "stack";
        height: 100vh;
        width: 100%;
    }

    .hero > * {
        grid-area: stack;
    }

    .hero video {
        width: 100%;
        object-fit: cover;
    }

    .hero .caption {
        place-self: center;
    }
</style>