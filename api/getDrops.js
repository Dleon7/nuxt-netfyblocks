const { Router } = require('express')
const data = require("./data.json")

const router = Router()

router.use('/getDrops', (req, res) => {
    console.log('data', data)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
})

module.exports = router
