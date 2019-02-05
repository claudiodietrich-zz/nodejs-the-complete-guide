# Module Summary

## How the Web Works
* Client => Request => Server => Response => Client

## Program Lifecycle & Event Loop
* Node.js runs non-blocking JS code  and uses an event-driven code (“Event Loop”) for running your logic
* A Node program exists as soon as there is no more work to do
* Note: The createServer() event never finishes by default

## Asynchronous Code
* JS code is non-blocking
* User callbacks and events => Order changes!

## Request & Responses
* Parse request data in chunks (Streams & Buffers)
* Avoid “double responses”

## Node.js & Core Modules
* Node.js ships with multiple core modules (http, fs, path, ….)
* Core modules can be imported into any file to be used there
* Import via require(‘module)

## The Node Module System
* Import via require(‘./path-to-file’) for custom files or require(‘module’) for core & third-party modules
* Export via module.exports or just exports (for multiple exports)

## Useful Resources & Links
* [Official Node.js Docs](https://nodejs.org/en/docs/guides/)
* [Full Node.js Reference (for all core modules)](https://nodejs.org/dist/latest/docs/api/)
* [More about the Node.js Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
* [Blocking and Non-Blocking Code](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)



