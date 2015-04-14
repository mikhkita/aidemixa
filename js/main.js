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
        cycling: {
            cycleBy:       'slides', // Enable automatic cycling by 'slides' or 'pages'.
            pauseTime:     5000, // Delay between cycles in milliseconds.
            loop:          1,    // Repeat cycling when last slide/page is activated.
            pauseOnHover:  1    // Pause cycling when mouse hovers over the FRAME.
        }
    }); 
    
    $example = $('#slider-project');
    $frame = $('.frame', $example);

    $frame.mightySlider({
        navigation: {
            keyboardNavBy: 'slides'
        },
        commands: {
            pages: 1,
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
    if( $("#b-classificate li canvas").length ){
        var grad = null,
            body = document.getElementsByTagName('body')[0],
            color = 255,
            ctx = [];
        
        for( var i = 0 ; i < $("#b-classificate li canvas").length ; i++ ){
            var canvas = $("#b-classificate li canvas")[i],
                ct = canvas.getContext('2d');
            ctx.push(ct);
            ctx[i].clearRect(0, 0, 1000, 1000);
            ctx[i].save();

            // создание радиального градиента
            grad = ctx[i].createRadialGradient(0,0,0,0,0,1000); 
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
            for( var i = 0 ; i < $("#b-classificate li canvas").length ; i++ ){
                var width = window.innerWidth, 
                    height = window.innerHeight, 
                    x = xx-width/3*i, 
                    y = yy,
                    rx = x,
                    ry = y;
                    
                var xc = ~~(256 * x / width);
                var yc = ~~(256 * y / height);

                grad = ctx[i].createRadialGradient(rx, ry, 0, rx, ry, width);  //размер мышки
                grad.addColorStop(0, '#478CFB'); //цвет мышки
                grad.addColorStop(1, ['rgb(', (150 - xc), ', ', xc, ', ', yc, ')'].join(''));

                ctx[i].fillStyle = grad;
                ctx[i].fillRect(0,0,width,height);
            }
        }
    }



    var myPlace = new google.maps.LatLng(51.638608, 6.619120);
    var myOptions = {
        zoom: 3,
        center: myPlace,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.LEFT_CENTER
        }
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

    var marker = new MarkerWithLabel({
       position: new google.maps.LatLng(56.433537, 84.988520),
       map: map,
       icon: "i/map-point.png",
       labelContent: "Томск",
       labelAnchor: new google.maps.Point(-10, 16),
       labelClass: "map-point"
    });
    marker = new MarkerWithLabel({
       position: new google.maps.LatLng(55.769229, 37.723798),
       map: map,
       icon: "i/map-point.png",
       labelContent: "Москва",
       labelAnchor: new google.maps.Point(-10, 16),
       labelClass: "map-point"
    });
    marker = new MarkerWithLabel({
       position: new google.maps.LatLng(59.904430, 30.384931),
       map: map,
       icon: "i/map-point.png",
       labelContent: "Санкт-Петербург",
       labelAnchor: new google.maps.Point(-10, 16),
       labelClass: "map-point"
    });


});


$(document).ready(function(){
    if( $(".b-sub-menu canvas").length ){
        // function resize(){
        //     $("ul.slideelement li").css("width",$("body").width()+);       
        // }
        // $(window).resize(resize);
        // resize();

        var grad = null,
            body = document.getElementsByTagName('body')[0],
            color = 255,
            ctx = [];
        
        for( var i = 0 ; i < $(".b-sub-menu canvas").length ; i++ ){
            var canvas = $(".b-sub-menu canvas")[i],
                ct = canvas.getContext('2d');
            ctx.push(ct);
            ctx[i].clearRect(0, 0, 1280, 1280);
            ctx[i].save();

            // сам фон-градиент
            ctx[i].fillStyle = grad;
        }

        updateGradient1(window.innerWidth/3,window.innerHeight/2);

        // body.onmousemove = function (event) {
        //     updateGradient1(event.clientX,event.clientY);
        // };

        $(".b-sub-menu").mousemove(function(e){
            var mX = event.clientX,
                w = $("body").width(),
                p = -(50-50*(mX/w));
            $(".b-sub-menu canvas").css({
                "margin-left" : p+"%"
            });
            console.log(p);
        });

        function updateGradient1(xx,yy){
            for( var i = 0 ; i < $(".b-sub-menu canvas").length ; i++ ){
                var width = window.innerWidth, 
                    height = window.innerHeight, 
                    x = xx, 
                    y = yy,
                    rx = x,
                    ry = y;
                    
                var xc = ~~(256 * x / width);
                var yc = ~~(256 * y / height);
                console.log(width);
                grad = ctx[i].createLinearGradient(0, 0, 255, 0);  //размер мышки
                grad.addColorStop(0, 'rgb(87, 223, 137)');
                grad.addColorStop(0.20, 'rgb(63, 221, 215)');
                grad.addColorStop(0.40, 'rgb(60, 172, 236)');
                grad.addColorStop(0.60, 'rgb(104, 54, 228)');
                grad.addColorStop(0.75, 'rgb(147, 59, 228)');
                grad.addColorStop(1, 'rgb(216, 64, 246)');
                // grad.addColorStop(0, ['rgb(', ~~(yc/2)+50, ', ', (255 - xc), ', ', xc, ')'].join(''));
                // grad.addColorStop(0.5, ['rgb(', xc, ', ', ~~(yc/2)+50, ', ', (255 - xc), ')'].join(''));
                // grad.addColorStop(1, ['rgb(', (255 - xc), ', ', xc, ', ', ~~(yc/2)+50, ')'].join(''));

                ctx[i].fillStyle = grad;
                ctx[i].fillRect(0,0,width,height);
            }
        }
    }
});