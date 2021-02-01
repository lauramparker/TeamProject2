const express = require('express');
const db = require('../models');

const router = express.Router();

//Retrieves all posts
//Renders it to index html file
router.get('/', async (req, res) => {
  
  var result = await db.Trabel.findAll({
    include: [db.User],
  });
  res.render('index',result);
});

//Retrieves all posts of a specific city
//Renders it to city html file
router.get('/api/post/city/:city', async (req, res) => {
  
  var result = await db.Travel.findAll({
    where: {
      city_name: req.params.city,
    },
    include:[db.User], 
  })
  res.render('city',result);
});

//Retrieves single post
//Renders it to singPost html file
router.get('/api/post/:id', async (req, res) => {
  
  let post = await db.Travel.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.render('singlePost', post);
});

//Create new review/blog post
router.post('/api/post', async (req, res) => {
  
  let newPost = await Travel.create(req.body);
  res.json(newPost);
});

//Update review/blog
router.put('/api/post/:id', async (req, res) => {
  
  let updatedPost = await db.Travel.update(req.body, {
    where: {
      id: req.params.id,
    }
  });
  res.json(updatedPost);
});