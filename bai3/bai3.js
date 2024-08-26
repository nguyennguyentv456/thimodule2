
function tinhMang(arr, k) {
    let count = 0;

    // Duyệt tất cả các cặp số trong mảng
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) % k === 0) {
                count++;
            }
        }
    }

    return count;
}

// Hàm để nhập số lượng phần tử vào mảng
function nhapMang() {
    let n = parseInt(prompt("Nhập số lượng phần tử của mảng < 50:"));

    // Kiểm tra điều kiện n <= 50
    if (n <= 0 || n > 50) {
        console.log("Số lượng phần tử phải nằm trong khoảng từ 1 đến 50 là:");
        return [];
    }

    let arr = [];
    for (let i = 0; i < n; i++) {
        let value = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
        arr.push(value);
    }

    return arr;
}

// Hàm để nhập số nguyên dương k
function nhapK() {
    let k = parseInt(prompt("Nhập số nguyên dương k:"));

    // Kiểm tra điều kiện k phải dương
    if (k <= 0) {
        
        alert('so k ko pải số nguyên dương')
        return 1; // Trả về giá trị mặc định để tránh lỗi
    }

    return k;
}

// Chạy các hàm
let mang = nhapMang(); // Nhập mảng
let k = nhapK(); // Nhập giá trị k

// Kiểm tra mảng và k
if (mang.length > 0 && k > 0) {
    let result = tinhMang(mang, k); // Đếm số lượng cặp số thỏa mãn
    alert("Số lượng cặp số có tổng chia hết cho k là:"  + result );
   // Hiển thị kết quả
}