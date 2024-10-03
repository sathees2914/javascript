const fs = require("fs");
const path = require("path");

const data = [
  ["test senerio", "test step", "expect result", "actual result"],
  ["dadvsfsef", "sdvasdvadv", "sdawfwd", "hfhfdgcgfx"],
];

const csvContent = data.map((row) => row.join(",")).join("\n");

const filePath = path.join(__dirname, "data1.csv");

fs.writeFile(filePath, csvContent, (err) => {
  if (err) {
    console.error("Error writing file", err);
  } else {
    console.log("CSV file has been saved to", filePath);
  }
});
