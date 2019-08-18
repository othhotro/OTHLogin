the library's project key: MVSHS0iAyLWHNP21Zs64025vR-LGfXSzB

Usage: CryptoJS (version 2)


AES_Decrypt(Object encryptedMessage, Object pass)
Arguments:
Name	Type	Description
encryptedMessage	Object	
pass	Object	

AES_Encrypt(Object message, Object pass)
Arguments:
Name	Type	Description
message	Object	
pass	Object


Example:
function myFunction() {
  Logger.log(CryptoJS.AES_Encrypt('Thử code CryptoJS', 'ongtrieuhau'));
  Logger.log(CryptoJS.AES_Decrypt('U2FsdGVkX1/oEZq4XP+BZw/kjK+QEaq7M6ysUf+5Yung1K5Ce7OP/issOCmLMFXU', 'ongtrieuhau'));
}
