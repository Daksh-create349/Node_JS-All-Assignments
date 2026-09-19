const fs = require("fs");

const vehicle = {
    studentName: "Daksh Srivastava",
    collegeId: "ITM001",
    vehicleNumber: "MH05AB1234",
    vehicleType: "Bike",
    registrationDate: new Date().toLocaleDateString()
};

let vehicles = [];

if (fs.existsSync("rto_data.json")) {
    vehicles = JSON.parse(fs.readFileSync("rto_data.json", "utf8"));
}

vehicles.push(vehicle);

fs.writeFileSync("rto_data.json", JSON.stringify(vehicles, null, 2));

console.log("Vehicle registration saved successfully.");