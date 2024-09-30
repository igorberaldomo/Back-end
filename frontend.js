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
        for (let i = 0; i < data['title'].length; i++) {
            table.innerHTML += `<tr>
        <td>${data['title'][i].description}</td>
        <td>${data['title'][i].quantity}</td>
        </tr>`
        }
    }
}
loadTable()
async function loadTempList() {
    const response = await fetch("http://localhost:5000/products/newlist",{method: "GET"})
    const data = await response.json()
    console.log(data['title'])
    for (let i = 0; i < data['title'].length; i++) {
        temptable.innerHTML += `<tr>
    <td>${data['title'][i].description}</td>
    <td>${data['title'][i].quantity}</td>
    </tr>`
    }
}

loadTempList()

async function addList() {
    const description = document.getElementById("description").value
    const quantity = document.getElementById("quantity").value
    const result =await fetch(`http://localhost:5000/products/newlist`,{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({description: description, quantity: quantity})
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
