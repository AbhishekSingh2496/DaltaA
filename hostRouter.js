const express = require('express');

const hostRouter = express.Router();
const ControllerTest=require('./Contrallor/host');
hostRouter.get("/addHome", ControllerTest.GetAddHome);

hostRouter.post("/addHome", ControllerTest.addHome);
hostRouter.get("/host-home", ControllerTest.getHostHome);

exports.hostRouter=hostRouter;