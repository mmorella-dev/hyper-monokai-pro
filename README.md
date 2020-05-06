# hyper-theme-monokai-pro

[![npm version](https://badge.fury.io/js/hyper-monokai-pro.svg)](https://www.npmjs.com/package/hyper-monokai-pro)

A theme for [Hyper](https://github.com/zeit/hyper) inspired by the [Monokai Pro](https://monokai.pro/) theme for VS Code and Sublime Text.

![Monokai Pro Theme](/../pro.png?raw=true)

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
        /*
         * Available themes:
         * "pro" || "octagon" || "machine" || "ristretto" || "spectrum" || "classic"
         */
        theme: "octagon"
      },
    }
}
```

## Credit

This plugin is a port of color schemes contained in the Monokai Pro theme for VSCode. Monokai Pro is a commercial product created by [Wimer Hazenberg](https://github.com/Monokai), with whom this project is entirely unaffiliated. I encourage you to support his work by purchasing a license.

## License

MIT © MozzarellaM

## Screenshots

[![Screenshot of octagon theme](https://i.imgur.com/tMNi53p.png)]((https://imgur.com/a/UEVjTHI))
[![Screenshot of ristretto theme](https://i.imgur.com/vpmVvU6.png)]((https://imgur.com/a/UEVjTHI))
[![Screenshot of classic theme](https://i.imgur.com/6vSdrKC.png)]((https://imgur.com/a/UEVjTHI))
[![Screenshot of machine theme](https://i.imgur.com/tcrDUS1.png)]((https://imgur.com/a/UEVjTHI))
[![Screenshot of spectrum theme](https://i.imgur.com/hGGvgus.png)]((https://imgur.com/a/UEVjTHI))
