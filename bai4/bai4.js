 // Mảng để lưu trữ khách hàng
 let customers = [];

 // Hàm thêm khách hàng
 function addCustomer() {
     let id = document.getElementById('customerId').value;
     let name = document.getElementById('customerName').value;
     let phone = document.getElementById('phone').value;
     let address = document.getElementById('address').value;
     let email = document.getElementById('email').value;

     // Kiểm tra nếu tất cả các thông tin đều có giá trị
     if (id && name && phone && address && email) {
         let customer = {
             id: id,
             name: name,
             phone: phone,
             address: address,
             email: email
         };

         // Thêm khách hàng vào mảng
         customers.push(customer);

         // Cập nhật bảng khách hàng
         updateCustomerTable();

         // Xóa thông tin đã nhập
         document.getElementById('customerId').value = '';
         document.getElementById('customerName').value = '';
         document.getElementById('phone').value = '';
         document.getElementById('address').value = '';
         document.getElementById('email').value = '';
     } else {
         alert('Vui lòng nhập đầy đủ thông tin.');
     }
 }

 // Hàm cập nhật bảng khách hàng
 function updateCustomerTable() {
     let tableBody = document.getElementById('customerTable').getElementsByTagName('tbody')[0];
     tableBody.innerHTML = '';

     customers.forEach(customer => {
         let row = tableBody.insertRow();
         row.insertCell(0).innerText = customer.id;
         row.insertCell(1).innerText = customer.name;
         row.insertCell(2).innerText = customer.phone;
         row.insertCell(3).innerText = customer.address;
         row.insertCell(4).innerText = customer.email;
     });
 }