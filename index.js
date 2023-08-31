// Homework Week 4 
// membuat variabel array Object
let arr = {nama : "Array" , isi : []}
let arrGanjil = {nama : "Array Ganjil" , isi : []}
let arrGenap = {nama : "Array Genap" , isi : []}

// membuat nilai random 1 sampai 50 dengan for loops
for (let i = 0; i < 100; i++) {
    (arr.isi).push(Math.floor(Math.random() * 50) + 1)
}

// Shorting array berdasarkan index ganjil dan genap
for (key in (arr.isi)) {
    if (key % 2 == 0) {
        (arrGenap.isi).push(arr.isi[key]) // memasukan nilai array dengan index Genap ke array Genap
    }else{
        (arrGanjil.isi).push(arr.isi[key]) // memasukan nilai array dengan index Ganjil ke array Ganjil
    }
}

// Function untuk mencari nilai terbesar 
function max(array) {
    var Nilai = array[0]
    // mencari nilai terbesar dengan for loop
    for (let i = 0; i < array.length; ++i) {
        if (array[i] > Nilai) {
            Nilai = array[i];
        }
    }
    return Nilai
}

// Function untuk mencari nilai terkecil 
function min(array) {
    var Nilai = array[0]
    // mencari nilai terkecil dengan for loop
    for (let i = 0; i < array.length; ++i) {
        if (array[i] < Nilai) {
            Nilai = array[i];
        }
    }
    return Nilai
}

// Function mencari nilai total array
function total(array) {
    var total = 0
    for(i = 0; i < array.length; i++){
        total += array[i];
    }    
    return total
}

// Function mencari nilai Rata rata  array
function RataRata(array) {
    // memanggil function total dibagi dengan panjang index untuk mencari nilai rata rata
    return total(array) / array.length
}

// Function untuk membandingkan kedua array
function Bandingkan(array1, array2) {
    return  nilai = array1 > array2 ? " Lebih Besar Dari " :
                    array1 < array2 ? " Lebih Kecil Dari " :
                    " Sama Dengan "
    
}

//menampilkan array dengan index 100
console.log (arr.nama +" Berisi 100 Nilai Random" , arr.isi)
console.log ("\n")

// menampilkan array berdasarkan index ganjil genap
console.log ("Shorting " + arr.nama + " Menjadi 2 Bagian Berdasarkan Index Ganjil Dan Genap")
console.log (arrGanjil.nama +" Dengan isi " , arrGanjil.isi ,"\n" , arrGenap.nama +" Dengan isi " , arrGenap.isi ,"\n")

// menampilkan min max total dan rata rata pada array ganjil
console.log (   "Nilai Terkecil (min) Pada " + arrGanjil.nama +" Adalah " + min(arrGanjil.isi) +"\n" +
                "Nilai Terbesar (max) Pada " + arrGanjil.nama +" Adalah " + max(arrGanjil.isi) +"\n" +
                "Total Nilai Pada " +arrGanjil.nama+ " Adalah " +total(arrGanjil.isi) +"\n" +
                "Dan Rata Rata Nilai pada " + arrGanjil.nama + " Adalah " + RataRata(arrGanjil.isi) ,"\n"
            )

// menampilkan min max total dan rata rata pada array genap
console.log (   "Nilai Terkecil (min) Pada " + arrGenap.nama +" Adalah " + min(arrGenap.isi) +"\n" +
                "Nilai Terbesar (max) Pada " + arrGenap.nama +" Adalah " + max(arrGenap.isi) +"\n" +
                "Total Nilai Pada " +arrGenap.nama+ " Adalah " +total(arrGenap.isi) +"\n" +
                "Dan Rata Rata Nilai pada " + arrGenap.nama + " Adalah " + RataRata(arrGenap.isi),"\n"
            )

// Membandingkan min max total dan rata rata dari kedua array ( ganjil dan genap )
console.log("Perbandingan Nilai Antar " + arrGanjil.nama + " Dan " + arrGenap.nama + " Adalah" + "\n" +
            "- Nilai Terkecil (min) Pada "+ arrGanjil.nama + Bandingkan( min(arrGanjil.isi), min(arrGenap.isi))+ arrGenap.nama + "\n" +
            "- Nilai Terbesar (max) Pada "+ arrGanjil.nama + Bandingkan( max(arrGanjil.isi), max(arrGenap.isi))+ arrGenap.nama + "\n" +
            "- Nilai Total Pada "+ arrGanjil.nama + Bandingkan( total(arrGanjil.isi), total(arrGenap.isi))+ arrGenap.nama + "\n" +
            "- Nilai Rata Rata Pada "+ arrGanjil.nama + Bandingkan( RataRata(arrGanjil.isi), RataRata(arrGenap.isi))+ arrGenap.nama)
