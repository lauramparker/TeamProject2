const express = require('express');
const db = require('../models');

const router = express.Router();

//Create new user
router.post('/api/user', async (req, res) => {
  console.log(req.body);
  let newUser = await db.User.create(req.body);
  res.json(newUser);
});

module.exports = router;