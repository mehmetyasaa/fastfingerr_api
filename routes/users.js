var express = require('express');
var router = express.Router();

const users = [];
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(users.sort((user1, user2) => user2.score - user1.score || user1.userName.localeCompare(user2.userName)).slice(0, 10));
});

router.post('/score', function (req, res, next) {
  const { score, userName } = req.body;
  users.push({ score: Number(score), userName });
  res.send({ success: true });
});

module.exports = router;
