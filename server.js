const net = require('net');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const responseHeaders = {
  success: 'HTTP/1.1 200 OK\r\n\r\n',
  notFound: 'HTTP/1.1 404 Not Found\r\n\r\n',
  internalServerError: 'HTTP/1.1 500 Internal Server Error\r\n\r\n',
};

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    const request = data.toString();

    const [requestLine, _] = request.split('\r\n');

    const baseDir = path.join(__dirname, 'www');

    const [method, UrlPath, protocol] = requestLine.split(' ');

    if (method === 'GET' && (UrlPath === '/index.html' || UrlPath === '/')) {
      const filePath = path.join(baseDir, 'index.html');

      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.log(err);
          socket.write(responseHeaders.internalServerError);
          socket.end();
        }
        socket.write(responseHeaders.success);
        socket.write(data);
        socket.end();
      });
    } else {
      socket.write(responseHeaders.notFound);
      socket.end();
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
