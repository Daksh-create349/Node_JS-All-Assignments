const http = require("http");
const validateUser = require("./validator");

const server = http.createServer((req, res) => {
    if (req.method === "POST") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const user = JSON.parse(body);

            res.writeHead(200, { "Content-Type": "application/json" });

            if (validateUser(user)) {
                res.end(JSON.stringify({ message: "Valid user" }));
            } else {
                res.end(JSON.stringify({ message: "Invalid user" }));
            }
        });
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});