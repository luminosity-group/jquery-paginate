;(function($) {
    /*
     * Simple jQuery pagination plugin
     * Version 0.1
     *
     * Copyright (c) 2011 Luminosity Group
     */
    $.fn.paginate = function(options) {
        return this.each(function() {
            
            /* Default settings */
            var defaults = {

                /* Labels */
                first_label:    'First',
                previous_label: 'Previous',
                next_label:     'Next',
                last_label:     'Last',

                /* Selectors */
                content:    '.page_content',
                navigation: '.page_navigation'

            };

            /* Merge options with defaults */
            var settings = $.extend(true, {}, defaults, options);

            var container = $(this);
            var content = $(settings.content, container);
            var items = content.children();

            console.log(items);

        });
    }
})(jQuery);
