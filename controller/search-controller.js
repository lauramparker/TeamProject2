const express = require('express');

const { Client } = require('@elastic/elasticsearch')
//input the elasticsearch URL here
const client = new Client({ node: 'https://yahuaxydlj:p1p8dt5y8g@birch-114820214.us-east-1.bonsaisearch.net:443' })


const router = express.Router();

//Retrieves 
router.get('/api/search', async (req, res) => {
    
    const query = req.query.s  //req.params search
    console.log(req.params);
    console.log(req.body);

  // Let's search!
  const { body } = await client.search({
    index: 'reviews',
    body: {
      query: {
        match: {
          city_review: query
        }
      }
    }
  })
  console.log(body.hits.hits)

  //send empty res
    res.json(body.hits.hits.map((hit) => hit._source));

});




module.exports = router;