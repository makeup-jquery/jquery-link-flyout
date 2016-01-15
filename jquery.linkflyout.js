/**
* @name @ebay/jquery-link-flyout
* @function $.fn.linkFlyout
* @version 0.1.3
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @requires @ebay/jquery-mouse-exit
* @requires @ebay/jquery-button-flyout
* @desc converts a link + div, into a link + hidden button + flyout and handles
* all hide/show behaviour.
* @todo need a plugin to update y-coordinate when page scrolls.
*/
(function ($, window, document, undefined) {

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

            // setup mouseexit custom event plugin
            $overlay.mouseExit();

            // setup mouse hover/out behaviour
            $link.on('mouseenter', function onLinkMouseEnter(e) {
                $this.trigger('show.buttonFlyout');
                $overlay.one('mouseexit', function onOverlayMouseExit() {
                    $this.trigger('hide.buttonFlyout');
                });
            });

        });
    };

}(jQuery, window, document));
