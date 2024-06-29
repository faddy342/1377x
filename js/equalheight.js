(function(jQuery) {
    jQuery.fn.maxHeight = function() {
        element = this;
        if ($(window).width() >= 768) {
            var maxHeight = 0;
            element.height('auto');
            element.each(function(i, value) {
                itemHeight = $(value).height();
                if (itemHeight > maxHeight) {
                    maxHeight = itemHeight;
                }
            });
            element.height(maxHeight);
        } else {
            element.height('auto');
        }
    };
}(jQuery));