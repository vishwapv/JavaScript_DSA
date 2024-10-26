const PowerOfTwo = (num) => {
    let counter = num;

    // Check if the input is less than 1 (not a power of two)
    if (counter < 1) {
        console.log("The number must be greater than 0.");
        return;
    }

    // Continue dividing by 2 while counter is greater than 1
    while (counter > 1) {
        console.log(`Current value: ${counter}`);

        if (counter % 2 !== 0) { // Check if counter is not divisible by 2
            console.log(`The number ${num} is not a power of two.`);
            return; // Exit the function
        }

        counter = counter / 2; // Divide counter by 2
        console.log(`Value after division: ${counter}`);

        if (counter === 1) { // Break the loop if counter becomes 1
            console.log(`Counter reached 1, breaking the loop.`);
            break; // Exit the loop
        }
    }

    // Final check to confirm if counter was exactly 1
    if (counter === 1) {
        console.log(`${num} is a power of two.`);
    } else {
        console.log(`${num} is not a power of two.`);
    }
}

// Example Usage
const numbersToCheck = [1, 2, 3, 4, 5, 8, 10, 16, 18, 32];
numbersToCheck.forEach(num => {
    console.log(`Checking if ${num} is a power of two:`);
    PowerOfTwo(num);
});
