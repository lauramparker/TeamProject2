const express = require('express');
const db = require('../models');

const router = express.Router();

//require elasticsearch
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'https://yahuaxydlj:p1p8dt5y8g@birch-114820214.us-east-1.bonsaisearch.net:443' })

//Retrieves all posts
//Renders it to index html file
router.get('/reviews', async (req, res) => {
  
  var result = await db.Travel.findAll({
    include: [db.User],
  });
  console.log(result);
  res.render('allreviews', { review: result });
  
});

//Retrieves all posts of a specific city
//Renders it to city html file
router.get('/api/reviews/city/:city', async (req, res) => {
  
  var result = await db.Travel.findAll({
    where: {
      city_name: req.params.city,
    },
    include:[db.User], 
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
router.get('/reviews/:id', async (req, res) => {
  
  let post = await db.Travel.findOne({
    where: {
      id: req.params.id,
    },
    raw: true
  });
  res.render('singlePost', { review: post });
});

//Create new review/blog post
router.post('/api/reviews', async (req, res) => {
  console.log(req.user);
  let newReview = await db.Travel.create({

      city_name: req.body.city_name,
      city_review: req.body.city_review,
      hotel_name: req.body.hotel_name,
      hotel_review: req.body.hotel_review,
      UserId: req.user.id,
  });
  // Insert into elasticsearch
  await client.index({
    index: 'reviews',
    refresh: true,
    body: {
      id: newReview.id,
      city_name: req.body.city_name,
      city_review: req.body.city_review,
      hotel_name: req.body.hotel_name,
      hotel_review: req.body.hotel_review,
    }
  })
  res.json(newReview);
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