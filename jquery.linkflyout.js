/**
 * @file converts a link + div, into a link + hidden button + flyout and handles all hide/show behaviour.
 * @author Ian McBurnie <ianmcburnie@hotmail.com>
 * @version 0.6.2
 * @requires jquery
 * @requires jquery-mouse-exit
 * @requires jquery-button-flyout
 */
(function($, window, document, undefined) {
    /**
    * @method "jQuery.fn.linkFlyout"
    * @return {Object} chainable jQuery class
    */
    $.fn.linkFlyout = function linkFlyout() {
        return this.each(function onEach() {
            var $widget = $(this);
            var $link = $widget.find('.flyout__anchor, > a');
            var $overlay = $widget.find('.flyout__overlay, > *:last-child');
            var $toggleButton;

            // assign next id in sequence if one doesn't already exist
            $widget.nextId('link-flyout');

            $toggleButton = $('<button class="flyout__button" type="button">Expand ' + $link.text() + '</button>');
            $toggleButton.insertAfter($link);

            $widget.buttonFlyout({focusManagement: true});

            // setup mouseExit custom event plugin
            $overlay.mouseExit();

            // close flyout when shift-tabbing out of flyout onto button
            $toggleButton.on('focus', function onToggleButtonFocus(e) {
                if ($toggleButton.attr('aria-expanded') === 'true') {
                    $toggleButton.click();
                }
            });

            // setup mouse hover/out behaviour
            $widget.on('mouseenter', function onLinkMouseEnter(e) {
                if ($toggleButton.attr('aria-expanded') === 'false') {
                    $toggleButton.click();
                    $widget.one('mouseExit', function onOverlayMouseExit() {
                        $toggleButton.click();
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
