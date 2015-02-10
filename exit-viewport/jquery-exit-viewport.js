$('html').bind('mouseleave',bouncehandler);
var visited = 1;
var bouncehandler = function(e){  
    var yheight = $(window).height();
    if(e.pageX<$('body').width() && e.pageY < yheight ){
       // for testing purposes alert('leaving');
       dataLayer.push({'event': 'viewportExit'});
       $('html').unbind('mouseleave',bouncehandler);
    }
}

$(window).blur(function(){
   $('html').unbind('mouseleave',bouncehandler);
}).focus(function(){
   if(visited){
       $('html').bind('mouseleave',bouncehandler);
    }
    
function confirmExit(){
    // for testing purposes alert("confirm exit is being called");
    dataLayer.push({'event': 'windowClose'});
    return false;
}

window.onbeforeunload = confirmExit;

});
