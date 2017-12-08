// main slider animation.
jQuery(function(){
	// animate time.
	var defaultOptions = {
		millis: 750,
		itemScaleWith: 50,
		itemWidth: 200
	}

	var $mainSlider = jQuery(".mainSlider");
	var $sliderContent = $mainSlider.find(".sliderContent");
	var $li = $mainSlider.find("li");
	$li.each(function(e) {
		var $this = jQuery(this);
		$this.bind({
			'mouseover': function(e) {
				$li.each(function(e) {
					var $other = jQuery(this);
					if (! $other.is($this)) {
						$other.stop().animate({width: defaultOptions.itemWidth - defaultOptions.itemScaleWith}, defaultOptions.millis);
					}
				});
				$this.stop().animate({width: (4 * defaultOptions.itemScaleWith + defaultOptions.itemWidth)}, defaultOptions.millis);

			}, 'mouseleave': function(e) {
				$li.each(function(e) {
					var $other = jQuery(this);
					if (! $other.is($this)) {
						$other.stop().animate({width: defaultOptions.itemWidth}, defaultOptions.millis);
					}
				});
				$this.stop().animate({width: defaultOptions.itemWidth}, defaultOptions.millis);
			}
		});
	});
});