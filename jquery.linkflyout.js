/**
 * @file converts a link + div, into a link + hidden button + flyout and handles all hide/show behaviour.
 * @author Ian McBurnie <ianmcburnie@hotmail.com>
 * @version 0.4.2
 * @requires jquery
 * @requires jquery-mouse-exit
 * @requires jquery-button-flyout
 */

(function ($, window, document, undefined) {

    /**
    * @method "jQuery.fn.linkFlyout"
    * @return {Object} chainable jQuery class
    */
    $.fn.linkFlyout = function linkFlyout() {

        return this.each(function onEach() {
            var $this = $(this),
                $link = $this.find('> a'),
                $overlay = $this.find('> div:last-child'),
                $toggleButton;

            // assign next id in sequence if one doesn't already exist
            $this.nextId('link-flyout');

            $toggleButton = $('<button type="button">Expand '+$link.text()+'</button>');
            $toggleButton.insertAfter($link);

            $this.buttonFlyout({focusManagement: true});

            // setup mouseExit custom event plugin
            $overlay.mouseExit();

            // close flyout when shift-tabbing out of flyout onto button
            $toggleButton.on('focus', function onToggleButtonFocus(e) {
                if($toggleButton.attr('aria-expanded') === 'true') {
                    $toggleButton.click();
                }
            });

            // setup mouse hover/out behaviour
            $this.on('mouseenter', function onLinkMouseEnter(e) {
                if($toggleButton.attr('aria-expanded') === 'false') {
                    $toggleButton.click();
                    $this.one('mouseExit', function onOverlayMouseExit() {
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
