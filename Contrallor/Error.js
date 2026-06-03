exports.handleError=(req,res,next)=>{
    res.status(404).render('404',{pageTitle:"DeltaA Group 404"});
};