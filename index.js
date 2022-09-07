// CONTADOR
const btnSumar = document.querySelector('.btnSumar')
const btnRestar = document.querySelector('.btnRestar')
const contador = document.querySelector('.contador')
let counter = 0;

btnSumar.addEventListener('click', () => cuenta(1));
btnRestar.addEventListener('click', () => cuenta(-1));

function cuenta(num) {
    counter += num;
    contador.textContent = counter;
}
// CONTADOR

// PRODUCTOS
const container = document.querySelector('.container');

let productos = JSON.parse(localStorage.getItem("productos")) || []

document.addEventListener('DOMContentLoaded', writeHTML);
// PRODUCTOS

// AÑADIR PRODUCTO
const addProductBTN = document.querySelector('.addProduct');
const nameInput = document.querySelector('.nameInput');
const priceInput = document.querySelector('.priceInput');

addProductBTN.addEventListener('click', () => {
    let obj = {
        name: nameInput.value,
        price: priceInput.value
    };
    productos.push(obj);
    writeHTML();
})

function writeHTML() {
    container.textContent = '';
    if (productos.length == 0) {
        container.textContent = "No tenés productos agregados..."
    }
    productos.forEach(producto => {
        const div = document.createElement('div');
        const title = document.createElement('h3');
        const p = document.createElement('p');
        const btnBorrar = document.createElement('button');

        btnBorrar.addEventListener('click', () => {
            productos = productos.filter(elemento => elemento.name != producto.name)
            writeHTML();
        })

        title.textContent = producto.name;
        p.textContent = `$${producto.price}`;
        btnBorrar.textContent = "X";

        div.append(title)
        div.append(p)
        div.append(btnBorrar)

        container.append(div);
    })
    localStorage.setItem('productos', JSON.stringify(productos))
}