const express = require("express");

const app = express();

const logMiddeware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD ${req.method}`
  );

  req.appName = "GoNode";

  return next();
};

app.use(logMiddeware);

app.get("/", logMiddeware, (req, res) => {
  return res.send(`Bem-vindo ao, ${req.appName} ${req.query.name}`); //?name=William
});

app.get("/nome/:name", (req, res) => {
  return res.json({
    // mostra no formato de json
    message: `Bem-vindo ao, ${req.appName} ${req.params.name}` //nome/william
  });
});

app.listen(3000);
