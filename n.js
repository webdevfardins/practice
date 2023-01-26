$ (ducument).ready(function(){

$('[data-trigger="dropdown"]').on("mouseenter" , function(){
var submenu =$(this).parent().find()('.profail-submenu');
submenu.addClass('active');
});



});