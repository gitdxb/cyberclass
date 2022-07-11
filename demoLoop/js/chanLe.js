function inSoChanLe() {
    var num = 100;
    var count = 0;
    var soChan = '';
    var soLe = '';
    while(count < num) {
        if(count % 2 == 0) {
            // so chan
            soChan += count + " ,";
        } else {
            // so le
            soLe += count + " ,";
        }
        count++; // tăng biến đếm
    }
    console.log(soChan);
    console.log(soLe);
}
inSoChanLe();