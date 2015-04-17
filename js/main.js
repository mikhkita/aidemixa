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
        }

        updateGradient();

        $("#b-classificate li .b-desc-cont").mousemove(function(e){
            var mX = event.clientX-$(this).offset().left,
                w = $(this).width(),
                p = -(50-50*(mX/w));
            $(this).parents("li").find("canvas").css({
                "margin-left" : p+"%"
            });
            console.log(p);
        });

        function updateGradient(){
            for( var i = 0 ; i < $("#b-classificate li canvas").length ; i++ ){
                var el = $("#b-classificate li canvas").eq(i),
                    width = el.width()+20, 
                    height = el.height();

                grad = ctx[i].createLinearGradient(0, 0, 300, 0);
                grad.addColorStop(0, el.attr("data-start") );
                grad.addColorStop(1, el.attr("data-end") );

                ctx[i].fillStyle = grad;
                ctx[i].fillRect(0,0,width,height);
            }
        }
    }



    if( $("#map_canvas").length ){
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

        if( $("#b-map-points").length ){
            $("#b-map-points li").each(function(){
                var points = $(this).attr("data-point").split(",");

                var marker = new MarkerWithLabel({
                   position: new google.maps.LatLng(points[0]*1, points[1]*1),
                   map: map,
                   icon: "/bitrix/templates/main/i/map-point.png",
                   labelContent: $(this).attr("data-name"),
                   labelAnchor: new google.maps.Point(-10, 16),
                   labelClass: "map-point"
                });
            });
        }
    }

    if( $("#b-contacts-map").length ){
        var myPlace = new google.maps.LatLng(56.474881, 84.988611);
        var myOptions = {
            zoom: 17,
            center: myPlace,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            scrollwheel: false,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.LEFT_CENTER
            }
        }
        var map = new google.maps.Map(document.getElementById("b-contacts-map"), myOptions); 
        var marker = new MarkerWithLabel({
                   position: new google.maps.LatLng(56.474703, 84.988482),
                   map: map,
                   labelContent: "ул. Герцена, 74/2",
                   labelAnchor: new google.maps.Point(-10, 7),
                   labelClass: "contacts-map-point"
                });
    }

    $(".b-projects .b-block ul li").hover(function(){
        TweenLite.to($(this).find("a"), 0.3, { "top" : 0, ease : Quad.easeInOut } );
    },function(){
        TweenLite.to($(this).find("a"), 0.3, { "top" : -283, ease : Quad.easeInOut } );
    });

    if (isIE() == 9) {
        $(".b-about ul").addClass("ie9");
    }

    function isIE() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }

});


$(document).ready(function(){
    if( $(".b-sub-menu canvas").length ){
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

            ctx[i].fillStyle = grad;
        }

        updateGradient1(window.innerWidth/3,window.innerHeight/2);

        $(".b-sub-menu").mousemove(function(e){
            var mX = event.clientX,
                w = $("body").width(),
                p = -(50-50*(mX/w));
            $(".b-sub-menu canvas").css({
                "margin-left" : p+"%"
            });
            console.log(p);
        });

        function updateGradient1(){
            for( var i = 0 ; i < $(".b-sub-menu canvas").length ; i++ ){
                var width = window.innerWidth, 
                    height = window.innerHeight;

                grad = ctx[i].createLinearGradient(0, 0, 255, 0);  //размер мышки
                grad.addColorStop(0, 'rgb(87, 223, 137)');
                grad.addColorStop(0.20, 'rgb(63, 221, 215)');
                grad.addColorStop(0.40, 'rgb(60, 172, 236)');
                grad.addColorStop(0.60, 'rgb(104, 54, 228)');
                grad.addColorStop(0.75, 'rgb(147, 59, 228)');
                grad.addColorStop(1, 'rgb(216, 64, 246)');

                ctx[i].fillStyle = grad;
                ctx[i].fillRect(0,0,width,height);
            }
        }
    }
});