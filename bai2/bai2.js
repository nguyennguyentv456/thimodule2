function nhapDiem() {
    // Yêu cầu người dùng nhập điểm số
    let score = prompt("Nhập điểm số của sinh viên (0-100):");
    
    // Chuyển đổi giá trị nhập vào thành số nguyên
    score= parseInt(score, 10);

    // Kiểm tra điều kiện điểm số hợp lệ
    if (isNaN(score) || score < 0 || score> 100) {
        alert("Điểm số không hợp lệ. Vui lòng nhập một số trong khoảng từ 0 đến 100.");
        return; // Kết thúc hàm nếu điểm số không hợp lệ
    }

    // Gọi hàm làm tròn điểm và hiển thị kết quả
    let newScore = roundGrade(score);
    alert(`Điểm số sau khi làm tròn là: ${newScore }`);
}

// Hàm làm tròn điểm số theo quy tắc của giáo viên Trung
function roundGrade(score) {
    if (score < 48) {
        alert('trượt');
    }else{
        alert('Đậu')

    }

    

    
    

    return score ;
}

// Gọi hàm để nhập điểm số
nhapDiem();