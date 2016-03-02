# @ebay/jquery-link-flyout

<p>
    <a href="https://travis-ci.org/ianmcburnie/jquery-link-flyout"><img src="https://api.travis-ci.org/ianmcburnie/jquery-link-flyout.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/ianmcburnie/jquery-link-flyout?branch=master'><img src='https://coveralls.io/repos/ianmcburnie/jquery-link-flyout/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
</p>

jQuery collection plugin that converts an anchor + div into an anchor + hidden focus button + overlay, and handles all hide/show behaviour.

```js
$('.flyout--link').linkFlyout();
```

## Experimental

This plugin is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

## Install

```js
npm install @ebay/jquery-link-flyout
```

## Example

Markup before plugin:

```html
<span class="flyout flyout--link">
    <a href="http://www.ebay.com">Notifications</a>
    <div>
        <h2>Flyout Title</h2>
        <p>Flyout Content</p>
    </div>
</span>
```

Markup after plugin:

```html
<span class="flyout flyout--link" id="linkflyout-0">
    <a href="http://www.ebay.com">Notifications</a>
    <button type="button" aria-controls="linkflyout-0-overlay" aria-expanded="false">Notifications</button>
    <div id="linkflyout-0-overlay">
        <h2>Flyout Title</h2>
        <p>Flyout Content</p>
    </div>
</span>
```

## Dependencies

* [jquery](https://jquery.com/)
* [@ebay/jquery-mouse-exit](https://github.com/ianmcburnie/jquery-mouse-exit)
* [@ebay/jquery-button-flyout](https://github.com/ianmcburnie/jquery-button-flyout)

## Development

Run `npm start` for test driven development. All tests are located in `test.js`.

Execute `npm run` to view all available CLI scripts:

* `npm start` test driven development: watches code and re-tests after any change
* `npm test` runs tests & generates reports (see reports section below)
* `npm run lint` lints code and reports to jshint.txt
* `npm run minify` builds minified version of code
* `npm run build` cleans, lints, tests and minifies (called on `npm prepublish` hook)
* `npm run clean` deletes all generated test reports and coverage files

## Test Reports

Each test run will generate the following reports:

* `/test_reports/coverage` contains Istanbul code coverage report
* `/test_reports/html` contains HTML test report
* `/test_reports/junit` contains JUnit test report

## CI Build

https://travis-ci.org/ianmcburnie/jquery-link-flyout

## Code Coverage

https://coveralls.io/github/ianmcburnie/jquery-link-flyout?branch=master
