const crypto = require('crypto');

export const Aes128EcbEncrypt = (text: string, key: string): string => {
  const cipher = crypto.createCipheriv('aes-128-ecb', key, '');
  let crypted = cipher.update(text, 'utf8', 'base64');
  crypted += cipher.final('base64');
  return crypted as string;
};

export const Aes128EcbDecrypt = (data: string, key: string): string => {
  const decipher = crypto.createDecipheriv('aes-128-ecb', key, '');
  let decoded = decipher.update(data, 'base64', 'utf8');
  decoded += decipher.final('utf8');
  return decoded as string;
};

export const Aes192EcbEncrypt = (text: string, key: string): string => {
  const cipher = crypto.createCipheriv('aes-192-ecb', key, '');
  let crypted = cipher.update(text, 'utf8', 'base64');
  crypted += cipher.final('base64');
  return crypted as string;
};

export const Aes192EcbDecrypt = (data: string, key: string): string => {
  const decipher = crypto.createDecipheriv('aes-192-ecb', key, '');
  let decoded = decipher.update(data, 'base64', 'utf8');
  decoded += decipher.final('utf8');
  return decoded as string;
};

export const Aes256EcbEncrypt = (text: string, key: string): string => {
  const cipher = crypto.createCipheriv('aes-256-ecb', key, '');
  let crypted = cipher.update(text, 'utf8', 'base64');
  crypted += cipher.final('base64');
  return crypted as string;
};

export const Aes256EcbDecrypt = (data: string, key: string): string => {
  const decipher = crypto.createDecipheriv('aes-256-ecb', key, '');
  let decoded = decipher.update(data, 'base64', 'utf8');
  decoded += decipher.final('utf8');
  return decoded as string;
};
