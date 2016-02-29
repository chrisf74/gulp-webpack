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

	Runs tests via Karma server through PhantomJS browser

	* `-watch` or `-w`
	
		Re-runs the task when src or test files change

	* `-browser="Browser Browser"` or `-b="Browser Browser"`

		Capture browser(s) via launcher plugin(s)
