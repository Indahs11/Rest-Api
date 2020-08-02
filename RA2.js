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
// endpoint "/convert/celcius/:celcius" dengan method GET
app.get("/convert/celcius/:celcius", (req,res) => {

    // menampung data yang dikirimkan
    let celcius = req.params.celcius
    let reamur = celcius * 4 / 5
    let fahrenheit = celcius * 9 / 5 + 32
    let kelvin = parseInt(celcius) + 273

    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        celcius: celcius,
        result: {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)

})
// endpoint "/convert/reamur/:reamur" dengan method GET
app.get("/convert/reamur/:reamur", (req,res) => {

    // menampung data yang dikirimkan
    let reamur = req.params.reamur
    let celcius = reamur * 5 / 4
    let fahrenheit = reamur * 9 / 4 + 32
    let kelvin = parseInt(celcius) + 273

    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        reamur: reamur,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)

})
// endpoint "/convert/fahrenheit/:fahrenheit" dengan method GET
app.get("/convert/fahrenheit/:fahrenheit", (req,res) => {

    // menampung data yang dikirimkan
    let fahrenheit = req.params.fahrenheit
    let celcius = (fahrenheit - 32) * 5 / 9 
    let reamur = (fahrenheit - 32) * 4 / 9
    let kelvin = parseInt(celcius) + 273

    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        fahrenheit: fahrenheit,
        result: {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// endpoint "/convert/kelvin/:kelvin" dengan method GET
app.get("/convert/kelvin/:kelvin", (req,res) => {

    // menampung data yang dikirimkan
    let kelvin = req.params.kelvin
    let celcius = kelvin - 273 
    let reamur = (kelvin - 273) * 4 / 5
    let fahrenheit = (kelvin - 273) * 9 / 5 + 32

    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        kelvin: kelvin,
        result: {
            celcius: celcius,
            reamur: reamur,
            fahrenheit: fahrenheit
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})