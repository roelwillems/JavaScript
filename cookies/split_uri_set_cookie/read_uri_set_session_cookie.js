var pathArray = window.location.pathname.split( '/' );
var secondLevelLocation = pathArray[2];

var cookieName = 'product';
var cookieValue = secondLevelLocation;
var hostname = '.zelf.nl';
var pathname = '/';
var cookieDomain = '.zelf.nl;path=/';
document.cookie = cookieName +"="+ cookieValue + ";domain=" + hostname + ";path=" + pathname +";"
