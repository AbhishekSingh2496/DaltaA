const Home1 = require("../modoles/Home");
const Home=require("../modoles/Home");
exports.getHome = (req, res,next) => {
   Home.fetchAll((RegisteredHomes)=>{
    res.render('store/home-list', {
        RegisteredHomes,
        pageTitle:"Home-list"
    });
   });
};
exports.GetBooking = (req, res,next) => {
    res.render('store/Booking', { pageTitle: "Booking" });
};
exports.GetFavaravitelist= (req, res,next) => {
     Home.fetchAll((RegisteredHomes)=>{
     res.render('store/favaravite-list',{ 
        RegisteredHomes,
        pageTitle:"Favariate-List Page"
    });
   });
};
exports.GetIndex= (req, res,next) => {
     Home.fetchAll((RegisteredHomes)=>{
     res.render('store/index',{ 
        RegisteredHomes,
        pageTitle:"Index Page"
    });
   });
};
exports.getHomeDetails= (req, res,next) => {
    const homeId=req.params.homeId;
    console.log("Home Id",homeId);
    Home1.findById(homeId, (home)=>{
        if(!home){
            console.log("Id not found");
            res.redirect("/home-list")
        }
        else{
        console.log("home Details found",home);
        res.render('store/HomeDetails', {
         home,
        pageTitle:"Home-list"
    });
    }
    }
    )
};
