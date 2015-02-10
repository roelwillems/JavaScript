var result = window.location.search.match(new RegExp("(\\?|&)bannerid(\\[\\])?=([^&]*)"));
urlbannerid = result ? result[3] : false;

//read cookie with specific name
function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
  {
c_end = c_value.length;
}
c_value = unescape(c_value.substring(c_start,c_end));
}
return c_value;
}

// call getCookie function to look for bannerid cookie (value)
var cookiebanner = getCookie("bannerid");

// check if cookie exists
if (cookiebanner != null && cookiebanner !="") {
cookiebannerid = cookiebanner;
}
else {
	cookiebannerid = "";
}

// vars
var cookieName = 'bannerid';
var cookieValue = cookiebannerid;
var newCookieValue = urlbannerid;
var cookieDomain = '.zelf.nl';
var path = '/';
var myDate = new Date();
myDate.setMonth(myDate.getMonth() + 9);



  if (urlbannerid != false && cookiebannerid != "")
	  {
	  alert("// you have our cookie and a bannerid in url, updating both");
	  document.cookie = cookieName +"="+ newCookieValue + ";expires=" + myDate + ";domain=" + cookieDomain + ";path=" + path +";"
  	}
else if (urlbannerid != false && cookiebannerid == "")
  {

	  alert("// you don't have our cookie, but have banner id in url, build cookie");
	  document.cookie = cookieName +"="+ newCookieValue + ";expires=" + myDate + ";domain=" + cookieDomain + ";path=" + path +";"

  }
else if (urlbannerid == false && cookiebannerid != "")
{
	alert("// you don't have bannerid but have a cookie, update expire date");
	document.cookie = cookieName +"="+ cookieValue + ";expires=" + myDate + ";domain=" + cookieDomain + ";path=" + path +";"
}
else{
	alert("// you don't have our cookie, and no bannerid to set");
	// nothing to see here, do nothing this else is only for debugging
}