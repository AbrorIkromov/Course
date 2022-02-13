$(document).ready(function () {

    $(window).scroll(function () { 
        if($(document).scrollTop() > 70){
            $('.nav-target').addClass('navbar-custom');
        }
        else{
            $('.nav-target').removeClass('navbar-custom')
        }
    });
});


$(document).ready(function() {
    $(document).on('click', '.nav-item a', function (e) {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
});

// Scroll Magic

$(document).ready(function () {

    let controller = new ScrollMagic.Controller();
    let scene1 = new ScrollMagic.Scene({
        triggerElement: '.scrollTarget1', 
        triggerHook: 0.7
    })
    .setClassToggle('.scrollTarget1', 'content-main-scroll')
    .reverse(false)
    .addTo(controller);

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.scrollTarget2', 
        triggerHook: 0.7
    })
    .setClassToggle('.scrollTarget2', 'content-main-scroll')
    .reverse(false)
    .addTo(controller);

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.scrollTarget3', 
        triggerHook: 0.7
    })
    .setClassToggle('.scrollTarget3', 'content-main-scroll')
    .reverse(false)
    .addTo(controller);

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.scrollTarget4', 
        triggerHook: 0.7
    })
    .setClassToggle('.scrollTarget4', 'content-main-scroll')
    .reverse(false)
    .addTo(controller);

    let scene5 = new ScrollMagic.Scene({
        triggerElement: '.scrollTarget5', 
        triggerHook: 1
    })
    .setClassToggle('.scrollTarget5', 'content-main-scroll')
    .reverse(false)
    .addTo(controller)

});
