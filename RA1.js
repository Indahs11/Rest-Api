const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()
// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())
// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
// end-point "/balok" dengan method POST
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let tinggi = Number(req.body.tinggi)

    let volume = panjang * lebar * tinggi
    let luasPermukaan  = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi, 
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let rusuk = Number(req.body.rusuk) 

    let volume = rusuk * rusuk * rusuk
    let luasPermukaan  = 6 * (rusuk * rusuk)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        rusuk: rusuk,
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// end-point "/tabung" dengan method POST
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari)
    let tinggi = Number(req.body.tinggi)

    let volume = 3.14 * jarijari ** 2 * tinggi
    let luasPermukaan  = (2 * 3.14 * jarijari * tinggi) + (2 * 3.14 * jarijari ** 2)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// end-point "/bola" dengan method POST
app.post("/bola", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari)

    let volume = 4 / 3 * 3.14 * jarijari ** 3
    let luasPermukaan  = 4 * 3.14 * jarijari ** 2
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})