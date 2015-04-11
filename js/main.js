$(document).ready(function(){	
    function resize(){
        $("ul.slideelement li").css("width",$("body").width());       
    }
    $(window).resize(resize);
    resize();

var $example = $('#slider'),
    $frame = $('.frame', $example);

    $frame.mightySlider({
        navigation: {
            keyboardNavBy: 'slides'
        },
        commands: {
            pages: 1
        },
        speed: 500,
        easing: 'swing',
        preloadMode:  'all',
        pages: {
            activateOn: 'click'
        },
        cycling: {
            cycleBy:       'slides', // Enable automatic cycling by 'slides' or 'pages'.
            pauseTime:     5000, // Delay between cycles in milliseconds.
            loop:          1,    // Repeat cycling when last slide/page is activated.
            pauseOnHover:  1    // Pause cycling when mouse hovers over the FRAME.
        }
    });  

    $example = $('#slider-comments');
    $frame = $('.frame', $example);

    $frame.mightySlider({
        navigation: {
            keyboardNavBy: 'slides'
        },
        commands: {
            buttons: 1
        },
        speed: 500,
        easing: 'swing',
        preloadMode:  'all',
        pages: {
            activateOn: 'click'
        },
        cycling: {
            cycleBy:       'slides', // Enable automatic cycling by 'slides' or 'pages'.
            pauseTime:     5000, // Delay between cycles in milliseconds.
            loop:          1,    // Repeat cycling when last slide/page is activated.
            pauseOnHover:  1    // Pause cycling when mouse hovers over the FRAME.
        }
    }); 


    var grad = null,
        body = document.getElementsByTagName('body')[0],
        color = 255,
        ctx = [];
    
    for( var i = 0 ; i < document.getElementsByTagName('canvas').length ; i++ ){
        var canvas = document.getElementsByTagName('canvas')[i],
            ct = canvas.getContext('2d');
        ctx.push(ct);
        ctx[i].clearRect(0, 0, 1000, 1000);
        ctx[i].save();

        // создание радиального градиента
        grad = ctx[i].createLinearGradient(0,0,0,0); 
        grad.addColorStop(0, '#DFDFDF');
        grad.addColorStop(1, 'rgb(' + color + ', ' + color + ', ' + color + ')');

        // сам фон-градиент
        ctx[i].fillStyle = grad;
    }

    updateGradient(window.innerWidth/3,window.innerHeight/2);

    body.onmousemove = function (event) {
        updateGradient(event.clientX,event.clientY);
    };

    function updateGradient(xx,yy){
        for( var i = 0 ; i < document.getElementsByTagName('canvas').length ; i++ ){
            var width = window.innerWidth, 
                height = window.innerHeight, 
                x = xx, 
                y = yy,
                rx = x,
                ry = y;
                
            var xc = ~~(256 * x / width);
            var yc = ~~(256 * y / height);

            grad = ctx[i].createLinearGradient(0, 0, width, 0);  //размер мышки
            grad.addColorStop(0, ['rgb(', ~~(yc/2)+50, ', ', (255 - xc), ', ', xc, ')'].join(''));
            grad.addColorStop(0.5, ['rgb(', xc, ', ', ~~(yc/2)+50, ', ', (255 - xc), ')'].join(''));
            grad.addColorStop(1, ['rgb(', (255 - xc), ', ', xc, ', ', ~~(yc/2)+50, ')'].join(''));

            ctx[i].fillStyle = grad;
            ctx[i].fillRect(0,0,width,height);
        }
    }

});