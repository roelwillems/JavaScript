<script type="text/javascript">
// Basic script to set a new cookie with variables for cookiename, value, cookie domain, path and expire time (9 months) in the future
// Setting expirationTime to 0 makes a session cookie
// isSecure = false/true makes a secure cookie
// isHttpOnly = false/true makes a HttpOnly cookie
var cookieName = 'dummyCookie';
var cookieValue = 'Yes';
var cookieDomain = '.domain.com';
var path = '/';
var myDate = new Date();
myDate.setMonth(myDate.getMonth() + 9);
document.cookie = cookieName +"="+ cookieValue + ";expires=" + myDate + ";domain=" + cookieDomain + ";path=" + path +";"
</script>