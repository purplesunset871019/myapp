var express = require('express');

var router = express.Router();
console.log("router.get");
console.log(router.get);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '快肯系統整合股份有限公司' });
  //console.log("indexres");
  //console.log(res);
  //console.log("indexrender");
  //console.log(render);
});

module.exports = router;
