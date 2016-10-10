/**
 * @file jQuery plugin that creates the basic interactivity for a link that expands and collapses a flyout
 * @author Ian McBurnie <ianmcburnie@hotmail.com>
 * @version 0.7.0
 * @requires jquery
 * @requires jquery-mouse-exit
 * @requires jquery-button-flyout
 */
(function($, window, document, undefined) {
    /**
    * @method "jQuery.fn.linkFlyout"
    * @return {Object} chainable jQuery class
    */
    $.fn.linkFlyout = function linkFlyout(options) {
        options = $.extend({
            autoCollapse: true,
            debug: false,
            focusManagement: 'none',
            anchorSelector: '.flyout__anchor, > a',
            overlaySelector: '.flyout__overlay'
        }, options);
        return this.each(function onEach() {
            var $widget = $(this);
            var $link = $widget.find(options.anchorSelector);
            var $overlay = $widget.find(options.overlaySelector);
            var $toggleButton;

            // assign next id in sequence if one doesn't already exist
            $widget.nextId('link-flyout');

            // append a stealth button after the link
            $toggleButton = $('<button class="flyout__button" type="button">Expand ' + $link.text() + '</button>');
            $toggleButton.insertAfter($link);

            $widget.buttonFlyout({
                autoCollapse: options.autoCollapse,
                debug: options.debug,
                focusManagement: options.focusManagement
            });

            // setup mouseExit custom event plugin
            $overlay.mouseExit();

            // should flyout collapse when shift-tabbing back to button?
            if (options.autoCollapse === true) {
                $toggleButton.on('focus', function onToggleButtonFocus(e) {
                    if ($toggleButton.attr('aria-expanded') === 'true') {
                        $toggleButton.attr('aria-expanded', 'false');
                    }
                });
            }

            // setup mouse hover/out behaviour
            $widget.on('mouseenter', function onLinkMouseEnter(e) {
                if ($toggleButton.attr('aria-expanded') === 'false') {
                    $toggleButton.attr('aria-expanded', 'true');
                    $widget.one('mouseExit', function onOverlayMouseExit() {
                        $toggleButton.attr('aria-expanded', 'false');
                    });
                }
            });
        });
    };
}(jQuery, window, document));

/**
* The jQuery plugin namespace.
* @external "jQuery.fn"
* @see {@link http://learn.jquery.com/plugins/|jQuery Plugins}
*/
