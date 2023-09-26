# nimbus-gui

A GUI for managing your [Nimbus](https://nimbus.team/) nodes.

## Deployed pages showing the project

We have a Storybook up at https://nimbus-gui.github.io/nimbus-gui/ which shows
the components of the project. We also have a deployed version of the GUI up at
https://nimbus-gui.vercel.app/ which shows the GUI as it currently looks in the
`main` branch of the
[`nimbus-gui/nimbus-gui`](https://github.com/nimbus-gui/nimbus-gui) repository.

## Development and running the project yourself

### Dependencies

Run `yarn` in the root directory of the project in order to install dependencies.

### Running a development server

If you want to run a development server to see what the GUI looks like you can
run the following command:

```bash
yarn dev
```

This will start the server on port 5173 and you can open https://localhost:5173
in order to see the page.

### Running storybook locally

If you want to run the Storybook locally you can simply run `yarn storybook` in
the root of the project. This is useful if you want to contribute a component
and be sure that it renders as you expect it to, without testing it out on any
given page.
