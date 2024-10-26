function BinarrySearch(arr, target) {
    console.log("in side the function", arr, target);

    let left = 0;
    let right = arr.length - 1; //6
    console.log("right ", right);

    let mid = 0; //3 

    while (left <= right) {
        console.log("while :" + left + " <=", right);

        //0 < = 6




        mid = Math.floor(left + right) / 2;
        // 0+ 3 = 3
        console.log("mid value", mid);



        if (arr[mid] === target) {
            console.log("mid_$$$target", target + "===" + "arr_of _mid", arr[mid]);
            // 4 === 6
            return mid;

        }
        if (target < arr[mid]) {
            console.log("****** if value is greater then mid value****");

            console.log("target", target + "<" + "arr_of _mid", arr[mid]);
            // 2 < 4


            right = mid - 1
            console.log(mid + "- " + 1 + " =", right);
            // 3-1 = 2
        } else {
            left = mid + 1;
            // 3 + 1 = 4
        }
    }
    return -1
}

console.log("Binary Search", BinarrySearch([-10, 20, 30, 40, 50, 60, 70], 70));
