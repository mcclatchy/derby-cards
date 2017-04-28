var targetModel = 1;
var currentModel = 0;
var loopLength;


/***************************************************************************
Gets model playlist
***************************************************************************/

$(document).ready(function() {
    $('#dia-turntable').turntable();
    $('#dia2-turntable').turntable();
    $('#dia3-turntable').turntable();
});

/* Every time the window is scrolled ... */
$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.hc-card').each(function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height() + 800;
        console.log(bottom_of_object, bottom_of_window);

        var turntableId = $(this).children(":first").attr('id');

        /* If the object is completely visible in the window, fade it in */
        if (bottom_of_window > bottom_of_object) {
            if ($('#' + turntableId + ' ul li.hc-end').length === 0) {
                console.log('test');

                var test = "<li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-22.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-21.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-20.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-19.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-18.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-17.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-16.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-15.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-14.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-13.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-12.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-11.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-10.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-9.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-8.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-7.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-6.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-5.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-4.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-3.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-2.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-1.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-23.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-22.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-21.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-20.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-19.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-18.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-17.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-16.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-15.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-14.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-13.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-12.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-11.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-10.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-9.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-8.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-7.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-6.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-5.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-4.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-3.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-2.png><li data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-1.png><li class='hc-end' data-img-src=static/assets/images/dia-hat-1000/dia-hat-1000-23.png>";

                $('#' + turntableId + ' ul').append(test);
                $('#' + turntableId).turntable();
            }

            // $('#' + turntableId).turntable();
            // $(this).children(":first").animate({'opacity':'1'},500);

            // $(this).animate({'opacity':'1'},3000);

        }

    });

});
