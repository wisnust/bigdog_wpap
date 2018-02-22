$('.team-item').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
            return element.find('.bg img');
        }
    }
});

$(window).on('load', function() {
     $('.loader').fadeOut(2000);
});