import bigInt from 'big-integer'
import EvpKDF from 'crypto-js/pbkdf2'
import SHA256 from 'crypto-js/sha256'
import HMAC from 'crypto-js/hmac'
import crypto from 'crypto-js'

export function encryptLogin(login, masterPassword, options) {
    var _options = options !== undefined ? options : {};
    var iterations = _options.iterations || 8192;
    var keylen = _options.keylen || 32;

    return new Promise((resolve, reject) => resolve(EvpKDF(masterPassword, login, {keySize: 8, iterations: iterations, hasher: crypto.algo.SHA256 })))    
}

export function renderPassword(encryptedLogin, site, passwordOptions) {
    return deriveEncryptedLogin(encryptedLogin, site, passwordOptions).then(function (derivedEncryptedLogin) {
        var template = passwordOptions.template || getPasswordTemplate(passwordOptions);
        return prettyPrint(derivedEncryptedLogin, template);
    });
}

function createHmac(encryptedLogin, salt) {
    return new Promise(function (resolve) {
        const result = crypto.algo.HMAC.create(crypto.algo.SHA256, encryptedLogin).finalize(salt).toString()        
        
        resolve(result)
    });
}

function deriveEncryptedLogin(encryptedLogin, site, options) {
    var _options = options !== undefined ? options : {};
    var length = _options.length || 12;
    var counter = _options.counter || 1;

    var salt = site + counter.toString();
    return createHmac(encryptedLogin, salt).then(function (derivedHash) {
        return derivedHash.substring(0, length);
    });
}

function getPasswordTemplate(passwordTypes) {
    var templates = {
        lowercase: 'vc',
        uppercase: 'VC',
        numbers: 'n',
        symbols: 's',
    };
    var returnedTemplate = '';
    Object.keys(templates).forEach(function (template) {
        if (passwordTypes.hasOwnProperty(template) && passwordTypes[template]) {
            returnedTemplate += templates[template]
        }
    });
    return returnedTemplate;
}

function prettyPrint(hash, template) {
    var password = '';

    string2charCodes(hash).forEach(function (charCode, index) {
        var charType = getCharType(template, index);
        password += getPasswordChar(charType, charCode);
    });
    return password;
}

function string2charCodes(text) {
    var charCodes = [];
    for (var i = 0; i < text.length; i++) {
        charCodes.push(text.charCodeAt(i));
    }
    return charCodes;
}

function getCharType(template, index) {
    return template[index % template.length];
}

function getPasswordChar(charType, index) {
    var passwordsChars = {
        V: 'AEIOUY',
        C: 'BCDFGHJKLMNPQRSTVWXZ',
        v: 'aeiouy',
        c: 'bcdfghjklmnpqrstvwxz',
        A: 'AEIOUYBCDFGHJKLMNPQRSTVWXZ',
        a: 'AEIOUYaeiouyBCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz',
        n: '0123456789',
        s: '@&%?,=[]_:-+*$#!\'^~;()/.',
        x: 'AEIOUYaeiouyBCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz0123456789@&%?,=[]_:-+*$#!\'^~;()/.'
    };
    var passwordChar = passwordsChars[charType];
    return passwordChar[index % passwordChar.length];
}

export function createFingerprint(str) {
    return new Promise(function (resolve) {
        const result = crypto.algo.HMAC.create(crypto.algo.SHA256, str).finalize()
        
        console.log(result.toString())

        resolve(result)
    });
}