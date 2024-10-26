const fs = require('fs'); // Import the File System module

const logToFile = (message) => {
    fs.appendFile('log.txt', message + '\n', (err) => {
        if (err) throw err;
    });
};

// const isPrime = (num) => {
//     console.log("num", num);
//     logToFile(`num: ${num}`);

//     if (num <= 1) {
//         logToFile(` 1st condition: ${num}`);
//         return false;
//     }
//     if (num === 2) {
//         logToFile(`2nd condition equal to 2: ${num}`);
//         return true;
//     }
//     if (num % 2 === 0) {
//         logToFile(` 3rd condition remainder is 0: ${num}`);
//         return false;
//     }

//     const limit = Math.sqrt(num); // calculate the square root of num


//     for (let i = 3; i <= limit; i++) { // check odd numbers up to the square root
//         if (num % i === 0) return false; // num is divisible by i, hence not prime
//     }

//     return true;
// }

// const separatePrimesAndNonPrimes = (limit) => {
//     const primes = [];
//     const nonPrimes = [];

//     for (let i = 1; i <= limit; i++) {
//         if (isPrime(i)) {
//             primes.push(i);
//         } else {
//             nonPrimes.push(i);
//         }
//     }

//     return { primes, nonPrimes };
// }

// // Run the function for numbers 1 to 100
// const limit = 100;
// const { primes, nonPrimes } = separatePrimesAndNonPrimes(limit);

// console.log("Prime numbers:", primes);
// console.log("Non-prime numbers:", nonPrimes);

const isPrime = (num) => {
    if (num <= 1) return false

    if (num === 2) return true;

    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }

    return true;
}

const separatePrimeNumberAndNonPrimeNumber = (value) => {
    let PrimeNumber = []
    let NonPrimenumber = [];

    for (let i = 0; i <= value; i++) {
        if (isPrime(i)) {
            PrimeNumber.push(i);
        } else {
            NonPrimenumber.push(i);
        }
    }
    return { PrimeNumber, NonPrimenumber }
}
const limit = 100;
const { PrimeNumber, NonPrimenumber } = separatePrimeNumberAndNonPrimeNumber(limit)

console.log("Prime", PrimeNumber);
console.log("Non Prime", NonPrimenumber);








