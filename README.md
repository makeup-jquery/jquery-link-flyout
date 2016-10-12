# jquery-link-flyout

<p>
    <a href="https://travis-ci.org/ianmcburnie/jquery-link-flyout"><img src="https://api.travis-ci.org/ianmcburnie/jquery-link-flyout.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/ianmcburnie/jquery-link-flyout?branch=master'><img src='https://coveralls.io/repos/ianmcburnie/jquery-link-flyout/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-link-flyout"><img src="https://david-dm.org/ianmcburnie/jquery-link-flyout.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-link-flyout#info=devDependencies"><img src="https://david-dm.org/ianmcburnie/jquery-link-flyout/dev-status.svg" alt="devDependency status" /></a>
</p>

jQuery plugin that creates the basic interactivity for a link that expands and collapses a flyout

```js
$(selector).linkFlyout(options);
```

## Deprecated

*This plugin is deprecated*.

Please use any of the following plugins instead:

* <a href="https://github.com/ianmcburnie/jquery-click-flyout">jquery-click-flyout</a>
* <a href="https://github.com/ianmcburnie/jquery-hover-flyout">jquery-hover-flyout</a>
* <a href="https://github.com/ianmcburnie/jquery-focus-flyout">jquery-focus-flyout</a>

## Install

```js
npm install jquery-link-flyout
```

## Example

Markup before plugin:

```html
<span class="flyout">
    <a class="flyout__anchor" href="http://www.ebay.com">Notifications</a>
    <div class="flyout__live-region" aria-live="off">
        <div class="flyout__overlay">
            <h2>Flyout Title</h2>
            <p>Flyout Content</p>
        </div>
    </div>
</span>
```

Execute plugin:

```js
$('.flyout').linkFlyout();
```

Markup after plugin:

```html
<span class="flyout" id="linkflyout-0">
    <a class="flyout__anchor" href="http://www.ebay.com">Notifications</a>
    <button class="flyout__button" type="button" aria-controls="linkflyout-0-overlay" aria-expanded="false">Notifications</button>
    <div class="flyout__live-region" aria-live="off">
        <div id="linkflyout-0-overlay">
            <h2>Flyout Title</h2>
            <p>Flyout Content</p>
        </div>
    </div>
</span>
```

'Click' event on stealth button will now toggle aria-expanded state of button. CSS can use this state to hide/show overlay. For example:

```css
.flyout__overlay {
    display: none;
    position: absolute;
    z-index: 1;
}
.flyout__button[aria-expanded=true] ~ .flyout__live-region > .flyout__overlay {
    display: block;
}
```

## Options

* `autoCollapse` - whether overlay collapses when focus leaves the widget
* `anchorSelector` - selector for anchor element (default: '.flyout__anchor, > a')
* `debug` - print debug statements to console (defualt: false)
* `focusManagement` - set focus to 'none, 'overlay', 'first' or an ID (default: 'none')
* `overlaySelector` - selector for overlay element (default: '.flyout__overlay')

## Dependencies

* [jquery](https://jquery.com/)
* [jquery-mouse-exit](https://github.com/ianmcburnie/jquery-mouse-exit)
* [jquery-button-flyout](https://github.com/ianmcburnie/jquery-button-flyout)

## Development

Useful NPM task runners:

* `npm start` for local browser-sync development.
* `npm test` runs tests & generates reports (see reports section below)
* `npm run tdd` test driven development: watches code and re-tests after any change
* `npm run build` cleans, lints, tests and minifies

Execute `npm run` to view all available CLI scripts.

## Test Reports

Each test run will generate the following reports:

* `/test_reports/coverage` contains Istanbul code coverage report
* `/test_reports/html` contains HTML test report
* `/test_reports/junit` contains JUnit test report

## CI Build

https://travis-ci.org/ianmcburnie/jquery-link-flyout

## Code Coverage

https://coveralls.io/github/ianmcburnie/jquery-link-flyout?branch=master
