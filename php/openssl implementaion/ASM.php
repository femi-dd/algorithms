<?php

class ASM
{
    private $keys;
    private $public_key;
    private $private_key;

    public function __construct($generate_new_keys = false)
    {
        if ($generate_new_keys) {
            $keys = openssl_pkey_new([
                'private_key_bits' => 1024,
                'digest_alg' => 'sha512',
            ]);

            openssl_pkey_export($keys, $this->private_key);

            $this->public_key = openssl_pkey_get_details($keys)['keys'];
        }
    }

    public function getPublicKey()
    {
        return $this->public_key;
    }

    public function getPrivateKey()
    {
        return $this->private_key;
    }

    public function encrypt($data_to_encrypt, $user_public_key)
    {
        if (!$data_to_encrypt || $data_to_encrypt == null) {
            throw new Exception('Data to encrypt cannot be null or empty.');
        }

        if (!$user_public_key || $user_public_key == null) {
            throw new Exception('Public key cannot be null or empty.');
        }

        openssl_public_encrypt($data_to_encrypt, $encrypted_data, $user_public_key);
        return $encrypted_data;
    }

    public function decrypt($data_to_decrypt, $user_private_key)
    {
        if (!$data_to_decrypt || $data_to_decrypt == null) {
            throw new Exception('Data to decrypt cannot be null or empty.');
        }

        if (!$user_private_key || $user_private_key == null) {
            throw new Exception('Private key cannot be null or empty.');
        }

        openssl_private_decrypt($data_to_decrypt, $decrypted_data, $this->private_key);
        return $decrypted_data;
    }
}
