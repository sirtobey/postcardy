let express   = require('express')
let multer    = require('multer')
let fs        = require('fs')

let image = require('../../../lib/image')

let easyimage = require('easyimage')

let router = new express.Router

router.post('/images', image.uploadImage(), (req, res, next) => {
  let file = req.file

  // TODO get the thumbnail

  res.json({ image: file.path })
})

router.get('/images', (req, res, next) => {
  let from = req.query.from
  let to   = req.query.to

  let files = image.getImages({ from, to })

  res.json({ files, max: image.countImages() })
})

router.delete('/images', (req, res, next) => {
  let img = req.body.image

  image.deleteImage(img)

  res.json({ result: 'success' })
})

export default router
