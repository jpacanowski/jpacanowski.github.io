$(function() {

	$('a[href^="#"]').on('click', function(e) {

		var target = $($(this).attr('href'));

		if(target.length) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}

	});

	var playing = true;

	$('.player').on('click', function() {
		if(playing == false) {
			document.getElementById('audio').play();
			$('.player').html('<i class="fa fa-pause-circle"></i><span>Pause the music</span>');
			playing = true;
		}
		else {
			document.getElementById('audio').pause();
			//document.getElementById('audio').currentTime = 0;
			$('.player').html('<i class="fa fa-play-circle"></i><span>Play the music</span>');
			playing = false;
		}
	});

});
