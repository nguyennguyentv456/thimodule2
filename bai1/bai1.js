let numbers = [];


function addElementsToArray() {
    let numElements = prompt("Nhập số lượng phần tử trong mảng (tối đa 20):");

    numElements = parseInt(numElements);


    if (numElements > 20) {
        console.log("Số lượng phần tử không được vượt quá 20.");
        return;
    }


    for (let i = 0; i < numElements; i++) {
        let value = prompt(`Nhập phần tử thứ ${i + 1}:`);
        numbers.push(parseInt(value));
    }
}


function displayArray(arr) {
    console.log("Mảng các số nguyên:", arr);
}


function calculateSumOfMultiples(arr) {
    let sum = 0;


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}


addElementsToArray();
displayArray(numbers);
let sum = calculateSumOfMultiples(numbers);
console.log("Tổng các số là bội chung của 3 và 5 là:", sum); // Hiển thị tổng