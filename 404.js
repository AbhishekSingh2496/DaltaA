const express=require('express');
const path=require('path')
const NotFoundRouter=express.Router();
const ErrorHandler=require("./Contrallor/Error")
NotFoundRouter.use(ErrorHandler.handleError);
module.exports=NotFoundRouter;
