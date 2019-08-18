function AES_Encrypt(message,pass) {
 return CryptoJS['AES'].encrypt(message, pass).toString();
}
function AES_Decrypt(encryptedMessage,pass) {
 return CryptoJS['AES'].decrypt(encryptedMessage, pass).toString(CryptoJS.enc.Utf8);
}