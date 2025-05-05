{
  description = "TwoSome";

  inputs = {
    nixpkgs.follows = "haskellNix/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    haskellNix.url  = "github:input-output-hk/haskell.nix";
  };

  outputs = { self, nixpkgs, flake-utils, haskellNix }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [ haskellNix.overlay ];
        pkgs = import nixpkgs {
          inherit system overlays;
          inherit (haskellNix) config;
        };

        project = pkgs.haskell-nix.cabalProject {
          src               = ./.;
          compiler-nix-name = "ghc9101";
        };
      in
      rec {
        devShell = project.shellFor {
          tools = {
            cabal                   = {};
            haskell-language-server = {};
            hlint                   = {};
            ormolu                  = {};
          };
          buildInputs = [ pkgs.git ];
        };

        packages.default = project.hsPkgs.backend.components.exe.backend;

        apps.default = flake-utils.lib.mkApp { drv = packages.default; };
      }
    );
}
