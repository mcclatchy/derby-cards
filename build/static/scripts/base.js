var targetModel = 1;
var currentModel = 0;
var loopLength;


/***************************************************************************
Gets model playlist
***************************************************************************/

$(document).ready(function() {
    $('#dia-turntable').turntable();
    $('#nicole-turntable').turntable();
});

/* Every time the window is scrolled ... */
$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.hc-card').each(function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height() + 800;

        var turntableId = $(this).children(":first").attr('id');
        console.log(turntableId);

        /* If the object is completely visible in the window, fade it in */
        if (bottom_of_window > bottom_of_object) {
            if ($('#' + turntableId + ' ul li.hc-end').length === 0) {

                var name = $(this).data('card');
                // var imgNum = new Array(23);//create a 45 element array

                for(var iNum=23; iNum>1; iNum--){
                  $('#' + turntableId + ' ul').append('<li class="hc-end" data-img-src="static/assets/images/' + name + '/' + name + '-' + (iNum - 1) + '.jpg">');
                }
                $('#' + turntableId + ' ul').append('<li class="hc-end" data-img-src="static/assets/images/' + name + '/' + name + '-' + 23 + '.jpg">');

                $('#' + turntableId).turntable();
            }
        }

    });

});
