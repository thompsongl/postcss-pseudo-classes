# postcss-pseudo-classes

A [PostCSS](https://github.com/postcss/postcss) plugin to add companion classes to your pseudo styles for testing and convenience.

__Example input__

```css
.Component:active { /* ... */ }
```

__Example output__
```css
.Component:active { /* ... */ }
.Component.pseudo-active { /* ... */ }
```


## Installation

```
npm install postcss-pseudo-classes
```

## Usage

```javascript
var fs        = require('fs');
var postcss   = require('postcss');
var pseudoclasses = require('postcss-pseudo-classes');

var css = fs.readFileSync('css/my-file.css', 'utf8').toString();
var out = postcss()
          .use(pseudoclasses({
            blacklist: [], // Default contains ':root'
            allCombinations: true // Default is false. If true, will ouput CSS with all combinations of pseudo styles/pseudo classes.
          }))
          .process(css);
```

## License

MIT

## Acknowledgements

* Based on [rework-pseudo-classes](https://github.com/SlexAxton/rework-pseudo-classes)
