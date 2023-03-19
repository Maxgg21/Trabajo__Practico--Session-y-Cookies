const express = require('express');
const router = express.Router();
const {index, send, next, olvidar} = require("../controllers/indexController")
const validation = require("../validations/formValidation")
const cookies = require('../middleware/cookieCheck')

/* GET home page. */

router.get('/', cookies ,index)
      .post('/', validation, cookies ,send)
      .get("/home",cookies ,next)
      .post("/home", olvidar);

module.exports = router;
