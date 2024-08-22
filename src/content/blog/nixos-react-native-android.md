---
title: 'NixOS for React Native Android development'
description: "Here's how I setup my NixOS for React Native Android development."
pubDate: 'Apr 12 2024'
---


Here's how I setup my NixOS for React Native Android development. 

First off: is this the best setup? No, probably not. I don't know what I'm doing when it comes to Nix or NixOS. The combination here just happens to (finally) work for me. Once I learn more about Nix and NixOS I'll optimize and make changes. Hopefully I'll remember to update this post too.


Why do this? My pop_os install broke when upgrading nvidia drivers and I had a drive failure when trying to recover. Since I had to install an OS from scratch, it seemed like a good opportunity to try something new. I'd heard about NixOS and fell in love with the idea of a configuration file for everything. I already have some experience with immutable operating systems from running Fedora Silverblue on my laptop, so I thought it would be a great time to try Nix.

Once I figured out basic system configuration, I needed to get my environment setup to develop a react native android application for my day job.



## System configuration

Starting with the system wide configuration file. I enabled the `adb` program, included the `android-udev-rules`, setup flakes, and included my user in the `plugdev` and `adbuser` groups. 

I also added `node`, `yarn`, and `prettierd` here but I don't know if this is the best place to keep them. It works for now.

```nix
# /etc/nixos/configuration.nix

{
  config,
  pkgs,
  ...
}: {
  imports = [
    ./hardware-configuration.nix
  ];

  # ... Other lines omitted

  nixpkgs.config.allowUnfree = true;

  # NixOS doesn't have a plugdev group - needed for connecting via adb
  users.groups.plugdev = {};

  users.users.dean = {
    isNormalUser = true;
    description = "dean";
    # Not sure if both adbusers and plugdev are needed, but this works
    extraGroups = ["networkmanager" "wheel" "adbusers" "plugdev"];
    packages = with pkgs; [];
    shell = pkgs.zsh;
  };

  # Flakes enabled for the direnv setup
  nix.settings.experimental-features = [ "nix-command" "flakes" ];
  environment.systemPackages = with pkgs; [
    wget
    unzip
    gcc # c compiler - not sure if needed, including anyways
    alejandra # .nix formatting
    wl-clipboard # clipboard integration
    nodejs_20 # Should this live here or in home-manager?
    nodePackages.yarn # Same with this?
    prettierd # And this?
    # android-tools # Couldn't get this to work. Doesn't add udev rules.
  ];

  # This is the one that correctly adds the udev rules
  programs.adb.enable = true;

  # Not sure if this is necessary if the above is set.
  services.udev.packages = [
	pkgs.android-udev-rules
  ];

  # ... Other lines omitted

```

`direnv` is how nix will create a shell with the needed environement variables and project dependencies when we `cd` into the directory. I've added it to home manager but this could have easily gone into `configuration.nix` instead.

```nix
# ~/.config/home-manager/home.nix

{
  config,
  pkgs,
  ...
}: {
  home.username = "dean";
  home.homeDirectory = "/home/dean";
  home.stateVersion = "23.11"; 

  # Not sure if this is needed, had it set anyways
  targets.genericLinux.enable = true;

  programs.home-manager.enable = true;

  # ... Other lines omitted

  programs.direnv = {
    enable = true;
    enableZshIntegration = true;
    nix-direnv.enable = true;
  };
}
```

## Project configuration


Here we create the flake that sets up all the android-sdk dependencies. I should figure out how to include `nodejs` and `yarn` and such here too.

Note: The versions listed are specific to my project.

```nix
# ~/code/my-react-native-project/flake.nix

{
  description = "My Android project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    devshell.url = "github:numtide/devshell";
    flake-utils.url = "github:numtide/flake-utils";
    android.url = "github:tadfisher/android-nixpkgs";
  };

  outputs = {
    self,
    nixpkgs,
    devshell,
    flake-utils,
    android,
  }:
    {
      overlay = final: prev: {
        inherit (self.packages.${final.system}) android-sdk android-studio;
      };
    }
    // flake-utils.lib.eachSystem ["aarch64-darwin" "x86_64-darwin" "x86_64-linux"] (
      system: let
        inherit (nixpkgs) lib;
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
          overlays = [
            devshell.overlays.default
            self.overlay
          ];
        };
      in {
        packages =
          {
            android-sdk = android.sdk.${system} (sdkPkgs:
              with sdkPkgs;
                [
                  # Useful packages for building and testing.
                  build-tools-33-0-0 # This version is specific to my project
                  build-tools-30-0-3 # This version is specific to my project
                  cmdline-tools-latest
                  emulator
                  platform-tools
                  platforms-android-33 # This version is specific to my project

                  # Other useful packages for a development environment.
                  ndk-23-1-7779620 # This version is specific to my project
                  # skiaparser-3
                  # sources-android-34
                ]
                ++ lib.optionals (system == "aarch64-darwin") [
                  # system-images-android-34-google-apis-arm64-v8a
                  # system-images-android-34-google-apis-playstore-arm64-v8a
                ]
                ++ lib.optionals (system == "x86_64-darwin" || system == "x86_64-linux") [
                  # system-images-android-34-google-apis-x86-64
                  # system-images-android-34-google-apis-playstore-x86-64
                ]);
          }
          // lib.optionalAttrs (system == "x86_64-linux") {
            # Android Studio in nixpkgs is currently packaged for x86_64-linux only.
            android-studio = pkgs.androidStudioPackages.stable;
            # android-studio = pkgs.androidStudioPackages.beta;
            # android-studio = pkgs.androidStudioPackages.preview;
            # android-studio = pkgs.androidStudioPackage.canary;
          };

        devShell = import ./devshell.nix {inherit pkgs;};
      }
    );
}

```

