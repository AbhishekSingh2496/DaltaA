const fs=require('fs');
const path=require('path');
const rootDir=require("../utils/path");
const { json } = require('stream/consumers');
const homeDataPath=path.join(rootDir,'data','Home.json');
const RegisteredHomes = [];
module.exports=class Home{
    constructor(homeName,price,city,rooms,image,rating){
        this.homeName=homeName;
        this.price=price;
        this.city=city;
        this.rooms=rooms;
        this.image=image;
        this.rating=rating;
    }
save(){
this.id=Math.random().toString();
Home.fetchAll((RegisteredHomes)=>{
    RegisteredHomes.push(this);
    fs.writeFile(homeDataPath,JSON.stringify(RegisteredHomes),(err)=>{
        console.log("file writing included",err);
    });
    });
}
static fetchAll(callback){
    fs.readFile(homeDataPath,(err,data)=>{
    //  console.log("file read:",err,data);
     callback(!err ? JSON.parse(data):[]);
    })
    return RegisteredHomes;
}
static findById(homeId, callback) {

    this.fetchAll((homes) => {

        const homeFound = homes.find(
            home => home.id == homeId
        );
        callback(homeFound);

    });

}
};

