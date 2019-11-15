// Kertas-Gunting-Batu Javascript
// Deklarasi Variable : Let/const/var

// Mengatur nilai default skor user dan computer
let uScore = 0;
let cScore = 0;

// Deklarasi variable menggunakan const, alternatif bisa menggunakan Let matau var, awas case sensitive
// Mengambil elemen HTML span yang menampilkan skor
const uScoretxt = document.getElementById("uscore");
const cScoretxt = document.getElementById("cscore");

// Mengambil elemen counter
const counter = document.querySelector(".counter");

// Mengambil elemen HTML dengan id pr, pp, ps yang dimasukan ke dalam variabel r,p dan s
// pr = player rock, player paper, player scissors
const r = document.getElementById("pr");
const p = document.getElementById("pp");
const s = document.getElementById("ps");

// Mengambil elemen judul, amaterasu dan notify untuk nantinya di toggle show/hide
const titler = document.getElementById("titler");
const notify = document.getElementById("notify");
const amaterasu = document.getElementById("amaterasu");

// Mengambil elemen body nantinya digunakan untuk mengganti warna background
const bodybg = document.getElementById("body");

// Mengambil elemen tombol play dan tombol new game
const playGame = document.getElementById("play");
const bungkustombol = document.getElementById("bungkustombol");

// Mengambil isi elemen HTML dengan id hasil
const hasil = document.getElementById("hasil");

// Pilihan dari Komputer
// Membuat fungsi dengan memasukkan 3 indeks array sebagai respon dari computer
// Kemudian mengambil acak hasil dari array tersebut dengan mengacak nomer 1-3
function CPick() {
    const inp = ['cr', 'cp', 'cs'];
    const randomInp = Math.floor(Math.random() * 3);
    return inp[randomInp];
}


// Fungsi apabila kita menang, dengan mengambil parameter string upp dan cpp
// Contoh apabila kita kertas menang dari batu maka
// Menjalankan Function win(pp,cr)
// pp = player paper, cr = computer rock

function win(upp, cpp) {

    // Ambil elemen HTML dengan Id upp dan cpp yaitu parameter yang dikirimkan
    const uppe = document.getElementById(upp);
    const cppe = document.getElementById(cpp);

    // Tambahkan skor user dengan 1
    uScore++;

    // Tampilkan skor sementara dari variable uScoretxt dan cScoretxt
    uScoretxt.innerHTML = uScore;
    cScoretxt.innerHTML = cScore;

    // Ubah teks didalam elemen hasil yang sebelumnya VS menjadi WIN
    hasil.innerHTML = "WIN";

    // Menambahkan class css ke kedua kartu yang dipilih
    uppe.classList.add("kartu-dipilih");
    cppe.classList.add("kartu-dipilih");

    // Mengganti warna background dengan kelas CSS background-menang
    bodybg.classList.add("background-menang");

    // Menghapus kelas warna background bila sebelumnya kalah/seri
    bodybg.classList.remove("background-kalah");
    bodybg.classList.remove("background-seri");

    // Beri waktu efek kartu dipilih akan kembali ke semula, 2000 dengan satuan milisekon 
    setTimeout(function() {
        uppe.classList.remove("kartu-dipilih");
    }, 2000);
    setTimeout(function() {
        cppe.classList.remove("kartu-dipilih");
    }, 2000);
}


// Fungsi apabila kita kalah, dengan mengambil parameter string upp dan cpp
function lose(upp, cpp) {

    // Ambil elemen HTML dengan Id upp dan cpp yaitu parameter yang dikirimkan
    const uppe = document.getElementById(upp);
    const cppe = document.getElementById(cpp);

    // Tambahkan skor komputer dengan 1
    cScore++;

    // Ubah skor sementara dengan skor sekarang
    uScoretxt.innerHTML = uScore;
    cScoretxt.innerHTML = cScore;

    // Menampilkan teks LOSE menggantikan VS
    hasil.innerHTML = "LOSE";

    // Menambahkan class css ke kedua kartu yang dipilih
    uppe.classList.add("kartu-dipilih");
    cppe.classList.add("kartu-dipilih");

    // Mengganti warna background dengan kelas CSS background-kalah
    bodybg.classList.add("background-kalah");

    // Menghapus kelas warna background bila sebelumnya menang/seri
    bodybg.classList.remove("background-menang");
    bodybg.classList.remove("background-seri");

    // Beri waktu efek kartu dipilih akan kembali ke semula, 2000 dengan satuan milisekon 
    setTimeout(function() {
        uppe.classList.remove("kartu-dipilih");
    }, 2000);
    setTimeout(function() {
        cppe.classList.remove("kartu-dipilih");
    }, 2000);
}

