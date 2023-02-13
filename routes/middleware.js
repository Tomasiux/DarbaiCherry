const express = require("express");
const router = express.Router();
const exphbs=require('express-handlebars');

const firstMiddleware = (req, res, next) => {
  console.log(`${new Date().toLocaleString("lt-LT")}: route ${req.originalUrl} was called.`);
  next();
};

const secondMiddleware = (req, res) => {

  res.render("middleware", { 
    title: "Middleware pavyzdys",
    isMiddleware: true,
    date: new Date().toLocaleString("lt-LT"),
    route: req.originalUrl
  });
};

router.get("/middleware", firstMiddleware, secondMiddleware);

module.exports = router;