// ==UserScript==
// @name               Old Reddit Redirect
// @description        Redirect to old reddit, forked from RandomUsername404
// @include            *://www.reddit.com/*
// @exclude            *://www.reddit.com/poll/*
// @exclude            *i.redd.it*
// @version            1.01
// @run-at             document-start
// @author             Fin-NewWin
// ==/UserScript==

(function() {
    if (window.location.pathname === "/media"){
        window.location.replace(new URL(window.location.href).searchParams.get("url"))
    } else {
        // window.location.replace("https://old.reddit.com" + window.location.pathname + window.location.search);
		top.location.replace("https://old.reddit.com");
    }
})();
