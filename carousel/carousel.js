(() => {
  var carousel = document.querySelector('.main-carousel');
    var flkty = new Flickity( carousel, {
      contain: true, 
      imagesLoaded: true, 
      pageDots: false,
      autoPlay: 4500,
      pauseAutoPlayOnHover: false,
      friction: 1.1,
      percentPosition: false,
      prevNextButtons: false
    });

    var imgs = carousel.querySelectorAll('.carousel-cell img');
    // get transform property
    var docStyle = document.documentElement.style;
    var transformProp = typeof docStyle.transform == 'string' ?
      'transform' : 'WebkitTransform';

    //-----------------------------------------------------------------
    //I didn't try to understand the code below.

    flkty.on( 'scroll', function() {
      flkty.slides.forEach( function( slide, i ) {
        var img = imgs[i];
        var x = ( slide.target + flkty.x ) * -1/3;
        img.style[ transformProp ] = 'translateX(' + x  + 'px)';
      });
    });
})()