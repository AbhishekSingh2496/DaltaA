const fs=require('fs');
const path=require('path');
const rootDir=require("../utils/path");
const { json } = require('stream/consumers');
const favoritesDataPath=path.join(rootDir,'data','favorites.json');
const RegisteredHomes = [];
module.exports=class favorites{
static addtoFavorites(homeId, callback) {
    favorites.getFavorites((favorites) => {
        if (!favorites.includes(homeId)) {
            favorites.push(homeId);

            fs.writeFile(
                favoritesDataPath,
                JSON.stringify(favorites),
                callback
            );
        } else {
            console.log("Already in favorites");
            callback();
        }
    });
}
static getFavorites(callback){
    fs.readFile(favoritesDataPath, (err, data) => {
        if (err) {
            callback([]);
            return;
        }

        try {
            const favorites = data.length
                ? JSON.parse(data)
                : [];

            callback(favorites);
        } catch (error) {
            console.error("Invalid JSON:", error);
            callback([]);
        }
    });
}
};

