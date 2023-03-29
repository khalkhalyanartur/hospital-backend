const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");

class UserService {
  async registration (login, password) {
    const candidate = await UserModel.findOne({ login });
    if (candidate) {
      throw new Error(`Пользователь с логином ${login} уже существует`)
    }
    const hashPassword = await bcrypt.hash(password, 3); 
    const user = await UserModel.create({login, password: hashPassword });

    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    }
  }
}

module.exports = new UserService();
