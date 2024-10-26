function resucursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, left, right) {
    if (left > right) {
        return -1;
    }
    let mid = Math.floor((left + right) / 2);
    console.log("mid elememt", mid);
    if (target === arr[mid]) {
        return mid;

    }
    if (target < arr[mid]) {
        return search(arr, target, left, mid - 1)
    } else {
        return search(arr, target, mid + 1, right)
    }


}
console.log("recursiveBinarySearch", resucursiveBinarySearch([-5, 2, 3, 4, 5, 6], 6));
