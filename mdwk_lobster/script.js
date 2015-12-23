$('.artist').click(function () { 
    $('.artist').each(function() {
    $(this).removeClass("active"); 
    });
    $(this).addClass("active"); 
});

