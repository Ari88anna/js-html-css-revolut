// Utilizzare jQuery per mostrare e nascondere le dropdown.

$(document).ready(function() {
    

    $('.link-menu > li').mouseenter(function(){

        $(this).children('.dropdown').slideDown(1000).addClass('active');        
      
    })

    $('.link-menu > li').mouseleave(function(){

        $(this).children('.dropdown').slideUp(400).removeClass('active');       
      
    })
}); //termine jQuery