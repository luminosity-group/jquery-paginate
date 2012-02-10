;(function($) {
    /*
     * Simple jQuery pagination plugin
     * Version 0.1.3
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
                ellipse_label:  '...',

                /* Selectors */
                content:    '.page_content',
                navigation: '.page_navigation',
                
                items_per_page: 5,
                abort_on_small_lists: false,
                num_page_links: 5,

                show_first:   true,
                show_last:    true,
                show_next:    true,
                show_prev:    true,
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
            goto_page(1);

            /* Goes to page number page */
            function goto_page(page) {
                var start = settings.items_per_page * (page - 1);
                var end = start + settings.items_per_page;
                var current = $(items).slice(start, end);

                $(items).hide();
                $(current).show();

                $('.page_link', navigation_container).removeClass('active');
                $('.page_link[data-page="' + page + '"]', navigation_container).addClass('active');

                var pages = $('.page_link[data-page]', navigation_container);
                start = page - ((settings.num_page_links - 1) / 2) - 1;
                end   = page + ((settings.num_page_links - 1) / 2);

                if (end > pages.size()) {
                    end = pages.size();
                    start = pages.size() - settings.num_page_links;
                }
                if (start < 0) {
                    start = 0;
                    end = settings.num_page_links;
                }
                if (end > pages.size()) {
                    end = pages.size();
                }

                $(pages).hide();
                $(pages).slice(start, end).show()

                $('.ellipse', navigation_container).hide();

                if ($('.page_link[data-page]', navigation_container).first().css('display') == 'none') {
                    $('.ellipse.less', navigation_container).show();
                }

                if ($('.page_link[data-page]', navigation_container).last().css('display') == 'none') {
                    $('.ellipse.more', navigation_container).show();
                }
            }

            /* Builds out the page buttons */
            function build_nav() {

                if (settings.show_first)
                    navigation_container.append($('<span class="page_link first"><a href="#">' + settings.first_label + '</a></span>').data('page', 1));

                if (settings.show_prev)
                    navigation_container.append($('<span class="page_link prev"><a href="#">' + settings.prev_label + '</a></span>'));
                    
                if (settings.show_ellipse)
                    navigation_container.append($('<span class="ellipse less">' + settings.ellipse_label + '</span>'));

                for (i = 1; i <= total_pages; i++) {
                    navigation_container.append($('<span class="page_link" data-page="' + i + '"><a href="#">' + i + '</a></span>').data('page', i));
                }
                
                if (settings.show_ellipse)
                    navigation_container.append($('<span class="ellipse more">' + settings.ellipse_label + '</span>'));

                if (settings.show_prev)
                    navigation_container.append($('<span class="page_link next"><a href="#">' + settings.next_label + '</a></span>'));

                if (settings.show_last)
                    navigation_container.append($('<span class="page_link last"><a href="#">' + settings.last_label + '</a></span>').data('page', total_pages));

                $('.page_link:not(.next, .prev)', navigation_container).click(function() {
                    var page = $(this).data('page');
                    goto_page(page);
                    return false;
                });

                $('.page_link.next', navigation_container).click(function() {
                    var current_page = $('.page_link.active', navigation_container).data('page');
                    if (current_page < total_pages)
                        goto_page(current_page + 1);
                    return false;
                });

                $('.page_link.prev', navigation_container).click(function() {
                    var current_page = $('.page_link.active', navigation_container).data('page');
                    if (current_page > 1)
                        goto_page(current_page - 1);
                    return false;
                });
            }
        });
    }
})(jQuery);
