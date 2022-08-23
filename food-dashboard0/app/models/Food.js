export default class Food{
    // phuong thuc khoi tao
    constructor(tenMon, loai, gia, phanTram, hinhAnh, moTa){
        // khai bao thuoc tinh
        this.tenMon = tenMon;
        this.loai = loai;
        this.gia = gia;
        this.phanTram = phanTram;
        this.giaSauKM = 0;
        this.tinhTrang = tinhTrang;
        this.hinhAnh = hinhAnh;
        this.moTa = moTa;
    }
    tinhKM(){
        // 100 - 20 = 80/100 => gia * 0.8
        this.giaSauKM = this.gia * (100 - this.phanTram)/100
    }
}