/**
 * Loop (vòng lặp)
 * While
 * Do...while (ít dùng nhất)
 * For (dùng nhiều nhất)
 */

// var count = 0;
// while (count < 3) {
//     console.log("Biến đếm: " + (count+1) + " Bye bye");
//     count++;
// }

// var showInfo = "Name A"
// var count = 0;
// do {
//     console.log(showInfo);
//     count++;
// } while (count < 3);

/**
 * Thực hành while
 * chia dần số nguyên chẵn cho đến khi num <=1
 */


function tinhNum() {
    var count = 0;
    var num = Number(document.getElementById("inputNum").value);
    var content = ""; // string
    while(num > 1) {
        // thỏa điều kiện thì thực hiện code bên trong
        num = Math.floor(num/2);
        count++;

        console.log(count + " Gía trị num: " + num);
        // content: biến tích lũy
        // content(mới) = content (cũ) + "đoạn string kết quả"
        // content (2) = content(1) + "đoạn string kết quả"
        // content = content + "count: " + ", num: " + num + "<br>";
        content += "count: " + count + ", num: " + num + "<br>";
    }
    document.getElementById("txtResult1").innerHTML = content 
}
document.getElementById("btnTinh").onclick = tinhNum;


/**
 * Vòng lặp for
 */
//for(var i = 0; i < 3; i++) {}
