[![Piral Logo](https://github.com/smapiot/piral/raw/develop/docs/assets/logo.png)](https://piral.io)

# [Piral Sample](https://piral.io) &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smapiot/piral/blob/main/LICENSE) [![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/piral-io/community)

> A sample to showcase how to distribute the layout to pilets.

:zap: A mono repository showing how to distribute the layout to different microfrontends.

Distributes the layout of the standard sample into three (3) microfrontends:

- `dashboard-pilet` contains the layout for the dashboard
- `menu-pilet` contains the layout for the menu
- `layout-pilet` contains the general layout, notifications, and error representations

Note that this distribution is completely arbitrary. These three microfrontends may as well be just one, two, or more. Also what parts of the layout you extract and which you keep is up to you. Ideally, you keep things that are

- always required by the application
- don't change very often

If some layout parts have a high change frequency then extracting them may be useful. Likewise, for robustness it makes sense to keep layout parts in your application in any case.

You can visit this demo at [distributed-layout.samples.piral.cloud/](https://distributed-layout.samples.piral.cloud/).

## Getting Started

First, use `lerna` to bootstrap the mono repo. Make sure to have `yarn` (v1) installed for this.

```sh
npx lerna bootstrap
```

## Running the Code

Now you can run all pilets:

```sh
yarn start
```

This is an alias for `yarn watch:all`.

Alternatively, run only a single pilet (e.g., the `demo-pilet`):

```sh
name=my yarn watch:pilet
```

Note that running the layout-less pilet will display the thing

Or if you wan to, you can also run the app shell in isolation:

```sh
yarn watch:piral
```

## More Information

The [Piral documentation page](https://docs.piral.io/guidelines/tutorials/23-monorepo) has a tutorial on monorepos. Make sure to follow and understand the tutorial before going deep into this sample.

For layouting in general we recommend reading [the tutorial on it](https://docs.piral.io/guidelines/tutorials/06-piral-layout).

## License

Piral and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).
