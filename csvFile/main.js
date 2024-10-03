// document.getElementById("download").addEventListener("click", () => {
//   const data = [
//     {
//       testsanerio: "foghf",
//       testStep: "fjiuhed",
//       ExpectResult: "mvdkjvhdvhd",
//       ActualResult: "isdcsbdsdd",
//     },
//   ];

//   const csvContent = data.map((row) => Object.values(row).join(",")).join("\n");
//   const blob = new Blob([csvContent], { type: "text/csv" });
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = "data.csv";
//   a.click();
//   URL.revokeObjectURL(url);
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fs = require("fs");

const data = [
  [name, age, city],
  [sathees, 28, sivakasi],
];

const csvContent = data.map((row) => row.join(",")).join("/n");

fs.writeFile("data.csv", csvContent, (err) => {
  if (err) {
    console.error("Error writing file", err);
  } else {
    console.log("CSV file has been saved.");
  }
});
