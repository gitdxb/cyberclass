function Validation() {
    this.checkEmpty = function(inputVal, spanID, message) {
        // inputVal khác rỗng
        // trim() cắt các khoảng trắng
        if (inputVal.trim() != '') {
            // hợp lệ
            document.getElementById(spanID).innerHTML = '';
            document.getElementById(spanID).style.display = 'block';
            return true;
        }
        // không hợp lệ
        //điền câu thông báo lên UI
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = 'none';
        return false;
    }

    this.checkID = function(inputVal, spanID, message, mangSV){
        /**
         * Duyệt mảng
         *      so sánh mã của từng sv với inputVal
         *      nếu trung => thông lỗi => return false
         *      ngc lại => hợp lệ => return true
         */

        // some() => duyệt mảng, some(function(item(), index){}), return true/false
        var isExist = false;
        isExist = mangSV.some(function(sv, index){
            // return kết quả của biểu thức so sánh
            return sv.maSV === inputVal.replaceAll(' ','');
        });

        if(isExist) {
            // mã bị trùng
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = 'block';
            return false;
        } else {
            document.getElementById(spanID).innerHTML = '';
            document.getElementById(spanID).style.display = 'none';
            return true;
        }
    }

    this.checkName = function(inputVal, spanID, message) {
        var pattern = "^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$"

        if (inputVal.match(pattern)) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = '';
            document.getElementById(spanID).innerHTML = 'none';
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
}