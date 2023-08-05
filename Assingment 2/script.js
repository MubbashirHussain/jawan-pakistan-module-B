let arr = [
    {
        brand: "Samsung",
        model: "A30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
    {
        brand: "Samsung",
        model: "A10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb"
    },
    {
        brand: "Samsung",
        model: "A20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb"
    },
    {
        brand: "Vivo",
        model: "Y20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb"
    },
    {
        brand: "Vivo",
        model: "Y11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb"
    },
    {
        brand: "Vivo",
        model: "Y15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb"
    },
    {
        brand: "Motorola",
        model: "123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb"
    },
    {
        brand: "Iphone",
        model: "12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
    {
        brand: "Iphone",
        model: "13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
    {
        brand: "Iphone",
        model: "X",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
]


let redner_area = document.querySelector('.rednering_area')
let company_select = document.querySelector('#company_select')
let model_select = document.querySelector('#model_select')
let SearchInput = document.querySelector('.SearchInput')

let Rendering_cards = (arr) => {
    redner_area.innerHTML = ""
    arr.map((obj) => {
        redner_area.innerHTML += `
        <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${obj.brand}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${obj.model}</h6>
                <p class="card-text"> </p>
                <p class="card-text"> camera :${obj.camera} </p>
                <p class="card-text"> ram:  ${obj.ram}</p>
                <p class="card-text"> rom : ${obj.rom}  </p>
                <button class="bg-primary text-white p-2 border-0 rounded">
                <span class="price">price : ${obj.price}</span></button>
            </div>
        </div>
        `
    })
}

let Filling_selects = (options, select) => {
    options.forEach(option => {
        select.innerHTML += `<option value="${option}">${option}</option>`
    });
}

let Filering_cards = (e, array, fun, select) => {
    let selected = e.target.value;
    if (selected.split(" ")[0] != "Select") {
        window.search = () => {
            let NewA = array.filter((arra) => arra[selected] == SearchInput.value)
            Rendering_cards(NewA)
        }
    } else {
        Rendering_cards(array)
    }
}
Rendering_cards(arr)
Filling_selects(Object.keys(arr[0]), company_select)
company_select.addEventListener('change', (e) => { Filering_cards(e, arr) })