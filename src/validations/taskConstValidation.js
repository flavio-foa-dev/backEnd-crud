// constantes de return Error

const BAD_ENTRIES = {
  status: 400,
  message: 'Invalid entries. Try again.',
};

const BAD_TOKEN_EXIST = {
  status: 401,
  message: 'jwt malformed',
};

const BAD_RECIPE_NOT_FOUND = {
  status: 404,
  message: 'recipe not found',
};

const BAD_TOKEN_NULL = {
  status: 401,
  message: 'missing auth token',
};

module.exports = {
  BAD_ENTRIES,
  BAD_TOKEN_EXIST,
  BAD_RECIPE_NOT_FOUND,
  BAD_TOKEN_NULL,
};
