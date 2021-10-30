const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const router = express.Router();

const db = mongoose.createConnection(config.dbURI);

const sellerSchema = new mongoose.Schema({
  ID: String,
  email: String,
  password: String,
  phoneNumber: Number,
  logoURL: String,
  location: Object,
  description: String,
  firstName: String,
  lastName: String,
  inventory: Array,
});

const sellerModel = db.model("seller", sellerSchema);

//middleware
async function refreshAuth(req, res, next) {
  const refreshToken = req.cookies?.refreshToken;
  if (refreshToken) {
    const { id } = await jwt.verify(refreshToken, config.refreshTokenSecret);
    if (id) {
      const existingSeller = await sellerModel.findOne({ _id: id });
      if (existingSeller) {
        req.seller = existingSeller;
        next();
      } else {
        res.send({
          msg: "Seller not authenticated, please sign in again",
          success: false
        });
      };
    } else {
      res.send({
        msg: "Seller not authenticated, please sign in again",
        success: false
      });
    };
  } else {
    res.send({
      msg: "Seller not authenticated, please sign in again",
      success: false
    });
  };
};

async function auth(req, res, next) {
  const authToken = req.header("Authorization");
  const accessToken = authToken.split(" ")[1];
  if (accessToken) {
    const { id } = jwt.verify(accessToken, config.accessTokenSecret);
    if (id) {
      const existingSeller = await sellerModel.findOne({ _id: id });
      if (existingSeller) {
        req.seller = existingSeller;
        next();
      } else {
        res.send({
          msg: "Seller not authenticated, please sign in again",
          seller: null
        });
      };
    } else {
      res.send({
        msg: "Seller not authenticated, please sign in again",
        seller: null
      });
    };
  } else {
    res.send({
      msg: "Unauthenticated seller, please sign in again",
      seller: null
    });
  }
};

//routes
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const existingSeller = await sellerModel.findOne({ email, password });
  if (existingSeller) {
    const id = existingSeller._id;
    const accessTokenExpiration = 1000 * 60 * 60;
    const accessToken = jwt.sign({ id }, config.accessTokenSecret, {
      expiresIn: accessTokenExpiration
    });
    const refreshTokenExpiration = 1000 * 60 * 60 * 24 * 7;
    const refreshToken = jwt.sign({ id }, config.refreshTokenSecret, {
      expiresIn: refreshTokenExpiration
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: refreshTokenExpiration
    }).send({
      accessToken,
      accessTokenExpiration,
      msg: "Seller signed in"
    });
  } else {
    res.send({
      msg: "Seller does not exist"
    });
  };
});


router.post("/refreshTokens", refreshAuth, (req, res) => {
  const existingSeller = req.seller;
  const accessToken = jwt.sign({ id: existingSeller._id }, config.accessTokenSecret, {
    expiresIn: 1000 * 60 * 60
  });
  res.send({
    accessToken,
    msg: "Access token refresh",
    success: true
  });
});


router.get("/view/:ID", async (req, res) => {
  const sellerID = req.params.ID, ;
  const seller = await sellerModel.findOne({ ID: sellerID });
  res.send(seller);
});

router.post("/dashboard", auth, (req, res) => {
  res.send({ seller: req.seller });
});

module.exports = router;