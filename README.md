jQuery Pagination Plugin
=====================
This is a highly configurable jQuery plugin for paginating items and lists with JavaScript.

Default Usage
-------------

	$(function() {
		$('.paginate').paginate();
	});
	
	<div class="paginate">
		<ul class="page_content">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
			<li>Item 4</li>
			<li>Item 5</li>
			<li>Item 6</li>
		</ul>
		<div class="page_navigation"></div>
	</div>

The plugin will generate pagination buttons, within the .page_navigation element, in the following format:

	<div class="page_navigation">
		<span class="page_link first"><a href="#">First</a></span>
		<span class="page_link prev"><a href="#">Previous</a></span>
		<span class="ellipse less">...</span>
		<span class="page_link active"><a href="#">1</a></span>
		<span class="page_link"><a href="#">2</a></span>
		<span class="page_link"><a href="#">3</a></span>
		<span class="ellipse more">...</span>
		<span class="page_link next"><a href="#">Next</a></span>
		<span class="page_link last"><a href="#">Last</a></span>
	</div>

Options
-------

###Labels
**first\_label**: The label to use for the "First" link. Defaults to "First".  
**last\_label**: The label to use for the "Last" link. Defaults to "Last".  
**prev\_label**: The label to use for the "Previous" link. Defaults to "Previous".  
**next\_label**: The label to use for the "Next" link. Defaults to "Next".  
**ellipse\_label**: The label to use when there are more pages than can be displayed. Defaults to "...".

	$(function() {
		$('.paginate').paginate({
			first_label: "<< First",
			last_label: "Last >>",
			prev_label: "< Prev",
			next_label: "Next >"
			ellipse_label: "more..."
		});
	});

You could also disabled to labels completely.

**show\_first**: If set to false, the "First" link will not be rendered. Defaults to true.  
**show\_last**: If set to false, the "Last" link will not be rendered. Defaults to true.  
**show\_prev**: If set to false, the "Previous" link will not be rendered. Defaults to true.  
**show\_next**: If set to false, the "Next" link will not be rendered. Defaults to true.  
**show\_ellipse**: If set to false, the "..." link will not be rendered. Defaults to true.  

* * *
###Selectors
**content**: A jQuery selector to select the content within the containing element. Defaults to '.page_content'.   
**navigation**: A jQuery selector to select the page navigation container. Defaults to '.page_navigation'.
* * *
###Settings
**items\_per\_page**: The number of items per page to display. Defaults to 5.  
**abort\_on\_small\_lists**: If set to true and items_per_page is less than the total number of items, the plugin will not paginate the elements. Defaults to false.  
**num\_page\_links**: The number of page links to show in the page navigation area. Defaults to 5. Using an odd number will generally look better.  