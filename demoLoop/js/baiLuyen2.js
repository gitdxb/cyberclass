/**
 * Tính tổng số chẵn
 * từ 1 đến số n (nhập form)
 * 
 * while/ for
 * if else
 * biến tích luỹ
 */

//while

function tinhTongChan() {
    // dãy số kiểm tra từ 1 -> n
    var count = 1;
    var n = document.getElementById("inputNum2").value;
    var sum = 0;

    // while (count <= n) {
    //     if (count % 2 == 0) {
    //         // so chan
    //         sum += count;
    //     }
    //     console.log("Tổng lần lặp thứ " + count + " là " + sum);
    //     count++;
    // }
    for (var i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            // so chan
            sum += 1;
            console.log("Tổng lần lặp thứ " + i + " là " + sum);
        }
        document.getElementById("txtResult2").innerHTML = "Tổng cuối " + sum;
    }
    
    //     // console.log("Tổng cuối " + sum);
        document.getElementById("txtResult2").innerHTML = "Tổng cuối " + sum;
}


document.getElementById("btnTinhTong").onclick = tinhTongChan;