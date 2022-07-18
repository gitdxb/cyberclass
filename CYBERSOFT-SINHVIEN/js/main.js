/**
 * Lấy điểm tb lưu vào mảng điẻm
 * Danh sach sv trên 5
 * Dem SV Gioi
 * Tìm kiếm SV diem cao nhat/ thap nhat
 * Sắp xêp điểm tăng dần
 */
//mảng dtb
var dtb = []
function layDTB() {
    var tdELE = document.querySelectorAll(".td-scores");
    for (var i = 0; i < tdELE.length; i++) {
        // lay noi dung cua the html
        var num = Number(tdELE[i].innerHTML);
        dtb.push(num);
    }
}

layDTB();
console.log(dtb);
/**
 * Dem SV gioi
 * input: mảng dtb,
 * loaiSV (hàm xếp loại)
 * 
 * Các bước xử lý
 * + xếp loại SV (ham xepLoai(dtb) => return loai(giỏi, khá, tb))
 * + so sánh loaiSV => đếm sv loại giỏi
 * 
 * Output:
 * soSVGioi
 */
 function xepLoai(dtb) {
    //dtb của 1 sinh viên
    if (9 <= dtb && dtb <= 10) {
        return "Gioi";
    } else if (7<= dtb && dtb < 9) {
        return "Kha";
    } else if (0 <= dtb && dtb < 7) {
        return "TB";
    } else {
        return "";
    }
}
function DemSVGioi() {
    var countGioi = 0;
    for (var i = 0; i < dtb.length; i++){
        // lấy từng điểm trung bình và đem từng điểm đi xếp loại
        console.log(dtb[i]);
        var loai = xepLoai(dtb[i]);
        console.log(loai);
        if (loai == "Gioi") {
            countGioi++;
        } 
    }
    console.log(countGioi);
    document.querySelector('#soSVGioi').innerHTML = countGioi;
}
document.querySelector('#btnSoSVGioi').onclick = DemSVGioi;

/**
 * Danh sách SV trên 5
 * input: mảng dtb
 * 
 * Các bc: 
 * Duyệt mảng
 *      + So sánh trên 5 dtb > 5
 *          + Dựa vào vị trí (index) => vị trí thẻ tr (rows[i])
 *          => cells[2] => tên của sinh viên có điểm trên 5
 * 
 * 
 * output: danh sách tên sv có dtb > 5 
 */

function timSVTren5() {
    var tbody = document.querySelector('#tblBody');
    var content = '';
    for (var i = 0; i < dtb.length; i++) {
        if (dtb[i] > 5) {
            var tenSV = tbody.rows[i].cells[2].innerHTML;
            //console.log(tenSV, dtb[i]);

            content += tenSV + " - " + dtb[i] + "<br>";
        }
        
    }
    document.querySelector('#dsDiemHon5').innerHTML = content;
}
document.querySelector('#btnSVDiemHon5').onclick = timSVTren5;

/**
 * Tìm sv điểm cao nhất (max)
 * find(), findIndex()
 * 
 * Thuật toán tìm kiếm = linear search - tìm kiếm tuần tự
 * Giả sử phần tử đầu tiên là số lớn nhất
 * var viTri = 0;
 * var max = array[0]
 * Kiểm chứng
 *      + Duyệt mảng (i = 1)
 *          + max < array[i]
 *                  có số lớn hơn max => lưu số lớn hơn vào max
 *                  viTri = i
 *                  max = array[i]
 */

function timMax() {
    // giả sử số đàu tiên lớn nhất
    var viTri = 0;
    var max = dtb[0];
    // kiểm tra với các số còn lại trong mảng
    for (var i = 0; i < dtb.length; i++) {
        if (max < dtb[i]){
            // nếu có số lớn hơn max
            // lưu giá trị mới vào max
            max = dtb[i];
            viTri = i;
        }
    }
    //console.log(max, viTri);
    var tbody = document.querySelector('#tblBody');
    var tenSV = tbody.rows[viTri].cells[2].innerHTML;
    document.querySelector('#svGioiNhat').innerHTML = tenSV + " - " + max;
}
document.querySelector('#btnSVCaoDiemNhat').onclick = timMax;

function timMin() {
    // giả sử số đàu tiên nhỏ nhất
    var viTri = 0;
    var min = dtb[0];
    // kiểm tra với các số còn lại trong mảng
    for (var i = 0; i < dtb.length; i++) {
        if (min > dtb[i]){
            // nếu có số nhỏ hơn min
            // lưu giá trị mới vào min
            min = dtb[i];
            viTri = i;
        }
    }
    //console.log(min, viTri);
    var tbody = document.querySelector('#tblBody');
    var tenSV = tbody.rows[viTri].cells[2].innerHTML;
    document.querySelector('#svYeuNhat').innerHTML = tenSV + " - " + min;
}
document.querySelector('#btnSVThapDiemNhat').onclick = timMin;

/**
 * Sắp xếp điểm tăng dần
 * Thuật toán sắp xếp (bubble sort)
 * Số nhỏ bên trái - lớn bên phải
 * 
 * length: 7
 * [6.4, 8.2, 3.4, 9.8, 2.4, 1.4, 9.4]
 * 
 * i: 0 -> 5
 * vòng lớn (for i = 0; i < array.length - 1) {
 *          lặp lại nhiều lần code của for nhỏ
 *          
 *          duyệt mảng nhiều lần
 *          vòng nhỏ (for j = 0)     
 * }
 */

function sapXepTangDan() {

    // copy mảng
    var dtb2 = [];
    for (var i = 0; i < dtb.length;i++ ) {
        dtb2.push(dtb[i]);
    }
    for (var i = 0; i < dtb2.length; i++) {
        for (var j = 0; j < dtb2.length; j++) {
            if(dtb2[j] > dtb2[j+1]) {
                var temp = dtb2[j];
                dtb2[j] = dtb2[j+1];
                dtb2[j+1] = temp;
            }
            
        }
        
    }
    console.log(dtb2); 
}
sapXepTangDan();

/**
 * Sau khi sắp xếp mảng gốc (ban đầu) bị thay đổi
 * => sai tên sv
 * 
 * Copy mảng gốc => Mảng copy
 * => Chỉ sắp xếp trên mảng copy => mảng ban đầu vẫn giữ nguyên
 */
/**
 * Gán giá trị
 * + Tham trị: gán giá trị (number, string, boolean)
 * => ko ảnh hưởng biến ban đầu
 * + Tham chiếu: gán địai chỉ ô nhớ (array, object)
 * => Thay đổi cả tham chiếu ban đầu
 * => Copy giá trị => đem từng giá trị của biến cũ lưu qua biến mới
 */

var a = ['milk', 'tea', 'coffee'];
var b = [];
