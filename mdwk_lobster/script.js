var audioElement = document.createElement('audio');

$('.artist').click(function () {

    audioElement.pause();

    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
    } else {

        $('.artist').each(function () {
            $(this).removeClass("active");
        });

        $(this).addClass("active");
        var track = this.getAttribute("track");
        audioElement.setAttribute('src', 'mp3/' + track);
        audioElement.play();
    }
});