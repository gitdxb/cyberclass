/**
 * OOP: lập trình hướng đối tượng
 * các mô hình tổ chức code liên về class
 * + kế thừa
 * + đa hình (dựa trên tính kế thừa)
 * + đóng gói (bảo mật, quyền truy xuất thuộc tính và phương thức(private, public, protected))
 * + trừu tượng (interface,...)
 */

/* ------------- Kế thừa --------------- */
/**
 * Chuyến xe nội thành
 * Chuyến xe ngoại thành
 */
class ChuyenXeNoiThanh{
    // phuong thuc khoi tao
    constructor(maXe, tenTaiXe, soXe, soTuyen, soKM, doanhThu){
        this.maXe = maXe;
        this.tenTaiXe = tenTaiXe;
        this.soXe = soXe;
        this.soTuyen = soTuyen;
        this.soKM = soKM;
        this.doanhThu = doanhThu;
    }

    showInfo = () => {
        console.log(this.maXe, this.soXe);
    }
}

let noiThanh = new ChuyenXeNoiThanh("xe001", "Nguyen Van A", "GH001", "18", 50, 1000);
noiThanh.showInfo();

class ChuyenXeNgoaiThanh{
    // phuong thuc khoi tao
    constructor(maXe, tenTaiXe, soXe, noiDen, soNgay, doanhThu){
        this.maXe = maXe;
        this.tenTaiXe = tenTaiXe;
        this.soXe = soXe;
        this.noiDen = noiDen;
        this.soNgay = soNgay;
        this.doanhThu = doanhThu;
    }

    showInfo = () => {
        console.log(this.maXe, this.soXe);
    }
}

let ngoaiThanh = new ChuyenXeNgoaiThanh("xe002", "Nguyen Van C", "GH002", "18", 3, 2000);
ngoaiThanh.showInfo();


// hệ thống mở rộng, xe taxi, tàu, xedulich


// Tạo parent class - chứa các thuộc tính chung, phương thức chung
// Tạo child class - chứa các thuộc tính riêng, phương thức riêng

class ChuyenXe{
    constructor(maXe, tenTaiXe, soXe, doanhThu){
        this.maXe = maXe;
        this.tenTaiXe = tenTaiXe;
        this.soXe = soXe;
        this.doanhThu = doanhThu;
    }

    showInfo = () => {
        console.log(this.maXe, this.soXe);
    }
}

class NoiThanh extends ChuyenXe{
    // phương thức khoẻi tạo của child class
    // method overriding (ghi đè): phương thức của con trùng tên với cha (class con sẽ ko kế thừa từ cha, class con đè lên cha)
    constructor(maXe, tenTaiXe, soXe, doanhThu, soTuyen, soKM){
        // super giữ lại các kế thừa từ cha
        super(maXe, tenTaiXe, soXe, doanhThu)
        // thuộc tính riêng
         this.soTuyen = soTuyen;
         this.soKM = soKM;
     }
     //method overriding (ghi đè)
     showInfo = () => {
        console.log(this.maXe, this.tenTaiXe);
        console.log(this.soTuyen, this.soKM);
     }
}

let nThanh = new NoiThanh("xe003", "Nguyen Van A", "GH003", 1000, 18, 50);
nThanh.showInfo();

class NgoaiThanh extends ChuyenXe{
    
}

let ngThanh = new NoiThanh("xe004", "Nguyen Van D", "GH004", 5000);
ngThanh.showInfo();