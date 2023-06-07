$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/JGes8mrvMzQ',
        containment: '#main_visual',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });
})