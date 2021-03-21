autocrop-worker
===========
[![npm][npm]][npm-url]
[![license][license]][license-url]
<a href="https://npmcharts.com/compare/autocrop-worker?minimal=true">
  <img src="https://img.shields.io/npm/dm/autocrop-worker.svg">
</a>
<a href="https://img.shields.io/bundlephobia/minzip/autocrop-worker">
  <img src="https://img.shields.io/bundlephobia/minzip/autocrop-worker">
</a>
<br>

A simple, fast autocrop library which automagically crops the image. The cropping related functions are based on autocrop.js <https://github.com/lqez/autocrop.js>. This library offloads image processing work from main thread to workers using workerpool.

Demo site: <https://johnpremkumar.github.io/autocrop-worker/demo/>

Install
-------

```bash
$ npm install autocrop-worker
```

Usage
-----

### As ES6 Module with bundlers like webpack, etc. ###

```javascript
import autocrop from 'autocrop-worker'
autocrop(<original_image_element>, (target_image_element), (options));
```

### As legacy javascript files using script tags. ###
```javascript
// workerpool need to be loaded before autocrop-worker.min.js
<script type="text/javascript" src="https://unpkg.com/workerpool@6.0.3/dist/workerpool.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/autocrop-worker@1.0.4/dist/autocrop-worker.min.js"></script>
...
<script>
autocrop(<original_image_element>, (target_image_element), (options));
</script>
```

If `target_image_element` is set `null`, it will replace `original_image_element` with the cropped result.

Parameter
---------

```javascript
const autoCropDefaultOptions = {
  bgColor: '#FFFFFF',       // Background color.
  alphaTolerance: 20,       // Pixels that are transparent than this value are considered transparent.
  colorTolerance: 20,       // Pixels similar to the background color are considered as the background.
  invertTolerance: 0.90,    // Invert the image if most of non-transparent pixels are background color.
  margin: '2%',             // Margin
  allowInvert: true,        // Allow invert if needed.
  marker: 'cropped',        // Add a marker attribute to prevent duplicated cropping.
  version: boolean|string   /* Defaults to current timestamp. Used for avoiding crossorigin taint issues due to previous cache.
                               Set it to false for dataURL and blobs */
};
```

Example
-------

![Example image of autocrop-worker.js](./docs/demo/images/result.png)


Used By
-------

<a href="https://www.hackerkid.org/" target="_blank">
  <img src="https://www.hackerkid.org/images/favicons/favicon.ico" alt="HackerKidLogo">
  <p>HackerKid</p>
</a>


License
-------

MIT



[npm]: https://img.shields.io/npm/v/autocrop-worker.svg
[npm-url]: https://npmjs.com/package/autocrop-worker
[license]: https://img.shields.io/npm/l/autocrop-worker
[license-url]: https://github.com/JohnPremKumar/autocrop-worker/blob/main/LICENCE
