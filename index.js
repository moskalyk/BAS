const message = 'my test message'
const enc = new TextEncoder()
const dec = new TextDecoder()
const freq1 = enc.encode("this is a password")
const freq2 = enc.encode("this is 2nd password")

function decrypt(msg, freqs, scalar = 1, timeout=1000) {
    let msgArr = []
    
    let g = 0;
    let f = 0;

    while(g<timeout){

        for(let w = 0; w < freqs.length; w++){
            for(let i = 0; i < scalar*freqs[w].length; i++){
                for(let j = 0; j < scalar*freqs[i%freqs.length][i]; j++){
                    f++
                }
            }
        }
        g++
        msgArr.push(msg[f++])
    }

    return dec.decode(new Uint8Array(msgArr))
}

function encrypt(msg, freqs, scalar = 1) {
    let encrypted = []
    const rawEnc = enc.encode(msg)
    
    for(let k = 0; k < rawEnc.length; k++){
        for(let w = 0; w < freqs.length; w++){
            for(let i = 0; i < scalar*freqs[w].length; i++){
                for(let j = 0; j < scalar*freqs[i%freqs.length][i]; j++){
                    encrypted.push(Math.floor(Math.random()*128))
                }
            }
        }
        encrypted.push(rawEnc[k])
    }
    
    return encrypted
}

const memUsage = () => {
    for (const [key,value] of Object.entries(process.memoryUsage())){
        console.log(`Memory usage by ${key}, ${value/1000000}MB `)
    }
}

module.exports = {
    memUsage,
    encrypt,
    decrypt
}

let startTime, endTime

// memUsage()
// console.log()
// console.log()
// const arrMicro = encrypt(message, [freq1, freq2])
// memUsage()
// console.log(`of size: ` + arrMicro.length)
// const decryptedMicro = decrypt(arrMicro, [freq1, freq2])
// console.log(decryptedMicro)

// memUsage()
console.log()
console.log()


startTime = performance.now()
const arrMacro = encrypt(message, [freq1, freq2], 1)
endTime = performance.now()

console.log(`Call to doSomething took ${(endTime - startTime)/1000} seconds`)

startTime = performance.now()

const decryptedMacro = decrypt(arrMacro, [freq1, freq2], 1)
endTime = performance.now()

console.log(`Call to doSomething took ${(endTime - startTime)/1000} seconds`)

// memUsage()
console.log(`of size: ` + arrMacro.length)
console.log(decryptedMacro)
