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
* `gulp test [options]`

	Runs tests via Karma server through PhantomJS browser

	* `-watch` or `-w`

		Re-runs the task when src or test files change

	* `-browser` or `-b`

		Capture browser(s) via launcher plugin(s). Example, capture Chrome and Safari:

		`gulp test -b "Chrome,Safari"`

* `gulp serve [options]`

	Serves bundled modules at 0.0.0.0:8080
	
	* `-hot` or `-h`
	
		Hot module replacement

* `gulp build [options]`

	Bundles modules into the build directory
	
	* `-debug` or `-d`
	
		Includes source maps for debugging	
