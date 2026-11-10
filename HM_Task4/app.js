const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const URLparse = url.parse(req.url, true);
  const pathname = URLparse.pathname;
  const query = URLparse.query;

  if (pathname === '/')
     {
    try {
      let data = fs.readFileSync(path.join(__dirname, 'template', 'page.html'), 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>Server Error</h1>');
    }
  } 
  else if (pathname === '/about') {
    try {
      const data = fs.readFileSync(path.join(__dirname, 'template', 'odot.html'), 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>Server Error</h1>');
    }
  } 
  // דף צור קשר
  else if (pathname === '/contact')
     {
    try {
      const data = fs.readFileSync(path.join(__dirname, 'template', 'kesher.html'), 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>Server Error</h1>');
    }
  } 
  //??
  else if (pathname.startsWith('/public/')) {
    try {
      const filePath = path.join(__dirname, pathname);
      const data = fs.readFileSync(filePath);
      
      let contentType = 'text/plain';
      if (pathname.endsWith('.css')) contentType = 'text/css';
      if (pathname.endsWith('.png')) contentType = 'image/png';
      if (pathname.endsWith('.jpg') || pathname.endsWith('.jpeg')) contentType = 'image/jpeg';

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    } catch (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>File Not Found</h1>');
    }
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Page Not Found</h1>');
  }
    
});

server.listen(3000,console.log('Server is running on http://localhost:3000'));
