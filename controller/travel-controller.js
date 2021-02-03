const express = require('express');
const db = require('../models');

const router = express.Router();

//Retrieves all posts
//Renders it to index html file
router.get('/api/reviews', async (req, res) => {
  
  var result = await db.Travel.findAll({
    //include: [db.User],
  });
  //res.render('index',result);
  res.json(result);
});

//Retrieves all posts of a specific city
//Renders it to city html file
router.get('/api/reviews/city/:city', async (req, res) => {
  
  var result = await db.Travel.findAll({
    where: {
      city_name: req.params.city,
    },
    //include:[db.User], 
  })
  //res.render('city',result);
  res.json(result);

});

//Retrieves all posts of a hotel name
//Renders it to hotel html file
router.get('/api/reviews/hotel/:hotel', async (req, res) => {
  
  var result = await db.Travel.findAll({
    where: {
      city_name: req.params.hotel,
    },
    //include:[db.User], 
  })
  //res.render('hotel',result);
  res.json(result);

});

//Retrieves single post
//Renders it to singPost html file
router.get('/api/revies/:id', async (req, res) => {
  
  let post = await db.Travel.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.render('singlePost', post);
});

//Create new review/blog post
router.post('/api/reviews', async (req, res) => {
  console.log(req.body);
  let newPost = await db.Travel.create(req.body);
  res.json(newPost);
});

//Update review/blog
router.put('/api/reviews/:id', async (req, res) => {
  
  let updatedPost = await db.Travel.update(req.body, {
    where: {
      id: req.params.id,
    }
  });
  res.json(updatedPost);
});

module.exports = router;