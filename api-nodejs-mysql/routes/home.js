const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        success: true,
        result: 'The API works.'
    })
})

module.exports = router