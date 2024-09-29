const Service = require("../services/service")

class Controller {
    static async getUserInfo (req, res, next) {
        try {
            const { nickName } = req.body
            const { path } = req.file  
            await Service.getUserInfo(nickName, path) 
            res.json({ message : "User Saved In Database ..." })
        } catch (error) {
            next(error)
        }
    }
   

static async getUserById(req, res, next) {
    try {
        const userId = req.params.id; 
        const user = await Service.getUserById(userId); // Fetch user data
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.json(user); // Send user data as JSON response
    } catch (error) {
        next(error);
    }
}

}

module.exports = Controller