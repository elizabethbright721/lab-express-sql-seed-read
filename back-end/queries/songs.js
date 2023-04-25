const db = require("../db/dbConfig.js")

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;
    }catch (e) {
        return error;
    }
};

module.exports = {
    getAllSongs,
} 