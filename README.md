# gulp-webpack
Build system for modular web apps

## Dependencies
* `brew install node`
* `npm install -g gulp`

## Setup
* `git clone git@github.com:chrisf74/gulp-webpack.git`
* `cd gulp-webpack`
* `npm install`

## Gulp Tasks
* `gulp test [-watch | -browsers]`
	* Runs Jasmine tests via Karma server through PhantomJS browser
	* `-watch` or `-w` will re-run task when test or src files change
	* `-browser` or `-b="Chrome Safari"` will run tests through browsers other than PhantomJS browser using Karma browser launcher(s)
