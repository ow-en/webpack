const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', function(req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
    const contentFromHtml = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtml);
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});