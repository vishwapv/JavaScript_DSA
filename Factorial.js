const factorial = (n) => {
    let factorial = 1;
    for (let index = n; index > 0; index--) {
        // console.log('index', index)
        // 4*3
        factorial = factorial * index;


    }
    console.log("factorial", factorial);
}

factorial(5)

function Factorial(n) {
    console.log("logs", n);

    if (n === 0) {
        return 1;

    } else {
        return n * Factorial(n - 1)
    }



}
console.log(Factorial(2));
