var express = require('express');
var router = express.Router();

/* GET users page. */
router.get('/', function(req, res, next) {
  let page = 'users';
  res.render(page, { title: 'Users', page:page });
});

module.exports = router;
