const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ErrorHandlier = require("../middleware/errorHandler");

const registerUser = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    throw new ErrorHandlier("All fields are mandatory!",400);
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    throw new ErrorHandlier("User already available",400);

  }

  const hashedpassward = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    password: hashedpassward,
    email,
  });

  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      messaagge: "User Regestered Successfully",
    });
  } else {
    throw new ErrorHandlier("User data not valid",400);
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!password || !email) {
    throw new ErrorHandlier("All fields are mendatory",400);
  }
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30m" }
    );
    res.status(200).json({accessToken})
  } else {
    throw new ErrorHandlier("Email or password is not valid",400);
  }
});

const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
