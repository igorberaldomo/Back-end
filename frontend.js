let table = document.getElementById("table")
let temptable = document.getElementById("temptable")
let newtable = false


async function loadTable() {
    const response = await fetch("http://localhost:5000/products")
    const data = await response.json()
    if (data['items'] == undefined) {
        newtable = true
    }
    if (newtable == false) {
        for (let i = 0; i < data['items'].length; i++) {
            table.innerHTML += `<tr>
        <td>${data['items'][i].nome}</td>
        <td>${data['items'][i].preco}</td>
        </tr>`
        }
    } else {
        for (let i = 0; i < data['newlist'].length; i++) {
            table.innerHTML += `<tr>
        <td>${data['newlist'][i].description}</td>
        <td>${data['newlist'][i].quantity}</td>
        </tr>`
        }
    }
}
loadTable()
async function loadTempList() {
    const response = await fetch("http://localhost:5000/products/newlist",{method: "GET"})
    const data = await response.json()
    console.log(data['newlist'])
    for (let i = 0; i < data['newlist'].length; i++) {
        temptable.innerHTML += `<tr>
    <td>${data['newlist'][i].title}</td>
    <td>${data['newlist'][i].description}</td>
    <td>${data['newlist'][i].quantity}</td>
    </tr>`
    }
}

loadTempList()

async function addList() {
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value
    const quantity = document.getElementById("quantity").value

    const result =await fetch(`http://localhost:5000/products/newlist`,{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({description: description, quantity: quantity, title: title})
        }
    )
    console.log( await result.text())

}


async function changeTable() {
    const result =await fetch(`http://localhost:5000/`,{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({newtable: true})
    })
    newtable = true
}
