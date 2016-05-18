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

	Runs tests via Karma server through Chrome browser

	`-watch` or `-w` re-runs the task when src or test files change

	`-browser` or `-b` captures browsers via launcher plugins. For example: `gulp test -b Chrome,Safari`

* `gulp serve [options]`

	Serves bundled modules at 0.0.0.0:8080

	`-hot` or `-h` Enables hot module replacement

* `gulp build [options]`

	Bundles modules into the build directory

	`-debug` or `-d` includes source maps for debugging
