const fs = require('fs');
const crypto = require('crypto');

const targetHash = '578ed5a4eecf5a15803abdc49f6152d6';

function md5Hash(input) {
    return crypto.createHash('md5').update(input).digest('hex');
}

function dictionaryAttack() {
   
    const passwords = fs.readFileSync('passwords.txt', 'utf-8').split('\n');

    for (const password of passwords) {
        const trimmedPassword = password.trim();

        const hash = md5Hash(trimmedPassword);

        if (hash === targetHash) {
            console.log(`Found Bob's password: ${trimmedPassword}`);
            return;
        }
    }
    console.log("Password not found in the dictionary.");
}

dictionaryAttack();
