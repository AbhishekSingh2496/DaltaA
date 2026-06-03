const Home=require("../modoles/Home");
exports.addHome = (req, res,next) => {
  const {homeName,price,city,rooms,image,rating}=req.body;
  const home=new Home(homeName,price,city,rooms,image,rating);
  home.save();
  res.render('host/addedform', { pageTitle: "AddedHome" });

}
exports.GetAddHome = (req, res,next) => {
    res.render('host/details', { pageTitle: "AddHome" });
};
exports.getHostHome = (req, res,next) => {
   Home.fetchAll((RegisteredHomes)=>{
    res.render('host/host-home', {
        RegisteredHomes,
        pageTitle:"host-home"
    });
   });
};
