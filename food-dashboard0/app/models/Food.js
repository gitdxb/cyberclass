// function Food(tenMon){
//     this.tenMon = tenMon;
//     this.tinhKM = function(){}
// }
// export => không được đổi tên khi import
// export default => được đổi tên khi import

export default class Food{
    //phương thức khởi tạo
    constructor(tenMon,loai,gia,phanTram,tinhTrang,hinhAnh,moTa){
        //khai báo thuộc tính
        this.tenMon = tenMon;
        this.loai = loai;
        this.gia=gia;
        this.phanTram =phanTram;
        this.giaSauKM =0;
        this.tinhTrang =tinhTrang;
        this.hinhAnh = hinhAnh;
        this.moTa = moTa;
    }                          
    tinhKM = () =>{
        // 100 - 20 = 80/100 => gia * 0.8
        this.giaSauKM = this.gia * (100 - this.phanTram)/100;
    }
}
