const favorites = require("../modoles/favorites");
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
exports.GetFavaravitelist = (req, res, next) => {
    favorites.getFavorites((favoriteIds) => {

        Home.fetchAll((RegisteredHomes) => {

            const favoriteHomes = RegisteredHomes.filter(
                home => favoriteIds.includes(String(home.id))
            );

            res.render('store/favaravite-list', {
                favoriteHomes,
                pageTitle: "Favariate-List Page"
            });

        });

    });
};
exports.PostFavaravite= (req, res,next) => {
     console.log("Came to add to Favaraite",req.body);
     favorites.addtoFavorites(req.body.id,err =>{
         if(err){
             console.error("Error adding to favorites:", err);
         }
         res.redirect("/favorites");
     })
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
    Home.findById(homeId, (home)=>{
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
