import express from "express";
import * as qsql from "./qtools/qsql.js";

const app = express();
const port = 3334;

app.get("/", (req, res) => {
  res.send(`
        <style>
        li {
            font-size: 1.5rem;
        }
        </style>
        <h1>Employee API</h1>
        <ul>
            <li><a href="http://localhost:${port}/employees">http://localhost:${port}/employees</a> = all employees</li>
            <li><a href="http://localhost:${port}/employees/4">http://localhost:${port}/employees/4</a> = employee with ID 4</li>
            <li><a href="http://localhost:${port}/employees-territories/4">http://localhost:${port}/employees-territories/4</a> = territories of employee with ID 4</li>
        </ul>
    `);
});

app.get("/employees", async (req, res) => {
  const employees = await qsql.getRecordsWithSql("SELECT * FROM Employees");
  res.send(employees);
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
