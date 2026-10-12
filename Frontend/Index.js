// pengambilan element html

const btn = document.getElementById("btn-data");
const dtTampil = document.getElementById("dataTampilDisini");

// logic

btn.addEventListener("click", async () => {
  console.log("tombol berhasil di klik")
  try {
    const dataMentah = await fetch("http://localhost:3000/get/dataPenjualan");
    const dataSiap = await dataMentah.json();

    // menampilkan data

    dtTampil.innerHTML = dataSiap.hariIni
  } catch (err) {
    console.log(err);
  }
});
