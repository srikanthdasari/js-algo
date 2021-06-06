

/*
    1. Select two (usually large) prime numbers, p and q.
        a.   The product of p and q is denoted as n.
        b.    The product of (p-1) and (q-1) is denoted as phi.
    2. Choose two exponents, e and d.
        a.     e is typically 3. Other values greater than 2 can be used.
        b.     d is a value such that (e × d) % phi = 1.



    Encryption process is as shown:
        m - message:
        m^e % n = c
        c - encrypted message
    Decryption process is as shown:
        c^d % n = m

*/

const prime = require('./prime1');

const modInverse = (e, phi) => {
    var m0 = phi, t, q;
    var x0 = 0, x1 = 1;

    if (phi === 1) {
        return 0;
    }

    while (e > 1) {
        // q is quotient
        q = Math.floor(e / phi);

        t = phi;

        // phi is remainder now, process same as
        // Euclids algo

        phi = e % phi, e = t;

        t = x0;
        x0 = x1 - q * x0;
        x1 = t;
    }

    if (x1 < 0) {
        x1 += m0;
    }

    return x1;
}

// console.log(modInverse(7, 40)); //23


const RSAKeyPair = (p, q) => {
    // Need to check they are primes

    if (!prime.isPrime(p) && !prime.isPrime(q)) {
        return;
    }

    if (p === q) {
        return;
    }

    var n = p * q,
        phi = (p - 1) * (q - 1),
        e = 3,
        d = modInverse(e, phi);

    // Public Key: [e,n], Private key : [d,n]
    return [[e, n], [d, n]]
}

console.log(RSAKeyPair(5, 11)); //[ [ 3, 55 ], [ 27, 55 ] ]

/*
    Let’s pick 5 and 11 as the primes and see an example where message is 50.
    RSAKeyPair(5,11); //Public key: [3,55], Private key: [27,55]

    p = 5, 11
    n = p x q = 55
    phi = (5-1) x (11-1) = 4 x 10 = 40
    e = 3(e x d) % phi = 1 (3 x d) % 40 = 1
    (81) % 40 = 1. 81 = 3 x d = 3 x 27
    d = 27

    Encryption:
        m- message: 50
        m^e % n = c
        50^3 % 55 = 40
    Encrypted message.,c:
        40
    Decryption:c^d % n = m
    40^27 % 55 = 50

    This fully encrypts 50, and the receiver can decrypt that back to 50. Typically the prime numbers chosen are very large for the RSA algorithm

*/