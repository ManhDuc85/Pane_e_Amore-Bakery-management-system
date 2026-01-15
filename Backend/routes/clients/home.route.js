const express = require('express');
const router = express.Router();

const controller = require("../../controller/clients/home.controller");
const { authorize } = require('../../middleware/authorize.middleware');
const { verify } = require('jsonwebtoken');

router.get("/", verify, controller.index);

module.exports = router;