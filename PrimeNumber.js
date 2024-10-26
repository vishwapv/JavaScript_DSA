const PrimeNumber = (n) => {


    let flag = true;

    if (n < 2) {
        console.log("Value is below 2");
        return

    }

    for (let i = 2; i < n; i++) {



        if (n % i === 0) {

            flag = false;

            break;
        }

    }
    if (flag) {
        console.log(n, "this is prime number");

    } else {
        console.log(n, "This is not a prime number");

    }
}
PrimeNumber(5);