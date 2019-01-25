# Module Summary

## What is Express.js?
* Express.js is a Node.js framework - a package that adds a brunch of utility functions and tools and a clear set of rules on how app should be built (middleware!)

* It's highly extensible and other packages can be plugged into it (middleware!)

## Middleware, next() and res()
* Express.js relies heavily on middleware functions you can easily add them by calling use().

* Middleware functions handle a request and should call next() to forward the request to the next function in line or send a response

## Routing
* You can filter requests by path and method

* If you filter by method, paths are matched exactly, otherwise, the first segment of a URL is mathched.

* You can use the express.Router to split your routes across files elegantely

## Serve Files
* You're no limited to serving dummy text as a response.

* You can send files to your users, e.g. HTML files.

* If a request is directly made for a file (e.g. a .css file is requested), you can enable static serving such files via express.static().

## Useful Resources & Links
* [Express.js Official Docs](https://expressjs.com/)
