$(function () {
    $(".carousel").carousel( { interval: 2000 } ) 
    $("#carouselPause").click(function(){
        $(".carousel").carousel("pause");
    });
    $("#carouselPlay").click(function(){
        $(".carousel").carousel("cycle");
    });
 });

 $(function() {
$("#reserveButton").click(function(){
    $('#reserveModal').modal('show');
 })
});

$(function() {
    $("#loginButton").click(function(){
        $('#loginModal').modal('show');
     })
    });