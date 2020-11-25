$(function(){
    $('.hamburger-menu').on('click', function(){
        $('.hamburger-menu').toggleClass('open');
        $('.toggle').toggleClass('open');
        $('.sidebar').toggleClass('open');
        $('.hero').toggleClass('open');
    });

    $(document).on("click", function(e){
        if( 
            $(e.target).closest(".sidebar").length == 0 &&
            $(".sidebar").hasClass("open") &&
            $(e.target).closest(".hamburger-menu").length == 0
        ){

            $('.hamburger-menu').toggleClass('open');
            $('.toggle').toggleClass('open');
            $('.sidebar').toggleClass('open');
            $('.hero').toggleClass('open');
        }
      });
});

