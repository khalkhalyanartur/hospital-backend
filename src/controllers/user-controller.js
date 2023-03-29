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

  async login(req, res, next) {
    try {
      const { login, password } = req.body;
      const userData = await UserService.signin(login, password);

      res.cookie("refreshToken", userData.refreshToken, refreshTokenOptions);
      res.status(200).send(userData);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      console.log("in controller");
      console.log(req.cookies);
      const { refreshToken } = req.cookies;
      console.log("in controller req.cookies", req.cookies);
      const token = await UserService.logout(refreshToken);
      res.clearCookie("refreshToken");
      res.clearCookie("accessToken");
      res.status(200).send(token);
    } catch(error) {
      next(error);
    }
  }


/*
async logout(req, res, next) {
  try {
    console.log("123")
    const { refreshToken } = req.cookies;
    console.log(req.cookies);
    const token = await UserService.logout(refreshToken);
    res.clearCookie("refreshToken");
    res.clearCookie("accessToken");
    res.status(200).send(token);
  } catch (error) {
      next(error);
  }
}
*/

}

module.exports = new UserController();
