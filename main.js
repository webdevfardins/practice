$(document).ready(function () {
    alert("lad")
    $('[data-trigger="dropdown"]').on("mouseevent" ,function(){
        var submemu=$(this).parent().find('.profail-submenu');
        submenu.addClass('active');
    });

    
    
});