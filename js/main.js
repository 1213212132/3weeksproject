$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/JGes8mrvMzQ',
        containment: '#main_visual',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });


    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });


    $(window).on('scroll', function () {
        //스크롤량을 구함.
        let sct = $(window).scrollTop();
        // console.log(sct);
        //sct > 1000 ? $('.to_top').fadeIn(1) : $('.to_top').fadeOut(0.1);

        sct > 1000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');


    })
})