class ApiError extends Error {
  status;
  errors;

  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static BadRequest = (message, errors = []) => {
    console.log("in BadRequest");
    return new ApiError(400, message, errors);
  };
};

module.exports = ApiError;