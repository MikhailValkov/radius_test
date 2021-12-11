const corsMiddleware = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CORS_DOMAIN || "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
};

module.exports = {
    cors: corsMiddleware
};