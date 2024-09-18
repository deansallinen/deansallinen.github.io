---
title: 'NixOS for React Native Android development'
description: "Here's how I setup my NixOS for React Native Android development."
pubDate: 'Apr 12 2024'
updatedDate: 'Sep 13 2024'
---

EDIT:  I needed up upgrade to SDK 34 so I took the opportunity to rework the flake.nix and devshell.nix a bit. 

Here's how I got a working setup for React Native Android development on NixOS. 

First off, is this the best setup? No. I still don't really know what I'm doing when it comes to Nix or NixOS. The combination here just happens to  work for me. Once I learn more about Nix and NixOS I'll optimize and make changes. Hopefully I'll remember to update this post too.

Why do this? My pop_os install broke when upgrading nvidia drivers and I had a drive failure when trying to recover from backup. Since I had to install an OS from scratch anyway, it seemed like a good opportunity to try something new. I'd heard about NixOS and fell in love with the idea of a declarative configuration. I already have some experience with immutable operating systems from running Fedora Silverblue on my laptop, so I thought it would be a great time to try Nix.

Once I figured out basic system configuration, I needed to get my environment setup to develop a react native android application for work.

## System configuration

Starting with the system wide configuration file. I enabled the `adb` program, included the `android-udev-rules`, setup flakes, and included my user in the `plugdev` and `adbuser` groups. 

I also added `node`, `yarn`, and `prettierd` here but they should go in the project flake (I just haven't moved them yet).

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
    nodejs_20 # This should be moved to the project flake
    nodePackages.yarn # Same with this
    prettierd # And this
    # android-tools # Couldn't get this to work: Doesn't add udev rules.
  ];

  # This is the one that correctly adds the udev rules!
  programs.adb.enable = true;

  # Not sure if this is necessary if the above is set?
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
  description = "My React Native project";

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
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
          overlays = [
            devshell.overlays.default
            self.overlay
          ];
        };

        androidConfig = {
          defaultBuildToolsVersion = "34.0.0"; # This value can be passed to the devshell in the future
          sdkPkgs = android.sdk.${system} (sdkPkgs:
            with sdkPkgs; [
              # Useful packages for building and testing.
              build-tools-34-0-0
              cmdline-tools-latest
              emulator
              platform-tools
              platforms-android-34

              # Other useful packages for a development environment.
              ndk-26-1-10909125
              # skiaparser-3
              sources-android-34
            ]);
        };
      in {
        packages = {
          android-sdk = androidConfig.sdkPkgs;

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


```nix
# ~/code/my-react-native-project/devshell.nix

# Documentation: https://github.com/numtide/devshell
{pkgs}:
with pkgs;
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
        value = jdk17.home;
      }
      {
        name = "GRADLE_OPTS";
        value = "-Dorg.gradle.project.android.aapt2FromMavenOverride=${aapt}/bin/aapt2"; # Using the nixpkgs aapt2 to resolve an issue with dynamically linked executables
      }
      {
        name = "PATH";
        prefix = "${android-sdk}/share/android-sdk/emulator";
      }
      {
        name = "PATH";
        prefix = "${android-sdk}/share/android-sdk/platform-tools";
      }
    ];
    commands = [
      {
        help = "take screenshot of connected android device";
        name = "adbcap";
        command = "adb exec-out screencap -p > /tmp/screen-$(date +%Y-%m-%d-%H.%M.%S).png";
      }
    ];
    packages = [
      android-studio
      android-sdk
      gradle
      jdk17
      aapt
      # here is where I'd add nodejs and yarn 
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
