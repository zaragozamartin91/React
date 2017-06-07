var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let page = 'index';
  res.render(page, { title: 'Express', page:page });
});

module.exports = router;
