# hyper-theme-monokai-pro

A theme for [Hyper](hyper.is) inspired by the [Monokai Pro](monokai.pro) color palette.

## Installation

Add `hyper-monokai-pro` to the plugins list in your ~/.hyper.js config file.
Or use `hyper i hyper-monokai-pro`.

## Config

There are several themes included in this plugin.

* `pro` – Monokai Pro *(default)*
* `octagon` – Monokai Pro (Filter Octagon)
* `machine` – Monokai Pro (Filter Machine)
* `ristretto` – Monokai Pro (Filter Machine)
* `spectrum` – Monokai Pro (Filter Machine)
* `classic` – Monokai Classic

To switch between them, simply add the following property to your `~/hyper.js` file

```js
module.exports = {
  config: {
    /* ... */
    hyperMonokaiPro: {
        theme: "octagon"
        /*
         * Available themes:
         *
         * `pro` – Monokai Pro (default)
         * `octagon` – Monokai Pro (Filter Octagon)
         * `machine` – Monokai Pro (Filter Machine)
         * `ristretto` – Monokai Pro (Filter Machine)
         * `spectrum` – Monokai Pro (Filter Machine)
         * `classic` – Monokai Classic
         */
    }
  }
}
```

## Credit

This plugin is a port of color schemes contained in the
Monokai Pro theme for VSCode. Monokai Pro is a commercial product created by [Wimer Hazenberg](https://github.com/Monokai), whom this project has no affiliation to.

MIT © MozzarellaM
