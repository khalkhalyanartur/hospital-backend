const bcrypt = require("bcrypt");
const UserModel = require("../models/user");
const TokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async registration(login, password) {
    const candidate = await UserModel.findOne({ login });

    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с логином ${login} уже существует`);
    }
 
    const hashPassword = await bcrypt.hash(password, 3); 
    const user = await UserModel.create({ login, password: hashPassword });

    const userDto = new UserDto(user);
    const tokens = TokenService.generateToken({ ...userDto });

    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    }
  }

  async authorization(login, password) {
    const user = await UserModel.findOne({ login });

    if (!user) {
      throw ApiError.BadRequest(`Пользователь с таким логином не найден`);
    }

    const isPassEquals = await bcrypt.compare(password, user.password);
    
    if (!isPassEquals) {
      throw ApiError.BadRequest("Неверный пароль");
    }

    const userDto = new UserDto(user);
    const tokens = TokenService.generateToken({...userDto});

    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    }
  }

  async logout (refreshToken) {
    const token = await TokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnautharizedError(); 
    }
    
    const userData = TokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = await TokenService.findToken(refreshToken);

    if (!userData || !tokenFromDB) {
      throw ApiError.UnautharizedError();
    }

    const user = await UserModel.findById(userData.id)
    const userDto = new UserDto(user);
    const tokens = TokenService.generateToken({ ...userDto });

    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    }
  }
}

module.exports = new UserService();
