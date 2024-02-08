# Nimbus GUI

The goal of this project is to develop a management and monitoring GUI for the [Nimbus Ethereum client](https://nimbus.team).

Right now, Nimbus is managed as a typical system service. It offers executables that can be launched from the command-line. It produces log output as the primary way to communicate information to the user and it's typically monitored through [Prometheus and Grafana](https://nimbus.guide/metrics-pretty-pictures.html). The user can interact with Nimbus through a standardized [REST](https://ethereum.github.io/beacon-APIs/) [APIs](https://ethereum.github.io/keymanager-APIs/) with some Nimbus-specific extensions.

Since the primary purpose of Nimbus is to enable the user to operate [Ethereum validators](https://ethereum.org/en/staking/), users typically also consult web-sites such as [beaconcha.in](https://beaconcha.in/), which provide up-to-date information about the network and the obtained rewards of each validator. The beaconcha.in web-site also offers a popular mobile application which can alert the user if their validator(s) are failing to perform their duties (which can happen if the Nimbus service is experiencing any technical issues).

At the moment, all of the above makes Nimbus accessible mostly to users with the sufficient technical skills to setup and integrate multiple software packages, often within a rented server running Linux in a remote data center.

We would like to make Nimbus much more accessible to non-technical users by developing GUI installers and GUI management and monitoring software. We have prepared a rough roadmap for this here:

https://github.com/status-im/nimbus-eth2/issues/3423

## Development Plan

The initial version of the management UI will be developed as a web application, communicating with a special service called the [Status Node Management Service](https://github.com/status-im/status-node-manager).

As part of the [Logos](https://logos.co/) movement, Nimbus benefits from close ties to [Status](https://status.im/), a messanger that offers strong integration with Ethereum and also serves as a [mobile wallet](https://status.im/secure-wallet/) and a [DApp browser](https://zerion.io/blog/what-is-dapp-browser/). We can provide a simple interface for solo stakers who would be able to execute their validator deposits directly from the Status app in the future. The Nimbus management UI will be then embedded within the app and it will use the same design system as the app.

The Status UI team is currently developing the next iteration of the Status design system that will be used across its mobile and desktop products. To facilitate the future integration, we will use the same system during the development of the Nimbus GUI from the start.

## UX Designs (WIP)

Initial designs for the Nimbus management UI are being developed here:

https://www.figma.com/file/kUO8PyQCo89SyvCn3pFmNS/Nodes-Nimbus---New-Design-System?type=design&node-id=3%3A188588&t=npvkylewM1T5GUHG-1

Please note that all of the graphics are currently placeholders as the final artwords are still being prepared. The layout of the screens is likely to resemble the final design, although the content and the available functionality on the web-pages is still under review.

## Live Demos

We have a Storybook up at https://nimbus-gui.github.io/nimbus-gui/ which shows
the components of the project. We also have a deployed version of the GUI up at
https://nimbus-gui.vercel.app/ which shows the GUI as it currently looks in the
`main` branch of the
[`nimbus-gui/nimbus-gui`](https://github.com/nimbus-gui/nimbus-gui) repository.

Here is a list with the available pages:
- [Main page](https://nimbus-gui.vercel.app/)
- [Device pairing page](https://nimbus-gui.vercel.app/pair-device)
- [Validator onboarding page](https://nimbus-gui.vercel.app/validator-onboarding)
- [Validator management page](https://nimbus-gui.vercel.app/validator-management)
- [Dashboard page](https://nimbus-gui.vercel.app/dashboard)
- [Device Health Check page](https://nimbus-gui.vercel.app/device-health-check)
- [Device Sync Status page](https://nimbus-gui.vercel.app/device-sync-status)
- [Create Local Node page](https://nimbus-gui.vercel.app/create-local-node)
- [Logs page](https://nimbus-gui.vercel.app/logs)

## How to Contribute

### Install all dependencies

Run `yarn` in the root directory of the project in order to install dependencies.

### Run a development server

If you want to run a development server to see what the GUI looks like you can
run the following command:

```bash
yarn dev
```

This will start the server on port 5173 and you can open https://localhost:5173
in order to see the page.

For example here are some of the pages you can see:
- Main page - http://localhost:5173/
- Device pairing page - http://localhost:5173/pair-device
- Validator onboarding page - http://localhost:5173/validator-onboarding
- Validator management page - http://localhost:5173/validator-management
- Dashboard page - http://localhost:5173/dashboard
- Device Health Check page - http://localhost:5173/device-health-check
- Device Sync Status page - http://localhost:5173/device-sync-status
- Create Local Node page - http://localhost:5173/create-local-node
- Logs page - http://localhost:5173/logs

### Launch Storybook locally

If you want to run the Storybook locally you can simply run `yarn storybook` in
the root of the project. This is useful if you want to contribute a component
and be sure that it renders as you expect it to, without testing it out on any
given page.
