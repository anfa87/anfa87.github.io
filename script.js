// Meminta input nama pacar dan usianya
var namaPacar = prompt("Masukkan nama pacar Anda: ");
var usiaPacar = parseInt(prompt("Masukkan usia pacar Anda: "));

// Menampilkan ucapan ulang tahun kepada pacar
document.getElementById("nama-pacar").innerHTML = namaPacar;
document.write("<p>Selamat ulang tahun, " + namaPacar + "!</p>");
document.write("<p>Sekarang usiamu sudah " + usiaPacar + " tahun.</p>");
document.write("<p>Semoga hari ulang tahunmu menyenangkan dan penuh kebahagiaan!</p>");

// Menambahkan efek animasi pada gambar
var gambar = document.getElementsByTagName("img")[0];
gambar.addEventListener("mouseenter", function() {
	this.style.transform = "scale(1.1)";
});
gambar.addEventListener("mouseleave", function() {
	this.style.transform = "scale(1)";
});
