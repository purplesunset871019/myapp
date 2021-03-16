var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '快肯系統整合股份有限公司' });
});

module.exports = router;
