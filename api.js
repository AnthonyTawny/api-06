const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const xlsx = require("xlsx");
let wb = xlsx.readFile("List.xlsx");
let ws = wb.Sheets["StudentsName"];
let data = xlsx.utils.sheet_to_json(ws);

app.get('/GetAllStudents', function (req, res) {
   res.send(data)
 })
  
  app.listen(1000)

