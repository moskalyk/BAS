const fs = require('fs')

const { Bas } = require('../')

;(async () => {
    const freq1 = 'rnft.life'
    const freq2 = 'mys8p3rp@ssw0rd'
    
    const message = 'largishscalar'
    
    const arrLargish = Bas.encrypt(message, [freq1, freq2], 30)
    await fs.writeFileSync(__dirname+'/../example/'+'example.txt', JSON.stringify(arrLargish))
})()
