const fibseries = (n) => {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        console.log("i", i);
        console.log("fib[i-2]", fib[i - 2]);
        console.log("fib[i-1]", fib[i - 1]);
        console.log("fib[i] before update", fib);

        fib[i] = fib[i - 1] + fib[i - 2]
        console.log("fib[i]", fib[i]);
        console.log(fib);


    }
}

fibseries(6)
