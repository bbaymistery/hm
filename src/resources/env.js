const isDevelopment = false; // localohst -> true || live -> false
const env = {
  websiteDomain: isDevelopment
    ? "http://localhost:8000"
    : "https://trustedfixteam.netlify.app",
  apiDomain: "",
  status: {
    success: 200,
    error: 403,
    success: 200,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    methodNotAllowed: 405,
    notAcceptable: 406,
    internalServerError: 500,
  },
};
export default env;
