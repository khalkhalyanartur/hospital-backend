const ApiError = require("../exceptions/api-error");
const TokenService = require("../services/token-service");

const authorizationMiddleware = (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      return next(ApiError.UnautharizedError());
    }

    const userData = TokenService.validateAccessToken(accessToken);

    if (!userData) {
      return next(ApiError.UnautharizedError());
    }

    req.user = userData;
    next();
  } catch (error) {
    return next(ApiError.UnautharizedError());
  }
}

module.exports = authorizationMiddleware;