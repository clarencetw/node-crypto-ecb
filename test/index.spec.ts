import {
  Aes128EcbEncrypt,
  Aes128EcbDecrypt,
  Aes192EcbEncrypt,
  Aes192EcbDecrypt,
  Aes256EcbEncrypt,
  Aes256EcbDecrypt,
} from '../src';

describe('crypto', () => {
  describe('AES 128', () => {
    it('Aes128EcbEncrypt', () => {
      const message = 'Hello';
      const encryptMessage = '7lY96qrrasdHvXz/HSf8qA==';

      const result = Aes128EcbEncrypt(message, 'secretkey16bytes');

      expect(result).toMatch(encryptMessage);
    });

    it('Aes128EcbDecrypt', () => {
      const message = 'Hello';
      const encryptMessage = '7lY96qrrasdHvXz/HSf8qA==';

      const result = Aes128EcbDecrypt(encryptMessage, 'secretkey16bytes');

      expect(result).toMatch(message);
    });

    it('Aes128EcbEncrypt to Aes128EcbDecrypt', () => {
      const message = 'Hello';

      const encryptMessage = Aes128EcbEncrypt(message, 'secretkey16bytes');
      const result = Aes128EcbDecrypt(encryptMessage, 'secretkey16bytes');

      expect(result).toMatch(message);
    });
  });

  describe('AES 192', () => {
    it('Aes192EcbEncrypt', () => {
      const message = 'Hello';
      const encryptMessage = 'uywTZfTOKUtsTvbLOyZi5g==';

      const result = Aes192EcbEncrypt(message, 'secretkeysecretkey24byte');

      expect(result).toMatch(encryptMessage);
    });

    it('Aes192EcbDecrypt', () => {
      const message = 'Hello';
      const encryptMessage = 'uywTZfTOKUtsTvbLOyZi5g==';

      const result = Aes192EcbDecrypt(
        encryptMessage,
        'secretkeysecretkey24byte'
      );

      expect(result).toMatch(message);
    });

    it('Aes192EcbEncrypt to Aes192EcbDecrypt', () => {
      const message = 'Hello';

      const encryptMessage = Aes192EcbEncrypt(
        message,
        'secretkeysecretkey24byte'
      );
      const result = Aes192EcbDecrypt(
        encryptMessage,
        'secretkeysecretkey24byte'
      );

      expect(result).toMatch(message);
    });
  });

  describe('AES 256', () => {
    it('Aes256EcbEncrypt', () => {
      const message = 'Hello';
      const encryptMessage = '8rXwdxgf53UJPhSZYy60Ig==';

      const result = Aes256EcbEncrypt(
        message,
        'secretkey16bytessecretkey16bytes'
      );

      expect(result).toMatch(encryptMessage);
    });

    it('Aes256EcbDecrypt', () => {
      const message = 'Hello';
      const encryptMessage = '8rXwdxgf53UJPhSZYy60Ig==';

      const result = Aes256EcbDecrypt(
        encryptMessage,
        'secretkey16bytessecretkey16bytes'
      );

      expect(result).toMatch(message);
    });

    it('Aes256EcbEncrypt to Aes256EcbDecrypt', () => {
      const message = 'Hello';

      const encryptMessage = Aes256EcbEncrypt(
        message,
        'secretkey16bytessecretkey16bytes'
      );
      const result = Aes256EcbDecrypt(
        encryptMessage,
        'secretkey16bytessecretkey16bytes'
      );

      expect(result).toMatch(message);
    });
  });
});
