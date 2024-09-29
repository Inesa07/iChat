const pg = require("../configs/psql.config");

class Model {
    static async getUserInfo(nickName, imgPath) {
        try {
            const user = await pg("users").insert({ nickName, image: imgPath })
            .returning('id');
            console.log("Data Successfully Inserted...");
        } catch (error) {
            console.error("Error inserting data:", error);
        }
    }
    static async getUserById(userId) {
        try {
          
            return await pg("users").where({ id: userId }).first();
        } catch (error) {
            console.error("Error fetching user data:", error);
            throw error;  
        }
    }
}

module.exports = Model;

