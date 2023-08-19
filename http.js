const http = require('node:http');

const server = http.createServer((req, res) => {
    const userDate = {
        firstName: "anu",
        lastName: "D"
    }
    res.writeHead(200);
    res.end(JSON.stringify(userDate));
});

server.listen(3000, () => {
    console.log("server is running");
});