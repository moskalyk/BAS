const { Bas, memUsage } = require('../')

;(() => {
    const freq1 = 'rnft.life'
    const freq2 = 'mys8p3rp@55w0rd'
    
    const message = 'nerds'
    
    let startTime, endTime
    memUsage()
    console.log()
    console.log()
    const arrMicro = Bas.encrypt(message, [freq1, freq2])
    memUsage()
    console.log(`of size: ` + arrMicro.length)
    const decryptedMicro = Bas.decrypt(arrMicro, [freq1, freq2])
    console.log(decryptedMicro)

    memUsage()


    startTime = performance.now()
    const arrMacro = Bas.encrypt(message, [freq1, freq2], 0.1)
    endTime = performance.now()

    console.log(`Call to doSomething took ${(endTime - startTime)/1000} seconds`)

    startTime = performance.now()

    const decryptedMacro = Bas.decrypt(arrMacro, [freq1, freq2], 0.1)
    endTime = performance.now()

    console.log(`Call to doSomething took ${(endTime - startTime)/1000} seconds`)

    // memUsage()
    console.log(`of size: ` + arrMacro.length)
    console.log(decryptedMacro)
})()
