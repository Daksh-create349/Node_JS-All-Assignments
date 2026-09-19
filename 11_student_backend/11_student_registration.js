const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.method === "POST") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const student = JSON.parse(body);
            student.registeredAt = new Date().toISOString();

            let students = [];

            if (fs.existsSync("students.json")) {
                students = JSON.parse(fs.readFileSync("students.json", "utf8"));
            }

            students.push(student);

            fs.writeFileSync("students.json", JSON.stringify(students, null, 2));

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Student registered successfully" }));
        });
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});