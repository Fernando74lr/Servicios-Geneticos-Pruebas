let i = 2;

$(document).ready(function() {

    // $('.modal-carousel').carousel({
    //     interval: false
    // })
    
    // $('#width-screen').html(`${window.outerWidth}`);
    // $('#height-screen').html(`${window.outerHeight}`);
    
    var radius = 0;
    if (window.innerWidth < 450) {
        radius = 410;
        console.log('1');
    } else {
        radius = 640;
        console.log('2');
    }
    var fields = $('.itemDot');
    var container = $('.dotCircle');
    var width = container.width();
    radius = width / 2.5;

    var height = container.height();
    var angle = 0,
        step = (2 * Math.PI) / fields.length;
    
    fields.each(function() {
        var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
        var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
        if (window.console) {
            // console.log($(this).text(), x, y);
        }

        $(this).css({
            left: x + 'px',
            top: y + 'px'
        });
        
        angle += step;
    });

    $('.itemDot').click(function() {
        var dataTab = $(this).data('tab');
        $('.itemDot').removeClass('active');
        $(this).addClass('active');
        // $('.CirItem').removeClass('active');
        // $('.CirItem' + dataTab).addClass('active');
        i = dataTab;

        $('.dotCircle').css({
            'transform': 'rotate(' + (360 - (i - 1) * 36) + 'deg)',
            'transition': '3s'
        });

        $('.itemDot').css({
            'transform': 'rotate(' + ((i - 1) * 36) + 'deg)',
            'transition': '4s'
        });
    });

    setInterval(function() {
        var dataTab = $('.itemDot.active').data("tab");

        if (dataTab > 13 || i > 13) {
            dataTab = 1;
            i = 1;
        }

        $('.itemDot').removeClass('active');
        $('[data-tab="' + i + '"]').addClass('active');
        // $('.CirItem').removeClass('active');
        // $('.CirItem' + i).addClass('active');
        i++;

        $('.dotCircle').css({
            "transform": "rotate(" + (360 - (i - 2) * 36) + "deg)",
            "transition": "3s"
        });
        $('.itemDot').css({
            "transform": "rotate(" + ((i - 2) * 36) + "deg)",
            "transition": "1s"
        });
    }, 3000);

});

// $('#btn-modal').click(function(){
//     $('.bd-example-modal-xl').modal('show');
// });