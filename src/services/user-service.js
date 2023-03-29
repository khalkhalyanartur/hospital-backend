const bcrypt = require("bcrypt");
const UserModel = require("../models/user");
const TokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async registration (login, password) {
    const candidate = await UserModel.findOne({ login });

    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с логином ${login} уже существует`);
    }
 
    const hashPassword = await bcrypt.hash(password, 3); 
    const user = await UserModel.create({login, password: hashPassword });

    const userDto = new UserDto(user);
    const tokens = TokenService.generateToken({...userDto});
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    }
  }
}

module.exports = new UserService();
