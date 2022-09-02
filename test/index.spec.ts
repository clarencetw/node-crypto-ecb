import { Aes256EcbEncrypt, Aes256EcbDecrypt } from '../src';

describe('crypto', () => {
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
