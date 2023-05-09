var express = require('express');
var router = express.Router();
var blogUser = require('../controllers/blogUser');

router.post('/add-blog', async function(req, res, next) {
  console.log(req.body.blog);
  
  /* Adding user requested blog to MongoDB. */
  try {
    await blogUser.addBlog(req.body.blog)
    res.json({ error: false })
  } catch (error) {
    res.status(500).json({ error: error })
  }

});

module.exports = router;
