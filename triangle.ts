function PolaTriangle(height : number) {
    let num = 1; // Variabel untuk menyimpan angka yang akan dicetak

    for (let i = 1; i <= height; i++) {
        let row = ''; // Variabel untuk menyimpan baris saat ini

        // Loop untuk mencetak angka di setiap baris
        for (let j = 1; j <= i; j++) {
            // Jika angka kurang dari 10, tambahkan "0" di depannya
            if (num < 10) {
                row += '0' + num; // Tambahkan angka dengan "0" di depan
            } else {
                row += num; // Tambahkan angka tanpa "0" di depan
            }
            // Tambahkan spasi hanya jika bukan angka terakhir dalam baris
            if (j < i) {
                row += ' '; // Tambahkan spasi setelah angka
            }
            num++; // Menambah angka
        }
        console.log(row); // Cetak baris yang sudah dibentuk
    } 
} 


(PolaTriangle(4))
