const express = require('express');
const router = express.Router();
const messages = [
  {
    text: 'We love cannons!',
    user: 'Bitches',
    added: new Date(),
  },
  {
    text: 'We love barrels!',
    user: 'Witches',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Messageboard', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form');
});
router.post('/new', function (req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
