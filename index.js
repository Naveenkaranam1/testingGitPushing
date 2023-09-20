const express = require("express");
const app = express();

app.get("/date", (request, response) => {
  const date = new Date();
  response.send(`Today Date is ${date}`);
});

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

const path = {
  root: __dirname,
};

app.listen(3000, () =>
  console.log("Server was runnging at http://localhost:3000/")
);
