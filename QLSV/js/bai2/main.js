/**
 * Chứa các hàm xử lý tương tác UI
 */

// Global variable
// => dssv thể hiện DanhSachSinhVien là biến toàn cục
var dssv = new DanhSachSinhVien();
var validation = new Validation();
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
  localStorage.setItem("DSSV", JSON.stringify(dssv.mangSV));
}

function getLocalStorage() {
  // getItem => trả về dữ liệu JSON
  // JSON => Array
  // localStorage chỉ lưu ở truyền đang chạy ứng dụng
  // Kiểm tra xem browser có local Storage ko, ko có thì undefine, ko đc dùng như mảng
  if (localStorage.getItem("DSSV") != undefined) {
    dssv.mangSV = JSON.parse(localStorage.getItem("DSSV")); // parse() đổi json về mảng, JSON để backend có thể đọc
  }

  hienThiDS(dssv.mangSV);
}
getLocalStorage();
// Thêm sinh viên
function themSinhVien() {
  var maSV = getELE("txtMaSV").value;
  var tenSV = getELE("txtTenSV").value;
  var email = getELE("txtEmail").value;
  var password = getELE("txtPass").value;
  var ngaySinh = getELE("txtNgaySinh").value;
  var khoaHoc = getELE("khSV").value;
  var toan = getELE("txtDiemToan").value;
  var ly = getELE("txtDiemLy").value;
  var hoa = getELE("txtDiemHoa").value;
  //console.log(maSV, tenSV, email, password, ngaySinh, khoaHoc, toan, ly, hoa);

  var isValid = true;
  // Các bước kiểm tra dữ liệu
  /**
   * Issue: tên sv có value, mã sv ko có value => vẫn cho thêm sinh viên
   * Expected: chỉ được thêm sv khi tất cả các dữ liệu đều hợp lệ
   * Nếu có 1 dữ liệu không hợp lệ => thông báo + ko được thêm sv
   * Root cause: do dấu = (gán) => chỉ giữ lại kt kết quả cuối cùng, các kết quả trước ghi đè mất
   *
   * Solution:
   * C1: &&:so sánh true/false => checkMa && checkTen => false && true => false => khó đọc khi chỉnh sửa
   * C2: tách các bước kiểm tra => dễ đọc code
   * &: tính toán binary , true 1, false 0
   * => checkMa & checkTen => 0 & 1 => 0
   * isValid(cuoi cùng) = isValid & checkEmpty
   * => isValid(cuối cùng) &= checkEmpty
   */
  isValid &= validation.checkEmpty(maSV,"spanMaSV","Mã SV không được để trống") && validation.checkID(maSV,"spanMaSV","Mã SV không được trùng", dssv.mangSV);

  // tên sv (kiểm tra rỗng, kiểm tra ký tự chữ)
  isValid &= validation.checkEmpty(
    tenSV,
    "spanTenSV",
    "Tên SV không được để trống"
  ) && validation.checkName(
    tenSV,
    "spanTenSV",
    "Tên SV chỉ chứa ký tự chữ"
  );

  // Email SV (kiểm tra rỗng, kiểm tra format email)
  isValid &= validation.checkEmpty(
    email,
    "spanEmailSV",
    "Email không được để trống"
  ) && validation.checkEmail(email, "spanEmailSV", "Email chưa đúng định dạng");

  // Password (kiểm tra rỗng, kiểm tra format)
  // isValid &= validation.checkEmpty(
  //   password,
  //   "spanMatKhau",
  //   "Mật khẩu không được để trống"
  // ) && validation.checkEmail(password, "spanMatKhau", "Mật khẩu chưa đúng định dạng");

    // Điểm Toán (kiểm tra rỗng và định dạng số, điểm  lớn hơn 0, nhỏ hơn 10)
    isValid &= validation.checkEmpty(
        toan,
        "spanToan",
        "Điểm không được để trống"
      ) && validation.checkScore(toan, "spanToan", "Điểm chưa đúng định dạng");

    // Điểm Lý (kiểm tra rỗng và định dạng số, điểm  lớn hơn 0, nhỏ hơn 10)
    isValid &= validation.checkEmpty(
        ly,
        "spanLy",
        "Điểm không được để trống"
      ) && validation.checkScore(ly, "spanLy", "Điểm chưa đúng định dạng");

    // Điểm Hoá (kiểm tra rỗng và định dạng số, điểm  lớn hơn 0, nhỏ hơn 10)
    isValid &= validation.checkEmpty(
        hoa,
        "spanHoa",
        "Điểm không được để trống"
      ) && validation.checkScore(hoa, "spanHoa", "Điểm chưa đúng định dạng");
    
      // Khoá học (người dùng có chọn các lựa chọn khác cái đầu tiên không)
      isValid &= validation.checkDropDown("khSV","spanKhoaHoc", "Khoá học chưa được chọn"); 
  if (isValid) {
    // tất cả dữ liệu hợp lệ
    // tạo thể hiện của SinhVien
    var sv = new SinhVien(
      maSV,
      tenSV,
      email,
      password,
      ngaySinh,
      khoaHoc,
      Number(toan),
      Number(ly),
      Number(hoa)
    );
    sv.tinhDTB();
    console.log(sv);

    // Thêm sv vào mangSV
    dssv.themSV(sv);
    //console.log(dssv.mangSV);

    // Gọi hàm hiển thị
    hienThiDS(dssv.mangSV);

    setLocalStorage();

    // thêm sv thì reset form để cái input đc trống
    resetForm();
  }
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
  //console.log("Mảng cần hiển thị ", mangSV);
  // map(): hàm giúp duyệt mảng => lấy ra từng phần tử của mảng ( cú pháp ngắn gọn)
  // ham1(ham2()) => callback function
  // function(){} => hàm ẩn danh anonymous function
  // map(phần tử của mảng, vị trí của phần tử)
  // Sau khi duyệt mảng => content = "<tr></tr><tr></tr><tr></tr>"
  var content = ""; // Giá trị ban đầu
  mangSV.map(function (sv, index) {
    //console.log(sv);
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
  getELE("tbodySinhVien").innerHTML = content;
}

/**
 * Xóa sv => xóa phần tử khỏi mảng
 * => tìm được vị trí (index) của phần tử cần xóa
 * => dựa vào maSV => để tìm kiếm sv
 *
 *
 */

function xoaSinhVien(ma) {
  //console.log(ma);
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
  //console.log("xem", ma);
  var viTri = dssv.timViTri(ma);
  if (viTri > -1) {
    // tìm thấy
    var svTim = dssv.mangSV[viTri];
   // console.log(svTim);
    getELE("txtMaSV").value = svTim.maSV;
    getELE("txtMaSV").disabled = true;

    getELE("txtTenSV").value = svTim.tenSV;
    getELE("txtEmail").value = svTim.email;
    getELE("txtPass").value = svTim.password;
    getELE("txtNgaySinh").value = svTim.ngaySinh;
    getELE("khSV").value = svTim.khoaHoc;
    getELE("txtDiemToan").value = svTim.toan;
    getELE("txtDiemLy").value = svTim.ly;
    getELE("txtDiemHoa").value = svTim.hoa;
  }
}

function capNhatSinhVien() {
  var maSV = getELE("txtMaSV").value;
  var tenSV = getELE("txtTenSV").value;
  var email = getELE("txtEmail").value;
  var password = getELE("txtPass").value;
  var ngaySinh = getELE("txtNgaySinh").value;
  var khoaHoc = getELE("khSV").value;
  var toan = getELE("txtDiemToan").value;
  var ly = getELE("txtDiemLy").value;
  var hoa = getELE("txtDiemHoa").value;
  //console.log(maSV, tenSV, email, password, ngaySinh, khoaHoc, toan, ly, hoa);

  // tạo thể hiện của SinhVien
  var sv = new SinhVien(
    maSV,
    tenSV,
    email,
    password,
    ngaySinh,
    khoaHoc,
    Number(toan),
    Number(ly),
    Number(hoa)
  );
  sv.tinhDTB();
  //console.log(sv);

  dssv.capNhatSV(sv);
  hienThiDS(dssv.mangSV);
  setLocalStorage();

  resetForm(); // cập nhật 1 sv mới xong thì clear cái form
}

function resetForm() {
  // chỉ dùng với thẻ form => clear các giá trị ở trên form , giúp user nhập info mới
  getELE("formQLSV").reset();

  // xoá song mã SV vẫn ko sửa được ,nên phải tắt chế độ disbaled
  getELE("txtMaSV").disabled = false;
}

function timKiemTheoTen() {
  var tuKhoa = getELE('txtSearch').value;
  var mangTK = dssv.timKiem(tuKhoa.replaceAll(' ', ''));

  hienThiDS(mangTK);
}

// tìm kiếm khi click button search
getELE("btnSearch").onclick = timKiemTheoTen;

// onkeypress(khi đang đè phím), onkeydown (khi mới nhấn phím), onkeyup (bỏ tay rời khỏi phím)
// => chỉ nên dùng khi dữ liệu tìm kiếm ít, nên dùng với chức năng validation
getELE('txtSearch').onkeyup = timKiemTheoTen;