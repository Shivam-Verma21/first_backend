// console.log("Hello");

require("dotenv").config();
const express = require("express");
// import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/z", (req, res) => {
  res.status(404).send("<h1>Not found!!</h1>");
});

app.get("/github", (req, res) => {
  const dataFetching = async () => {
    const response = await fetch("https://api.github.com/users/Shivam-Verma21");
    const data = await response.json();
    console.log(data);
    res.json(data);
  };
  dataFetching();
});

// app.listen(port, () => {
//   console.log(`Example app listening on port http://127.0.0.1:${port}`)
// })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});
