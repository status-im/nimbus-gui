#!/usr/bin/env bash

ROOT="$(git rev-parse --show-toplevel)"
VENDOR="$ROOT/vendor"
STATUS_WEB="$ROOT/vendor/status-web"
STATUS_WEB_COMPONENTS="$STATUS_WEB/packages/components"
NODE_MODULE_COMPONENTS="$ROOT/node_modules/@status-im/components"

# Function to check if the vendor folder is empty and initialize submodules if necessary
check_vendor_folder() {
    # Check if the vendor folder is empty
    if [ -z "$(ls -A "$VENDOR")" ]; then
        # If empty, initialize submodules
        git submodule update --init --recursive
        echo "Submodules initialized in $(pwd)"
    else
        # If not empty, print a message
        echo "Submodules are ready to use."
    fi
}

# Function to install dependencies and build project in vendor/status-web directory
install_and_build() {
    # Change directory to vendor/status-web
    cd "$STATUS_WEB" || exit

    # Print message indicating the directory being processed
    echo "Installing dependencies and building project in $(pwd)"

    # Install dependencies
    yarn install

    cd "$STATUS_WEB_COMPONENTS" || exit
    # Build project
    yarn build
    yarn build:types

    # Print completion message
    echo "Installation and build completed in $(pwd)"

    #clean up
    cd "$STATUS_WEB" || exit
    rm -rf .yarn/
    cd "$ROOT" || exit

}

copy_components() {
    # Check if the components folder exists in node_modules
    if [ -d "$NODE_MODULE_COMPONENTS" ]; then
        # If exists, delete the folder
        rm -rf "$NODE_MODULE_COMPONENTS"
        echo "Deleted existing components folder: $NODE_MODULE_COMPONENTS"
    fi

    # Copy components folder from vendor to node_modules
    cp -r "$STATUS_WEB_COMPONENTS" "$NODE_MODULE_COMPONENTS"
    echo "Copied components folder from $STATUS_WEB_COMPONENTS to $NODE_MODULE_COMPONENTS"
}

finish() {
    cd  "$STATUS_WEB" || exit
    git checkout apps/mobile/package.json
    git checkout packages/colors/package.json
    git checkout packages/icons/package.json
    git checkout yarn.lock

    git_status=$(git status --porcelain)

    # Check if there are uncommitted changes
    if [ -n "$git_status" ]; then
        # Prompt user to confirm if everything is committed
        echo "There are uncommitted changes. Have you committed everything?"
        exit 1
    fi

    echo "All changes are committed. Ready to finish local component development."
    cd "$ROOT" || exit
    yarn install
}

# Main function to execute based on argument
main() {
    case "$1" in
    "begin")
        check_vendor_folder
        install_and_build
        copy_components
        ;;
    "build")
        install_and_build
        copy_components
        ;;
    "end")
        finish
        ;;
    *)
        echo "Invalid argument. Please use 'begin', 'build' or 'end'."
        exit 1
        ;;
    esac
}

# Execute main function with the provided argument
main "$@"
