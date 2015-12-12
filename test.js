describe("jquery.linkflyout.js", function() {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

    var dummyEventTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL - 500;

    var dom = '<div class="flyout">'
                + '<a href="http://www.ebay.com">Notifications</a>'
                + '<div>'
                    + '<h2>Flyout Title</h2>'
                    + '<p>Flyout Content</p>'
                    + '<button>Close</button>'
                + '</div>'
            + '</div>';

    var $widget, $link, $overlay;

    var dummyEventHandlers = {
        onButtonFocus : function(e) {}
    };

    beforeEach(function() {
        $('body').empty().append($(dom));
        $widget = $('.flyout');
        $link = $('.flyout > a');
        $overlay = $('.flyout > div');
        $closeButton = $overlay.find('button');
    });

    it("should add button after link", function() {
        $widget.linkFlyout();
        expect($link.next().prop('tagName').toLowerCase()).toBe('button');
    });

    it("should trigger show.buttonFlyout on mouseenter", function(done) {
        // async assert
        $widget.on('show.buttonFlyout', done);

        $widget.linkFlyout();
        $link.trigger('mouseenter');
    });

    it("should trigger hide.buttonFlyout on mouseexit", function(done) {
        // async assert
        $widget.on('hide.buttonFlyout', done);

        $widget.linkFlyout();
        $link.trigger('mouseenter');
        $overlay.trigger('mouseexit');
    });

});
