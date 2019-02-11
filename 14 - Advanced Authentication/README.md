# Module Summary

## Authentication

- Authentication means that not every visitor of the page can view and interact with everything
- Authentication has to happen on the server-side and builds up on sessions
- you can protect routes by checking the (session-controlled) login status right before you access a controller action

## Security & UX

- Passwords should be stored in a hashed form
- CSRF attacks are a real issue and you should therefore include CSRF protection in ANY application you build
- For a better user experience, you can flash data / message into the session eich you then can display in your views

## Useful Resources & Links

- [Bcrypt Official Docs](https://github.com/dcodeIO/bcrypt.js)
- [More on CSRF Attacks](https://www.acunetix.com/websitesecurity/csrf-attacks/)
