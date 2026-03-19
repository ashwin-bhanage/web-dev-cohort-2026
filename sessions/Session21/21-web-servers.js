// The web server are used for communication of application and the web browser

/*
    THE HTTP VERSION

    1. npm init -y --> creates a package.json

    2. npm install express

    This is the raw version and (without express)
*/

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/home') {
        res.statusMessage("This is the web servers implementation ...")
    }
})

