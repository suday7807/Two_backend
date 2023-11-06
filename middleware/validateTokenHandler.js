const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization;  // Use req.headers.authorization to get the Authorization header

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "User is not authorized" });
      }
      req.user = decoded.user;
      next();
    });
  } else {
    res.status(401).json({ message: "Missing or malformed Authorization header" });
  }
});

module.exports = validateToken;
