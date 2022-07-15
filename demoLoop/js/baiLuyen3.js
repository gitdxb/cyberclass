function demSoChia3() {
    // dem so chia het cho 3
    var countNum = 0;
    // i la day so tu 0 -> 1000
    // for (var i = 0; i <= 10; i++) {
    //     if (i % 3 == 0) {
    //         // so chia het cho 3
    //         // countNum += 1;
    //         countNum++;
    //     }
    // }
    var count = 0;
    while (count <= 10) {
        if (count % 3 == 0) {
            countNum++;
            console.log("Count la: " + count + " Tổng " + countNum);
        }
        count++;
        console.log("Vong lap " + count)
    }
    console.log(countNum);
}
demSoChia3();