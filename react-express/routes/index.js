var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let page = 'index';
  res.render(page, { title: 'Express', page: page });
});

router.get('/appbar', function (req, res, next) {
  let page = 'appBar';
  res.render(page, { title: 'AppBar example', page: page });
});

router.get('/table', (req, res, next) => res.render('table', { title: 'Page example', page: 'Page Example' }));

module.exports = router;
