# brownian-array-security (BAS encryption)
BAS encryption works by splicing together a shared password transported via a p2p protocol network, then woven together to create random pads in an array for a complete array assemblage of encryption and decryption

## use case
place a data blob somewhere public and verify a source of origin from BAS decrypts to a target value

original    : mymessage
padded      : m0000y111111111111111m0000000e111111s000000000000000s1111111a00000000g1111111111e
text encoded: ......
encrypted   : [1,5,42,5,1,45,5,15,76,5,1,55,56,61,5,526,5,7,1,65,1,5,65,6,1, etc.]

## features
pad scalars: scale the padding array by a scalar to use more space and create better security

### example

```js
const basArr = encrypt(message, [frequencyPassword1, frequencyPassword2], 1)
decrypt(basArr, [frequencyPassword1, frequencyPassword2], 1)
```

### example: adding passwords / users

```js
const { Bas } = require('../')

;(async () => {
    const freq1 = 'rnft.life'
    const freq2 = 'mys8p3rp@ssw0rd'
    
    const freq3 = 'n3r0'
    
    const message = 'nerds'
    
    const arrMicro = Bas.encrypt(message, [freq1, freq2])
    const decrypted = Bas.decrypt(arrMicro, [freq1, freq2])
    
    const array3 = Bas.encrypt(decrypted, [freq1, freq2, freq3])
    const decrypted3 = Bas.decrypt(array3, [freq1, freq2, freq3])
    
    console.log(decrypted3)
})()
```
#### scalr of 1
```
this is a password
this is a 2nd password

my test message

encrypted array: Memory usage by heapUsed, 2.518616MB 
encrypted array of size: 53895
encrypt time: 0.0066 seconds
decrypt time: 0.0117 seconds

```

#### scalar of 501
```
this is a password
this is a 2nd password

my test message

before
Memory usage by heapUsed, 4.018464MB 

after
encrypted array: Memory usage by heapUsed, 459.572016MB 
encrypted array of size: 27745395
encrypt time: 0.98 seconds
decrypt time: 3.16 seconds
```
