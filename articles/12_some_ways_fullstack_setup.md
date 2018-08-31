1. One server that acts both as web server and data server

  - A Node server serves the files bundled by Webpack (frontend), and also handles all API requests from the frontend.


2. Two servers: one frontend, one backend
  - `Webpack-dev-server` serves all the frontend files

  - Node server is a pure backend API server, only serving to API requests

  - `webpack` config needs a proxy to allow CORS, so that frontend can request data from backend successfully. Otherwise, frontend running at `localhost:3000/` can't make an API request to server at `localhost:4000/`.


  *Read more about CORS here:*

  [CORS link](/cors/link)
