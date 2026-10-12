// modul http

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "GET" && req.url === "/get/dataPenjualan") {
    const dataBarang = {
        total: 1700,
        hariIni: "minyak sawit",
        hargaMahal: false
    }

    res.writeHead(200, { 'content-type': 'application/json' });

    res.end(JSON.stringify(dataBarang));
  }

  if (req.method === "GET" && req.url === "/") {
    const errorTxt = {
      text: "maaf halaman dengan url ini, tidak tersedia",
    };

    res.writeHead(200, { "content-type": "application/json" });

    res.end(JSON.stringify(errorTxt));
  }
  
});

server.listen(3000, () => {
    console.log("server berjalan di port 3000")
})
