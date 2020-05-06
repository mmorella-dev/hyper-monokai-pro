# hyper-theme-monokai-pro

[![npm version](https://badge.fury.io/js/hyper-monokai-pro.svg)](https://www.npmjs.com/package/hyper-monokai-pro)

A theme for [Hyper](https://github.com/zeit/hyper), inspired by [Monokai Pro](https://monokai.pro/) theme for VS Code and Sublime Text.

![Monokai Pro Theme](/../screenshots/pro.png?raw=true)

## Installation

Add `"hyper-monokai-pro"` to the beginning of `plugins` in `~/.hyper.js`.

### Compatibility note

If you are using another extension like `hyper-tabs-enhanced` which modifies Hyper's CSS, you should place this theme **before** those extensions, otherwise it will use colors based on the pre-existing theme, rather than this one.

## Configuration

There are several themes included in this plugin.

* `pro` – Monokai Pro *(default)*
* `octagon` – Monokai Pro (Filter Octagon)
* `machine` – Monokai Pro (Filter Machine)
* `ristretto` – Monokai Pro (Filter Machine)
* `spectrum` – Monokai Pro (Filter Machine)
* `classic` – Monokai Classic

To switch between them, add the following property to your `~/hyper.js` file

```js
module.exports = {
  config: {
    ...
    hyperMonokaiPro: {
        // theme: "pro" || "octagon" || "machine" || "ristretto" || "spectrum" || "classic"
        theme: "octagon"
    },
    ...
  }
}
```

## Screenshots

![Monokai Octagon Theme](/../screenshots/octagon.png?raw=true)

![Monokai Ristretto Theme](/../screenshots/ristretto.png?raw=true)

![Monokai Spectrum Theme](/../screenshots/spectrum.png?raw=true)

![Monokai Machine Theme](/../screenshots/machine.png?raw=true)

![Monokai Classic Theme](/../screenshots/classic.png?raw=true)

## Credit

This plugin is a port of color schemes contained in the Monokai Pro theme for VSCode. Monokai Pro is a commercial product created by [Wimer Hazenberg](https://github.com/Monokai), with whom this project is entirely unaffiliated. 

I encourage you to support his work by purchasing a license.

## License

MIT © MozzarellaM
