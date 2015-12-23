$('.artist').click(function () {
    

    
    if($(this).hasClass("active")){
        $(this).removeClass("active"); 
    }else{
            $('.artist').each(function() {
    $(this).removeClass("active"); 
    });
        
       $(this).addClass("active"); 
    }
    
});


