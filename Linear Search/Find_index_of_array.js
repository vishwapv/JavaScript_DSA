let n = [34, 12, 25, 66, 53, 32]
function linear(num) {
    console.log("inside", num);
    console.log("n", n);


    return n.indexOf(num);
}

console.log("index", linear(12));

function linearArray(num) {
    index = -1
    n.map((element, i) => {
        if (element === num) {
            index = i;
        }

    })

    return index
}

console.log(`index of number ${12}`, linearArray(13));

function linearFor(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {

            return i;
        }

    }
    return -1;
}

console.log("linear search", linearFor([5, 3, 2, 6, 7], 7))
console.log("linear search", linearFor([5, 3, 2, 6, 7], 6))
console.log("linear search", linearFor([5, 3, 2, 6, 7], 5))

