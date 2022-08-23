function Validation() {
  this.checkEmpty = function (inputVal, spanID, message) {
    // inputVal khác rỗng
    // trim() xoá khoảng trắng phía trước và sau
    // "   ab " => "   ab ".trim() => "ab"
    if (inputVal.trim() != "") {
      // hợp lệ
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      return true;
    }
    // không hợp lệ
    // điền câu thông báo lên UI
    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";
    return false;
  };
  this.checkID = function (inputVal, spanID, message, mangSV) {
    /**
     * Lấy từng phần tử của mangSV, để so sánh inputVal xem có trùng mã SV ko, nếu trùng thì thông báo lỗi, ko thì hợp lệ
     */
    // some() (ES6) => có chức năng duyệt mảng (chạy vòng lặp) (funct (item(sv), index){}) => kết quả trả về true/false
    // giả sử mã chưa tồn tại (isExist = false)
    var isExist = false;
    isExist = mangSV.some(function (sv, index) {
      // return kết quả của biểu thức so sánh
      return sv.maSV === inputVal.replaceAll(" ", ""); // thay thế loại " " sang ""
    });

    if (isExist) {
      // mã bị trùng => dữ liệu không hợp lệ
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;
    } else {
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      return true;
    }
  };

  this.checkName = function (inputVal, spanID, message) {
    var pattern =
      /^[a-z  A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;

    if (inputVal.match(pattern)) {
      // hợp lệ
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      return true;
    } else {
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;
    }
  };

  this.checkEmail = function (inputVal, spanID, message) {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputVal.match(pattern)) {
      // hợp lệ
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      return true;
    } else {
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;
    }
  };

  this.checkPass = function (inputVal, spanID, message) {
    var pattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/;

    if (inputVal.match(pattern)) {
      // hợp lệ
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      return true;
    } else {
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;
    }
  };

  this.checkScore = function (inputVal, spanID, message) {
    var pattern = /^(\d{1,2}(\.\d{1,2})?)$/;

    if (inputVal.match(pattern) && inputVal <= 10) {
      // hợp lệ
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      return true;
    } else {
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;
    }
  };

  this.checkDropDown = function (selectID, spanID, message) {
    // chọn option vị trí đầu tiên, là vị trí 0
    var indexOption = document.getElementById(selectID).selectedIndex;
    if (indexOption != 0) {
      // hợp lệ
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      return true;
    }
    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";
    return false;
  };
  
}
