import http from "http";
import add from "./add.js";

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello, World!\n");
});

const host = "localhost";
const port = 3000;


server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);

    console.log(add(1, 2));
});