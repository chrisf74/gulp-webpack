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
* `gulp clean`
	* Removes `/build`
* `gulp copy`
	* Copies files to `/build` directory
* `gulp build`
	* Calls `gulp clean`
	* Calls `gulp copy`
* `gulp watch`
	* Calls `gulp build`
* `gulp serve`
	* Calls `build`
	* Calls `watch`
	* Serves `/build/index.html` at `http://0.0.0.0:8080/`
* `gulp test`
	* Automatically runs Jasmine specs in `/test/` through PhantomJS browser via Karma
	* Visit `http://0.0.0.0:9876` to capture browsers manually
