$(document).ready(function(){


//---------- NAV BAR HOVER JS ------------//
$(".nav-item").hover(function() {

    let key = $(this).data('key');
    $(this).find('.hover-menu'+key).removeClass('d-none');

}, function() {
    $('.hover-menu').addClass('d-none');
});




});



//---------- NAV BAR FIXED JS ------------//
$(window).scroll(function(){
    var couting_scroll = $(window).scrollTop()
    if(couting_scroll>120){
        $("#searchBar").addClass("d-none");
        $("#fixedNavBar").removeClass("d-none");
        $("#fixedNavBar").addClass("d-block fixed");
    }
    else{
        $("#searchBar").removeClass("d-none");
        $("#fixedNavBar").addClass("d-none");
        $("#fixedNavBar").removeClass("d-block fixed");
    }
})