# Local Component Development

## Summary

Our team needs to be able quickly fix potential issues discovered in `status-web`
and make progress independently of the `status-web` release process. To achieve
these goals, we will maintain our own git fork of `status-web`, while always
trying to upstream our work.

In this repository, we will include our fork of `status-web` as a git submodule
that is used as a local dependency in the yarn workspace in order to make it
very easy to experiment with changes to `status-web` while maintaining the ability
to prepare clean feature branches that will be submitted as PRs to the upstream repo.

## Workflow
When facing an issue in status-web or aiming to introduce a new feature or component,
it's highly beneficial to be able to assess your modifications in real-time within
nimbus-gui. Regrettably, achieving this seamlessly with the tooling provided by
yarn isn't straightforward. Hence, our custom scripts offer a viable alternative.

### I. Switch to local component development mode

To begin local component development, run the following command:
```bash
yarn local_deps:begin
```
This command will:
- Check and update the `status-web` submodule if necessary
- Build the `status-web` packages
- Replace the `@status-im/components` package installed by yarn with the local
    version we just built

Now we depend on the local version of `@status-im/components` and can make changes to it

### II. Make the required changes

Inside the `vendor/status-web` directory, you can find the source code. For example,
if you want to make changes to the components, they are located in `vendor/status-web/packages/components`.
Now in order to make changes and examine them in real-time, you can follow the steps below:

- Make the required changes
- Build and install the changes running:
    ```
    yarn local_deps:build
    ```
- Examine the changes in `nimbus-gui`'s dev environment

### III. Push the changes to our `status-web` fork

Once you are satisfied with the changes, you can push them to our fork of `status-web`

- Navigate to the `vendor/status-web` directory and examine the changes
    ```
    cd vendor/status-web
    git status
    ```
    > Do not mind the changes in the following files, you should not commit them:
     `apps/mobile/package.json`,
     `packages/colors/package.json`,
     `packages/icons/package.json`,
     `yarn.lock`
- Commit your changes
    ```bash
    git checkout -b <your-branch-name>
    git add <your-changes>
    git commit
    git push
    ```
- Create a PR to the `nimbus-gui/status-web` repository

### IV. Exit local component development mode

Now with the changes pushed to our fork of `status-web`, you can exit the local
component development mode by running the following command:
```bash
yarn local_deps:end
```
This will check if you have any uncommitted changes and will remind you to commit
them if you do. It will also restore the original `@status-im/components` package,
by installing it with yarn.

### V. Update packages and submodule

Having the PR merged, you can update the `@status-im/components` package and
the `status-web` submodule in `nimbus-gui`.

- Update the `@status-im/components` package by setting the correct revision in
    the `package.json` file and run `yarn install`
- Update the `status-web` submodule:
    ```bash
    cd vendor/status-web
    git pull
    cd ../..
    git add vendor/status-web
    git commit -m "chore(vendor): Update status-web submodule"
    ```
