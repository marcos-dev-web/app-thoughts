const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.resolve('src','public'));
})

router.get('/fav', (req, res) => {
  res.json({
    route: 'fav'
  })
})

router.get('/new', (req, res) => {
  res.sendFile(path.resolve('src', 'public', 'pages', 'new'));
})

router.post('/new', (req, res) => {
  const {title, text} = req.body;
  if (!title && !text) {
    res.send({
      success: false,
      errors: [
        'title and text has empty',
      ],
    })
  } else {
    res.send({
      status: 200,
      success: true,
    })
  }
})

router.get('/all', (req, res) => {
  res.json({
    route: 'all'
  })
})

module.exports = router;
