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
                prev_label:     'Previous',
                next_label:     'Next',
                last_label:     'Last',

                /* Selectors */
                content:    '.page_content',
                navigation: '.page_navigation',
                
                items_per_page: 5,
                abort_on_small_lists: false,
                num_page_links: 5,

                show_first: true,
                show_last:  true,
                show_next:  true,
                show_prev:  true,
                show_ellipse: true
            };

            /* Merge options with defaults */
            var settings = $.extend(true, {}, defaults, options);

            var container = $(this);
            var content = $(settings.content, container);
            var navigation_container = $(settings.navigation, container);
            var items = content.children();
            var total = items.size();
            var total_pages = Math.ceil(total / settings.items_per_page);

            /* If abort_on_small_lists is set to true and the number of items
             * is less than items_per_page, abort 
             */
            if (settings.abort_on_small_lists && (total <= settings.items_per_page))
                return true;

            /* Build out the page buttons */
            build_nav();

            /* Goto first page */
            gotoPage(1);

            /* Goes to page number page */
            function gotoPage(page) {
                var start = settings.items_per_page * (page - 1);
                var end = start + settings.items_per_page;
                var current = $(items).slice(start, end);

                $(items).hide();
                $(current).show();

                $('.page_link', navigation_container).removeClass('active');
                $('.page_link', navigation_container).each(function() {
                    if ($(this).data('page') == page && !$(this).hasClass('first') && !$(this).hasClass('last')) {
                        $(this).addClass('active');
                        start = page - settings.items_per_page & 0xff;

                        console.log(start);
                        // $('.page_link:not(.first, .last, .prev, .next)', navigation_container).hide();
                        // $('.page_link:not(.first, .last, .prev, .next)', navigation_container).slice(page - buf, page + buf).show();
                    }
                });
            }

            /* Builds out the page buttons */
            function build_nav() {

                if (settings.show_first)
                    navigation_container.append($('<span class="page_link first"><a href="#">' + settings.first_label + '</a></span>').data('page', 1));

                if (settings.show_prev)
                    navigation_container.append($('<span class="page_link prev"><a href="#">' + settings.prev_label + '</a></span>'));

                for (i = 1; i <= total_pages; i++) {
                    navigation_container.append($('<span class="page_link"><a href="#">' + i + '</a></span>').data('page', i));
                }

                if (settings.show_prev)
                    navigation_container.append($('<span class="page_link next"><a href="#">' + settings.next_label + '</a></span>'));

                if (settings.show_last)
                    navigation_container.append($('<span class="page_link last"><a href="#">' + settings.last_label + '</a></span>').data('page', total_pages));

                $('.page_link:not(.next, .prev)', navigation_container).click(function() {
                    var page = $(this).data('page');
                    gotoPage(page);
                    return false;
                });

                $('.page_link.next', navigation_container).click(function() {
                    var current_page = $('.page_link.active', navigation_container).data('page');
                    if (current_page < total_pages)
                        gotoPage(current_page + 1);
                    return false;
                });

                $('.page_link.prev', navigation_container).click(function() {
                    var current_page = $('.page_link.active', navigation_container).data('page');
                    if (current_page > 1)
                        gotoPage(current_page - 1);
                    return false;
                });
            }
        });
    }
})(jQuery);
