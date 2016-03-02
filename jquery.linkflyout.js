/**
 * @file converts a link + div, into a link + hidden button + flyout and handles all hide/show behaviour.
 * @author Ian McBurnie <ianmcburnie@hotmail.com>
 * @version 0.3.1
 * @requires jquery
 * @requires @ebay/jquery-mouse-exit
 * @requires @ebay/jquery-button-flyout
 */

(function ($, window, document, undefined) {

    /**
    * @method "jQuery.fn.linkFlyout"
    * @param {Object} [options]
    * @return {Object} chainable jQuery class
    */
    $.fn.linkFlyout = function linkFlyout(options) {

        options = options || {};

        return this.each(function onEach() {
            var $this = $(this),
                $link = $this.find('> a'),
                $overlay = $this.find('> div:last-child'),
                $hiddenButton;

            // assign next id in sequence if one doesn't already exist
            $this.nextId('link-flyout');

            $hiddenButton = $('<button type="button">Expand '+$link.text()+'</button>');
            $hiddenButton.insertAfter($link);

            $this.buttonFlyout(options);

            // setup mouseExit custom event plugin
            $overlay.mouseExit();

            // setup mouse hover/out behaviour
            $link.on('mouseenter', function onLinkMouseEnter(e) {
                $this.trigger('openButtonFlyout');
                $overlay.one('mouseExit', function onOverlayMouseExit() {
                    $this.trigger('closeButtonFlyout');
                });
            });

        });
    };

}(jQuery, window, document));

/**
* The jQuery plugin namespace.
* @external "jQuery.fn"
* @see {@link http://learn.jquery.com/plugins/|jQuery Plugins}
*/
