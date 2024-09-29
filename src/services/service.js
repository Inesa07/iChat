const Model = require("../models/model")

class Service {
    static async getUserInfo (nickName, imgPath) {
       return Model.getUserInfo(nickName, imgPath)
    }
    static async getUserById(userId){
        return Model.getUserById(userId)
    }
}

module.exports = Service