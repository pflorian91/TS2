# TS2

Abstract
---
TS2 contains code samples and configuration to run a Typescript project.

The intention is to keep this repository up-to-date with the latest version of Typescript available.

Code samples
---

1. Design patterns

Configuration
---

The project has a build pipeline setup to compile Typescript 2+ through ES6 and, finally, to ES5.

I did not consider a browser integration useful here because this project must provide useful code snippets which you can copy-and-paste into another project.

The files are bundled using [Gulp](http://gulpjs.com/), compiled to ES6 using [gulp-typescript](https://github.com/ivogabe/gulp-typescript) and then to ES5 with [gulp-babel](https://www.npmjs.com/package/gulp-babel).

[gulp-typescript](https://github.com/ivogabe/gulp-typescript) is a [Gulp](http://gulpjs.com/) wrapper over the [Typescript](https://www.typescriptlang.org) compiler.
See [TS compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for information on how to configure.

[gulp-babel](https://www.npmjs.com/package/gulp-babel) is a [Gulp](http://gulpjs.com/) wrapper over [Babel](https://babeljs.io/). See [Babel API](https://babeljs.io/docs/usage/api/) for information on how to configure.

Source maps are generated using [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps).

Tslint
- https://github.com/panuhorsmalahti/gulp-tslint
- https://palantir.github.io/tslint/
- https://palantir.github.io/tslint/rules/


Some things which are used in configuration and you might want to be aware of:
- [merge2](https://www.npmjs.com/package/merge2) package used to merge the Typescript project streams
- [Information from TS on Gulp integration ](https://www.typescriptlang.org/docs/handbook/gulp.html)
- Breaking changes on [gulp-typescript v3]http://dev.ivogabe.com/gulp-typescript-3/
