describe('paginate', function() {
    describe('on a small list', function() {
        beforeEach(function(){
            loadFixtures('small.html');
            $('.paginate').paginate();
        });

        it('shows the first 5 items by default', function() {
            var num_visible = $('li:visible').length;
            expect(num_visible).toEqual(5);
            expect($($('li:visible')[num_visible - 1])).toHaveText('Item 5');
        });

        it('builds out the navigation', function() {
            expect($('.page_link.first')).toExist();
            expect($('.page_link.prev')).toExist();
            expect($('.ellipse.less')).toExist();
            expect($('.page_link[data-page="1"]')).toExist();
            expect($('.page_link[data-page="2"]')).toExist();
            expect($('.ellipse.more')).toExist();
            expect($('.page_link.next')).toExist();
            expect($('.page_link.last')).toExist();
        });

        it('shows 2 pages', function() {
            var num_items = $('.page_link[data-page]').size();
            expect(num_items).toEqual(2);
        });

        it('hides the ellipses', function() {
            expect($('.ellipse.less')).toBeHidden();
            expect($('.ellipse.more')).toBeHidden();
        });

        describe('clicking on the second page link', function() {
            it('shows the second page', function() {
                $('.page_link[data-page="2"]').click();
                expect($('.page_link[data-page="2"]')).toHaveClass('active');
                expect($('li:visible').length).toEqual(1);
            });
        });

        describe('clicking on the next link', function() {
            it('shows the second page', function() {
                $('.page_link.next').click();
                expect($('.page_link[data-page="2"]')).toHaveClass('active');
                expect($('li:visible').length).toEqual(1);
            });
        });

        describe('clicking on the last link', function() {
            it('shows the second page', function() {
                $('.page_link.last').click();
                expect($('.page_link[data-page="2"]')).toHaveClass('active');
                expect($('li:visible').length).toEqual(1);
            });
        });
    });

    describe('on a small list with abort_on_small_lists set to true', function() {
        beforeEach(function(){
            loadFixtures('small.html');
            $('.paginate').paginate({
                abort_on_small_lists: true,
                items_per_page: 10
            });
        });

        it('adds the .no-pagination class to the page container element', function() {
            expect($('.paginate')).toHaveClass('no-pagination');
        });
    });

    describe('on large lists', function() {
        beforeEach(function() {
            loadFixtures('large.html');
            $('.paginate').paginate();
        });

        it('shows the more ellipse', function() {
            expect($('.ellipse.more')).toBeVisible();
        });

        it('hides the less ellipse', function() {
            expect($('.ellipse.less')).toBeHidden();
        });

        describe('clicking on the page 4 link', function() {
            it('shows the less ellipse', function() {
                $('.page_link[data-page="4"]').click();
                expect($('.ellipse.less')).toBeVisible();
            });
        });

        describe('clicking on the last link', function() {
            it('hides the more ellipse', function() {
                $('.page_link.last').click();
                expect($('.ellipse.more')).toBeHidden();
            });
        });
    });

    describe('with uncontained navigation', function() {
        beforeEach(function() {
            loadFixtures('uncontained.html');
            $('.paginate').paginate({
                navigation: '#page_navigation',
                contain_navigation: false
            });
        });

        it('behaves normally', function() {
            var num_visible = $('li:visible').length;
            expect(num_visible).toEqual(5);

            $('.page_link.last').click();
            num_visible = $('li:visible').length;
            expect(num_visible).toEqual(1);
        });
    });
});
