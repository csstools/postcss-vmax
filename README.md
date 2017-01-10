# PostCSS VMax [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][PostCSS]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-image]][lic-url]
[![Changelog][log-image]][log-url]
[![Gitter Chat][git-image]][git-url]

[PostCSS VMax] lets you use `vmax` units in Edge and Internet Explorer.

```css
/* before */

.example {
	font-size: 1vmax;
}

/* after */

@media (orientation: landscape) {
	.example {
		font-size: 1vw;
	}
}

@media (orientation: portrait) {
	.example {
		font-size: 1vh;
	}
}

.example {
	font-size: 1vmax;
}
```

## Usage

Add [PostCSS VMax] to your build tool:

```bash
npm install postcss-vmax --save-dev
```

#### Node

```js
require('postcss-vmax').process(YOUR_CSS, { /* options */ });
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Load [PostCSS VMax] as a PostCSS plugin:

```js
postcss([
	require('postcss-vmax')({ /* options */ })
]).process(YOUR_CSS, /* options */);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Enable [PostCSS VMax] within your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
	return gulp.src('./src/*.css').pipe(
		postcss([
			require('postcss-vmax')({ /* options */ })
		])
	).pipe(
		gulp.dest('.')
	);
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Enable [PostCSS VMax] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			use: [
				require('postcss-vmax')({ /* options */ })
			]
		},
		dist: {
			src: '*.css'
		}
	}
});
```

[npm-url]: https://www.npmjs.com/package/postcss-vmax
[npm-img]: https://img.shields.io/npm/v/postcss-vmax.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-vmax
[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-vmax.svg
[lic-url]: LICENSE.md
[lic-image]: https://img.shields.io/npm/l/postcss-vmax.svg
[log-url]: CHANGELOG.md
[log-image]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-image]: https://img.shields.io/badge/chat-gitter-blue.svg

[PostCSS VMax]: https://github.com/jonathantneal/postcss-vmax
[PostCSS]: https://github.com/postcss/postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
