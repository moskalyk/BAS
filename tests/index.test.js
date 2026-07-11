const { Bas } = require('../')

;(() => {
    const freq1 = 'rnft.life'
    const freq2 = 'mys8p3rp@ssw0rd'
    
    const freq3 = 'n3r0'
    
    const message = 'nerds'
    
    const arrMicro = Bas.encrypt(message, [freq1, freq2])
    const decrypted = Bas.decrypt(arrMicro, [freq1, freq2])
    
    const array3 = Bas.encrypt(decrypted, [freq1, freq2, freq3])
    const decrypted3 = Bas.decrypt(array3, [freq1, freq2, freq3])
    
    console.log(decrypted3)
    
    const arrSingular = Bas.encrypt(message, [freq1])
    const decrypted4 = Bas.decrypt(arrSingular, [freq1])
    console.log(decrypted4)
})()