In `devshell.nix` we create a new shell environment with all the required packages and environment variables. 

Note: I've hardcoded in a version number in GRADLE_OPTS. Not ideal, but it works for now.


```nix
# ~/code/my-react-native-project/devshell.nix

{pkgs}:
with pkgs;
# Configure your development environment.
#
# Documentation: https://github.com/numtide/devshell
  devshell.mkShell {
    name = "android-project";
    motd = ''
      Entered the Android app development environment.
    '';
    env = [
      {
        name = "ANDROID_HOME";
        value = "${android-sdk}/share/android-sdk";
      }
      {
        name = "ANDROID_SDK_ROOT";
        value = "${android-sdk}/share/android-sdk";
      }
      {
        name = "JAVA_HOME";
        value = jdk11.home; # Needed to set this to jdk11 for my project
      }
      {
        name = "GRADLE_OPTS";
        # Had to add 33.0.0 to match the build-tools-33-0-0 sdkPkg 
        # There should be a way to pass this from flake.nix but I don't know how yet
        value = "-Dorg.gradle.project.android.aapt2FromMavenOverride=${android-sdk}/share/android-sdk/build-tools/33.0.0/aapt2";
      }
    ];
    packages = [
      android-studio
      android-sdk
      gradle
      jdk11 # Needed to set this to jdk11 for my project
    ];
  }
```

And finally, the `.envrc` needed for `direnv` to know to use the flake.

```nix
# ~/code/my-react-native-project/.envrc

if ! has nix_direnv_version || ! nix_direnv_version 2.1.1; then
  source_url "https://raw.githubusercontent.com/nix-community/nix-direnv/2.1.1/direnvrc" "sha256-b6qJ4r34rbE23yWjMqbmu3ia2z4b2wIlZUksBke/ol0="
fi
use flake
```

Note: you'll need to add the changes in git otherwise you'll get some error stating flake.nix is not found. `git add -A && git commit -m "Add flake.nix"` worked for me.

Now with all of that set up, when I `cd` into my project directory I get a change to my prompt confirming my environment is setup.

```bash
~
❯ cd code/my-react-native-project
direnv: loading ~/code/my-react-native-project/.envrc
direnv: using flake
direnv: nix-direnv: using cached dev shell
Entered the Android app development environment.

direnv: export +ANDROID_HOME +ANDROID_SDK_ROOT +DEVSHELL_DIR +GRADLE_OPTS +IN_NIX_SHELL +JAVA_HOME +NIXPKGS_PATH +PRJ_DATA_DIR +PRJ_ROOT +name ~PATH ~XDG_DATA_DIRS

~/code/my-react-native-project main*
android-project-env ❯ echo $ANDROID_HOME
/nix/store/74iwz121cnycgr5zcx1fkb4r1j8czncx-android-sdk-env/share/android-sdk
```

I can now run `adb devices` and see my connected device. This was hard to get working, but the combination of user groups and adb in `configuration.nix` seems to do the trick. 

Also, I used to select Transfer Files when connecting my device via USB but for some reason I now need to select Transfer Photos. That's also part of why it was so confusing to setup. Looking into the udev rules that are added by adb, it's something to do with the model of phone I have. Your mileage may vary.

```bash
~/code/my-react-native-project main*
android-project-env ❯ adb devices
List of devices attached
58301a9d	device
```

Now I can start my react-native project as usual and get back to work. 

## Resources
- https://github.com/eekrain/nix-react-native
- https://github.com/tadfisher/android-nixpkgs
- https://developer.android.com/studio/run/device
- https://nixos.wiki/wiki/Android
- https://wiki.archlinux.org/title/Android_Debug_Bridge
- https://search.nixos.org/packages
