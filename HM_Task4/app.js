//מגישים:סתיו יקר ויוסף חלבי

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const URLparse = url.parse(req.url, true);
  const pathname = URLparse.pathname;

  //מחפש האם הדף מכיל קשר ל - PAGE \ HOME 
  //אם לא מדפיס הערה 404 לא נמצא
  //אם כן מעלה את תוכן הדף
  if (pathname === '/'||pathname ==='/page.html')
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
  
  //מחפש האם הדף מכיל קשר ל - odot {ABOUT US} 
  //אם לא מדפיס הערה 404 לא נמצא
  //אם כן מעלה את תוכן הדף
  else if (pathname === '/odot.html') {
    try {
      const data = fs.readFileSync(path.join(__dirname, 'template', 'odot.html'), 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>Server Error</h1>');
    }
  } 
  
  //מחפש האם הדף מכיל קשר לדף קשר המכיל - {kesher} 
  //אם לא מדפיס הערה 404 לא נמצא
  //אם כן מעלה את תוכן הדף
  else if (pathname === '/kesher.html')
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

// {CSS \ PNG}- בודק אם הדף מעלה בקשה עם הסיומת 
//אם כן מתרגם אותם בהתאם
//אם לא מוסיף 404 לא נמצא
  else if (pathname.startsWith('/public/')) {
    try {
      const filePath = path.join(__dirname, pathname);
      const data = fs.readFileSync(filePath);
      
      let contentType = 'text/plain';
      if (pathname.endsWith('.css')) contentType = 'text/css';
      if (pathname.endsWith('.png')) contentType = 'image/png';
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

//השרת "מאזין" בלוקאל 3000
server.listen(3000,console.log('Server is running on http://localhost:3000'));
