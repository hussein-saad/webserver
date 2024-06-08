# Basic HTTP Web Server

This project is a simple HTTP server built from scratch. It supports a small subset of HTTP/1.1 and can handle multiple concurrent client requests.

## Project Structure

- `server.js`: This is the main server file. It uses the `net` module to create a TCP server.
- `www/`: This directory contains the static files served by the server.
- `www/index.html`: This is the main HTML file that is served when a client makes a GET request to the root path (`/`) or `/index.html`.

## How to Run

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Run the server with the command: `node server.js`.
3. Open a web browser and navigate to `http://localhost:8080`.

## Features

- Handles multiple concurrent client requests.
- Returns a text that describes the requested path.
- Serves HTML documents located in the `www` directory.
- Ensures that only documents in the `www` directory or its subdirectories are served.

## Security

This server has been designed with basic security considerations in mind. It will only serve files that are located within the `www` directory or its subdirectories, preventing access to sensitive files outside of this directory.

## Future Improvements

This is a basic implementation of an HTTP server and as such, there are many potential areas for improvement. Future updates could include support for more HTTP methods, improved error handling, and more robust security features.
