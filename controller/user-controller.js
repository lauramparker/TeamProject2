const express = require('express');
const db = require('../models');
const passport = require('../config/passport');
const router = express.Router();

//Sign up
router.post('/api/signup', async (req, res) => {
  console.log(req.body);
  let newUser = await db.User.create(req.body);
  res.redirect(307, "/main");
  //res.json(newUser);
});

//Login
router.post('/api/login',
  passport.authenticate("local"), function (req, res) {
    
    res.json(req.user);
  });



module.exports = router;