/**
 * Chứa các hàm xử lý tương tác UI
 */

// Global variable
// => dssv thể hiện DanhSachSinhVien là biến toàn cục
var dssv = new DanhSachSinhVien();
// Hàm rút gọn cú phát getElementByID
function getELE(id) {
    return document.getElementById(id);
}

// localStorage để khi load lại browser dữ liệu k bị biến mất
function setLocalStorage() {
    // localStorage: đối tượng có sẵn của JS giúp thao tác về local storage của browsers
    // JSON: đối tượng có sẵn của JS giúp chuỗi JSON
    // dữ liệu lưu trữ ở localStorage là kiểu JSON
    // chuyển từ Array => JSON

    // Khi mangSV thay đổi => gọi hàm setLocalStorage để cập nhật cho local
    localStorage.setItem('DSSV', JSON.stringify(dssv.mangSV));
}


function getLocalStorage() {
    // getItem => trả về dữ liệu JSON
    // JSON => Array
    // localStorage chỉ lưu ở truyền đang chạy ứng dụng
    // Kiểm tra xem browser có local Storage ko, ko có thì undefine, ko đc dùng như mảng
    if (localStorage.getItem('DSSV') != undefined){
        dssv.mangSV = JSON.parse(localStorage.getItem('DSSV'));
    }
    
    hienThiDS(dssv.mangSV);
}
getLocalStorage();
// Thêm sinh viên
function themSinhVien() {
    
    var maSV = getELE('txtMaSV').value;
    var tenSV = getELE('txtTenSV').value;
    var email = getELE('txtEmail').value;
    var password = getELE('txtPass').value;
    var ngaySinh = getELE('txtNgaySinh').value;
    var khoaHoc = getELE('khSV').value;
    var toan = getELE('txtDiemToan').value;
    var ly = getELE('txtDiemLy').value;
    var hoa = getELE('txtDiemHoa').value;
    console.log(maSV, tenSV, email, password, ngaySinh, khoaHoc, toan, ly, hoa);

    // tạo thể hiện của SinhVien
    var sv = new SinhVien(maSV, tenSV, email, password, ngaySinh, khoaHoc, Number(toan), Number(ly), Number(hoa));
    sv.tinhDTB();
    console.log(sv);

    // Thêm sv vào mangSV
    dssv.themSV(sv);
    //console.log(dssv.mangSV);

    // Gọi hàm hiển thị
    hienThiDS(dssv.mangSV);

    setLocalStorage();
}

/**
 * Input: mangSV
 * B1: Duyệt mảng để lấy ra từng đối tượng sv
 * B2: Tạo hàng tr cho từng sv
 * B3: Tạo từng td, đưa các thuộc tính của sv đặt vào td
 * B4: Đem tất cả các thẻ tr hiển thị lên UI
 * 
 * Output: Các thẻ tr để hiển thị trên html
 * + 1 thẻ tr là 1 sv
 * + từng td là từng thuộc tính của sv
 *  
 */
// Hiển thị danh sách sv
function hienThiDS(mangSV) {
    console.log('Mảng cần hiển thị ', mangSV);
    // map(): hàm giúp duyệt mảng => lấy ra từng phần tử của mảng ( cú pháp ngắn gọn)
    // ham1(ham2()) => callback function
    // function(){} => hàm ẩn danh anonymous function
    // map(phần tử của mảng, vị trí của phần tử)
    // Sau khi duyệt mảng => content = "<tr></tr><tr></tr><tr></tr>"
    var content = '';  // Giá trị ban đầu
    mangSV.map(function(sv, index){
        console.log(sv);
        // string template (template literal)
        // ${}: truyền biến vào cho chuỗi string template
        var trELE = `
            <tr>
                <td>${sv.maSV}</td>
                <td>${sv.tenSV}</td>
                <td>${sv.email}</td>
                <td>${sv.ngaySinh}</td>
                <td>${sv.khoaHoc}</td>
                <td>${sv.dtb}</td>
                <td>
                    <button class="btn btn-info" onclick="xemChiTiet('${sv.maSV}')">Xem</button>
                    <button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSV}')">Xóa</button>
                </td>
            </tr>
        `;
        //console.log(trELE);
        // content (sv1 + sv2) = content(sv1) + "<tr>sv2</tr>"
        content += trELE;
        
    });

   //console.log(content);
    getELE('tbodySinhVien').innerHTML = content;
}

/**
 * Xóa sv => xóa phần tử khỏi mảng
 * => tìm được vị trí (index) của phần tử cần xóa
 * => dựa vào maSV => để tìm kiếm sv
 * 
 * 
 */

function xoaSinhVien(ma) {
    console.log(ma);
    dssv.xoaSV(ma);
    hienThiDS(dssv.mangSV);
    setLocalStorage(dssv.mangSV);
}

/**
 * Cập nhật
 * + Xem thông tin
 * => Click button xem
 * => lấy thông tin của sv cần xem
 * => hiển thị thông tin sv
 * + Cập nhật
 * => edit thông tin cần sửa
 * => click button cập nhật
 * => lấy các giá trị từ form => lưu vào đối tượng sv
 * => tìm vị trí sv cần cập nhật => gán giá trị sv vào vị trí tìm thấy
 */
function xemChiTiet(ma) {
    console.log('xem',ma);
    var viTri = dssv.timViTri(ma);
    if(viTri > -1){
        // tìm thấy
        var svTim = dssv.mangSV[viTri];
        console.log(svTim);
        getELE('txtMaSV').value = svTim.maSV;
        getELE('txtMaSV').disabled = true;

        getELE('txtTenSV').value = svTim.tenSV;
        getELE('txtEmail').value = svTim.email;
        getELE('txtPass').value = svTim.password;
        getELE('txtNgaySinh').value = svTim.ngaySinh;
        getELE('khSV').value = svTim.khoaHoc;
        getELE('txtDiemToan').value = svTim.toan;
        getELE('txtDiemLy').value = svTim.ly;
        getELE('txtDiemHoa').value = svTim.hoa;

    }
}

function capNhatSinhVien(params) {
    var maSV = getELE('txtMaSV').value;
    var tenSV = getELE('txtTenSV').value;
    var email = getELE('txtEmail').value;
    var password = getELE('txtPass').value;
    var ngaySinh = getELE('txtNgaySinh').value;
    var khoaHoc = getELE('khSV').value;
    var toan = getELE('txtDiemToan').value;
    var ly = getELE('txtDiemLy').value;
    var hoa = getELE('txtDiemHoa').value;
    console.log(maSV, tenSV, email, password, ngaySinh, khoaHoc, toan, ly, hoa);

    // tạo thể hiện của SinhVien
    var sv = new SinhVien(maSV, tenSV, email, password, ngaySinh, khoaHoc, Number(toan), Number(ly), Number(hoa));
    sv.tinhDTB();
    console.log(sv);

    dssv.capNhatSV(sv);
    hienThiDS(dssv.mangSV);
    setLocalStorage();

}