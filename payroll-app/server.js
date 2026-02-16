const express = require("express");
const { read } = require("./modules/filehandler");


const app = express();
const PORT = 8000;


app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

 
  const employees = await read();
  console.log("Employee Data:", employees);
});
