let product = {
    samsung: {
        "Galaxy A04e": {
            diplay: "6.5” Large HD+ Display",
            cam: "13MP Upgraded Main + 2MP Depth",
            exrta: "3GB Ram Expandable(up to 4GB)",
            price: 30500.00
        },
        "Galaxy A04": {
            Display: "6.5” HD+ Display",
            Cam: "50MP Main + 2MP Macro",
            extra: "5000 mAh Long Lasting Battery",
            price: 30500.00
        },
        "Galaxy A53 5G": {
            Display: "FHD+ sAMOLED 120Hz Display",
            Cam: "64MP OIS Camera",
            extra: "2 Days Batter",
            price: 40500.00
        }

    },
    apple: {
        "Apple iPhone 11": {
            Display: "6.5” HD+ Display",
            Cam: "50MP Main + 2MP Macro",
            extra: "64GB 128GB 256GB",
            price: 201999
        },
        "Apple iPhone 12": {
            Display: "6.5” HD+ Display",
            Cam: "50MP Main + 2MP Macro",
            extra: "64GB 128GB 256GB",
            price: 301999
        },
        "Apple iPhone 13": {
            Display: "6.5” HD+ Display",
            Cam: "50MP Main + 2MP Macro",
            extra: "64GB 128GB 256GB",
            price: 351999
        },
    },
    oppo: {
        "OPPO Find X5 Pro": {
            Display: "6.5” HD+ Display",
            Cam: "50MP Main + 2MP Macro",
            extra: "MariSilicon X Imaging NPU, Hasselblad Camera for Mobile",
            price: 305000
        },
        "OPPO A98 5G": {
            Display: "6.5” HD+ Display",
            Cam: " 64MP AI Camera, 40x Microlens",
            extra: "4230mAh Battery, 2GB RAM+32GB ROM",
            price: 305000
        },
    },
    realme: {
        "realme 9": {
            Display: "6.5” HD+ Display",
            Cam: "50MP Main + 2MP Macro",
            extra: "5000 mAh Long Lasting Battery",
            price: 66999
        },
        "realme C25s": {
            Display: "6.5” HD+ Display",
            Cam: "18MP back camera 8MP front cam",
            extra: "Powerful Processor, 6000mAh Battery",
            price: 54999
        },
    },
    readme: {
        "Redmi A1+": {
            Display: "6.5” HD+ Display",
            Cam: "8MP dual + 2MP Macro",
            extra: "5000 mAh Long Lasting Battery",
            price: 23999
        },
        "Redmi Note 11": {
            Display: "6.7 HD+ Display",
            Cam: "8MP dual + 2MP Macro",
            extra: "5000 mAh Long Lasting Battery",
            price: 54999
        },
    },
}
let company_select = document.getElementById("company_select")
let model_select = document.getElementById("model_select")


function Create_seletor(sele, product, fun) {
    sele.innerHTML = ""
    for (let i = 0; i < product.length; i++) {
        let opt = document.createElement('option')
        opt.value = product[i]
        opt.innerHTML = product[i]
        sele.append(opt)
    }
    sele.addEventListener("change", e => { fun(e.target.value) })
}
Create_seletor(company_select, Object.keys(product), selecting_modle)


function selecting_modle(selected) {
    if (selected == "Select Compnys") return
    Create_seletor(model_select, Object.keys(product[selected]), show_details)
}

function show_details(selected) {
    for (const key in product) {
        if (product[key][selected]) {
            const card = document.querySelector('.card').style.display = "block"
            document.querySelector('.card-title').innerHTML = selected
            document.querySelector('.card-subtitle').innerHTML = product[key][selected].Display
            document.querySelector('.card-text').innerHTML = product[key][selected].extra
            document.querySelector('.card-text1').innerHTML = product[key][selected].Cam
            document.querySelector('.price').innerHTML = product[key][selected].price
        }
    }
}