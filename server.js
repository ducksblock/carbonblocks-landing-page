const express = require('express');
const next = require('next');
const https = require("https");
const http = require("http");
const fs = require("fs");
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    // Default Next.js handler
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    const httpsOptions = {
        key: fs.readFileSync('/etc/letsencrypt/live/carbonblocks.lytiva.com/privkey.pem', 'utf8'),
        cert: fs.readFileSync('/etc/letsencrypt/live/carbonblocks.lytiva.com/cert.pem', 'utf8'),
        ca: fs.readFileSync('/etc/letsencrypt/live/carbonblocks.lytiva.com/chain.pem', 'utf8')
    }
    var httpsServer = https.createServer(httpsOptions, server);

    httpsServer.listen(443, () => {
        console.log('server started 443');
    });

    http.createServer((req, res) => {
        res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
        res.end();
    }).listen(80);
});

