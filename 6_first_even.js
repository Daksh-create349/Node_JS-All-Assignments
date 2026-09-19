function findFirstEven(arr) {
    let i = 0;

    do {
        if (arr[i] % 2 !== 0) {
            i++;
            continue;
        }

        return arr[i];
    } while (i < arr.length);

    return null;
}

console.log(findFirstEven([1, 3, 7, 8, 9, 10]));