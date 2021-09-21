const express = require('express')
const app = express()

const getDrops = require ('./getDrops')
app.use(getDrops)

if(require.main === module){
    const port = 3001
    app.listen(port, () => {
        console.log(`API server listening on port ${port}`)
    })
}
module.exports = app