const crypto = require('crypto');

const targetHash = '5531a5834816222280f20d1ef9e95f69';

function md5Hash(input) {
    return crypto.createHash('md5').update(input).digest('hex');
}

function bruteForcePIN() {
    for (let pin = 0; pin <= 9999; pin++) {

        const pinString = pin.toString().padStart(4, '0');
        

        const hash = md5Hash(pinString);

        if (hash === targetHash) {
            console.log(`Found Alice's PIN: ${pinString}`);
            return;
        }
    }
    console.log("PIN not found");
}

bruteForcePIN();
