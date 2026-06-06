const express = require('express');
const storeRouter = express.Router();
const ControllerTest1=require('./Contrallor/store');
storeRouter.use((req, res, next) => {
    console.log("First middleware", req.method, req.url);
    next();
});
storeRouter.get("/", ControllerTest1.GetIndex);
storeRouter.get("/home-list", ControllerTest1.getHome);
storeRouter.get("/Booking", ControllerTest1.GetBooking);
storeRouter.get("/favaravite-list", ControllerTest1.GetFavaravitelist);
storeRouter.get("/home-list/:homeId", ControllerTest1.getHomeDetails);
storeRouter.post("/favorites", ControllerTest1.PostFavaravite);
exports.storeRouter=storeRouter;