// Fungsi apabila hasilnya seri, dengan mengambil juga nilai dari parameter upp, dan cpp
function draw(upp, cpp) {
    const uppe = document.getElementById(upp);
    const cppe = document.getElementById(cpp);

    // Menampilkan teks LOSE menggantikan VS di HTML hasil
    hasil.innerHTML = "DRAW";

    // Menambahkan class css ke kedua kartu yang dipilih
    uppe.classList.add("kartu-dipilih");
    cppe.classList.add("kartu-dipilih");

    // Mengganti warna background dengan kelas CSS background-seri
    bodybg.classList.add("background-seri");

    // Menghapus kelas warna background bila sebelumnya menang/kalah
    bodybg.classList.remove("background-menang");
    bodybg.classList.remove("background-kalah");

    // Beri waktu efek kartu dipilih akan kembali ke semula, 2000 dengan satuan milisekon 
    setTimeout(function() {
        uppe.classList.remove("kartu-dipilih");
    }, 2000);
    setTimeout(function() {
        cppe.classList.remove("kartu-dipilih");
    }, 2000);
}



// Fungsi aturan bermain dari suit
function engine(upp) {
    // Mendeklarasikan variable cpp sebagai hasil dari nilai random pada fungsi CPick() atau Pilihan dari Komputer
    const cpp = CPick();

    // Pengkondisian dengan menggabungkan kedua pilihan user dan komputer
    switch (upp + cpp) {

        // Kasus menang bila hasil penggabungan string sebagai berikut
        // Contoh prcs artinya input user = pr atau player rock, input dari komputer adalah cs atau computer scissors
        // Maka kondisi menang untuk user
        case "prcs":
        case "ppcr":
        case "pscp":

            // Jalankan fungsi win(); dengan parameter upp dan cpp diisi dengan pilihan user dan komputer
            win(upp, cpp);

            // Keluar dari pengkondisian apabila kondisi terpenuhi
            break;

            // Kasus kalah bila hasil penggabungan string sebagai berikut
        case "prcp":
        case "ppcs":
        case "pscr":

            // Jalankan fungsi lose(); dengan parameter upp dan cpp
            lose(upp, cpp);

            // Keluar dari pengkondisian apabila kondisi terpenuhi
            break;

            // Kasus imbang apabila penggabungan stringnya sebagai berikut
        case "prcr":
        case "ppcp":
        case "pscs":

            // Jalankan fungsi draw(); dengan parameter upp dan cpp
            draw(upp, cpp);

            // Keluar dari pengkondisian
            break;
    }
}

// JQuery ketika page pertama kali di load
$(document).ready(function() {

    // JQuery meng animasikan seluruh elemen
    $("#titler, #janken, #hasil-turn, #computer-interface, #tombol, #titlebar").animate({
        opacity: '1'
    }, 2000);

    // JQuery Animasi untuk menampilkan elemen amaterasu, notify dan bungkustombol dan menyembunyikan elemen playGame dan titler
    $("#play").click(function() {
        $("#amaterasu").show(1000);
        $("#notify").show(1000);
        $("#bungkustombol").show(1000);
        $("#play").hide(1000);
        $("#titler").hide(1000);
    });
});

// Jalankan fungsi play();

// Fungsi play akan dijalankan apabila kita menekan tombol play karena di tag <a> terdapat onclick="play()"
function play() {

    // Merekam aktivitas elemen r, rock dengan addEventListener yang berisi apabila di klik jalankan fungsi engine();
    // dengan argumen "pr" yang akan diisikan oleh parameter, sehingga fungsinya menjadi engine(pr);
    r.addEventListener('click', function() {
        engine("pr");
    })

    // Merekam aktivitas elemen p, paper dengan addEventListener yang berisi apabila di klik jalankan fungsi engine(pp);
    p.addEventListener('click', function() {
        engine("pp");
    })
    // Merekam aktivitas elemen s, scissors dengan addEventListener yang berisi apabila di klik jalankan fungsi engine(ps);
    s.addEventListener('click', function() {
        engine("ps");
    })
}


// JavaScript Kertas-Gunting-Batu Simple built with love, by Awal Ariansyah
// November, 2019