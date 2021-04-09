// Utilizzare jQuery per mostrare e nascondere le dropdown.

$(document).ready(function() {
    

    $('.link-menu > li').mouseenter(function(){

        $(this).children('.dropdown').addClass('active');     
        
        
      
    })

    $('.link-menu > li').mouseleave(function(){

        $(this).children('.dropdown').removeClass('active');       
      
    })
}); //termine jQuery