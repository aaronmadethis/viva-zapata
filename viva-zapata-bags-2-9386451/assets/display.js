jQuery(document).ready(function($) {

	/* ---------------------------------------------------------------------------------------
	HOME HEADER COLORS
	--------------------------------------------------------------------------------------- */
	var colors = ['#8742d2', '#e96155', '#a2e35a', '#edba4b', '#6dcff6'];
		i = 1;


	function color_text(){
		if( $('.coolheader').length > 0){
			$(".coolheader").lettering();

			$('.coolheader span').each(function( index ) {
				if( i > colors.length) i = 1;

				$( this ).css('color', colors[i-1]);
				i++

			});
		}
	}
	color_text();

	/* ---------------------------------------------------------------------------------------
	FISHER-YATES (AKA KNUTH) SHUFFLE
	--------------------------------------------------------------------------------------- */
	function shuffle(array) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}

	if( $('.coolheader').length > 0){
		setInterval(function() {
			//shuffle(colors);
			//i = 1;
			$('.coolheader span').each(function( index ) {
				if( i > colors.length) i = 1;

				shuffle(colors);

				$( this ).animate({color: colors[i-1]}, 250);
				i++

			});
		}, 700);
	}


	/* ---------------------------------------------------------------------------------------
	TWITTER SHARE
	--------------------------------------------------------------------------------------- */
	$('.popup').click(function(e) {
		var width  = 575,
				height = 400,
				left   = ($(window).width()  - width)  / 2,
				top    = ($(window).height() - height) / 2,
				url    = this.href,
				opts   = 'status=1' +
						 ',width='  + width  +
						 ',height=' + height +
						 ',top='    + top    +
						 ',left='   + left;
		
		window.open(url, 'twitter', opts);
		
		return false;
	});
	console.log('i am ready');

});
