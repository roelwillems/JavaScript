var htmlElem  = document.documentElement,
    visited   = true;

if (window.addEventListener) {
  htmlElem.addEventListener('mouseleave', bounceHandler);
} else if (window.attachEvent) {
  htmlElem.attachEvent('mouseleave', bounceHandler);
}

function bounceHandler(e) {
  var yheight = window.innerHeight;
  if (e.pageX < window.innerWidth && e.pageY < yheight) {
    console.log('viewportExit');
    // dataLayer.push({'event': 'viewportExit'});
    if (window.removeEventListener) {
      htmlElem.removeEventListener('mouseleave',bounceHandler);
    } else if (window.detachEvent) {
      htmlElem.detachEvent('mouseleave', bounceHandler);
    }
  }
}

window.blur(function(){
  bounceHandler();
});