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
// end-point "/convert/biner" dengan method POST
app.post("/convert/biner", (req,res) => {
    let biner = Number(req.body.biner)

    let desimal = parseInt(biner, 2).toString(10)
    let oktal = parseInt(biner, 2).toString(8)
    let hexsaDesimal = parseInt(biner, 2).toString(16)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        biner: biner,
        desimal: desimal,
        oktal: oktal,
        hexsaDesimal: hexsaDesimal
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// end-point "/convert/desimal" dengan method POST
app.post("/convert/desimal", (req,res) => {
    let desimal = Number(req.body.desimal)

    let biner = parseInt(desimal, 10).toString(2)
    let oktal = parseInt(desimal, 10).toString(8)
    let hexsaDesimal = parseInt(desimal, 10).toString(16)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        desimal: desimal,
        biner: biner,
        oktal: oktal,
        hexsaDesimal: hexsaDesimal
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// end-point "/convert/oktal" dengan method POST
app.post("/convert/oktal", (req,res) => {
    let oktal = Number(req.body.oktal)

    let biner = parseInt(oktal, 8).toString(2)
    let desimal = parseInt(oktal, 8).toString(10)
    let hexsaDesimal = parseInt(oktal, 8).toString(16)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        oktal: oktal,
        biner: biner,
        desimal: desimal,
        hexsaDesimal: hexsaDesimal
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// end-point "/convert/hexsaDesimal" dengan method POST
app.post("/convert/hexsaDesimal", (req,res) => {
    let hexsaDesimal = Number(req.body.hexsaDesimal)

    let biner = parseInt(hexsaDesimal, 16).toString(2)
    let desimal = parseInt(hexsaDesimal, 16).toString(10)
    let oktal = parseInt(hexsaDesimal, 16).toString(8)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        hexsaDesimal: hexsaDesimal,
        biner: biner,
        desimal: desimal,
        oktal: oktal
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})