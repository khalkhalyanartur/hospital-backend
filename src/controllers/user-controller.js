const UserService = require("../services/user-service");

const refreshTokenOptions = {
  maxAge: 30 * 24 * 60 * 60 * 1000, //30day
  httpOnly: true
}

const accessTokenOptions = {
  maxAge: 30 * 60 * 1000, //30min
  httpOnly: true
}

class UserController {
  async registration (req, res, next) {
    try {
      const { login, password } = req.body;
      
      const userData = await UserService.registration(login.trim(), password.trim());
      
      res.cookie("refreshToken", userData.refreshToken, refreshTokenOptions);
      res.cookie("accessToken", userData.accessToken, accessTokenOptions);

      res.status(200).send(userData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
