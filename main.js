'use strict';

// When a thumbnail is clicked, should delete main picture first
// and replace it with the img you clicked.

// 1 - Create click function
// 2 - Inside function, target '.hero > img' attributes
// 3 - Replace with thumbnail attributes
// Put image attributes into variables.

function replacePicture() {

  $('.thumbnail').on('click', function(event) {
	
    let newSrc = $(event.currentTarget).find('img').attr('src');
    let newAlt = $(event.currentTarget).find('img').attr('alt');
			
	
    $('.hero img').attr('src',newSrc).attr('alt',newAlt);
  });
}
		
$(replacePicture());