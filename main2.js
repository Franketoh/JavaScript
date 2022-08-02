
const carrito = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay"); 


carrito.addEventListener("click", ()=>{
    if(cartModalOverlay.classList.contains("open")) {
        cartModalOverlay.classList.remove("open");
    } else {
        cartModalOverlay.classList.add("open");
    }
})


const closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click", ()=>{
    cartModalOverlay.classList.remove("open");
})


const addToCart = document.getElementsByClassName("add-to-cart");
console.log(addToCart)
for(let boton of addToCart) {
    boton.addEventListener("click", compilarDatos)
}
function compilarDatos(e){
    let boton = e.target;
    let producto = boton.parentElement;
    let prodID = producto.getAttribute("id");
    let prodName = producto.querySelector("h3").innerText;
    let precio = producto.querySelector(".product-price").innerText;
    let imagen = producto.querySelector(".product-image").src;
    agregarElemento(prodID,prodName,precio,imagen)
}

function agregarElemento(prodID,prodName,precio,imagen) {
    let productRow = document.createElement("div");
    let contenedorProductos = document.querySelector(".product-rows");

    let elemProducto = `
        <div class="product-row" id="${prodID}">
            <img class="cart-image" src="${imagen}" />
            <span>${prodName}</span>
            <span class="cart-price">${precio}</span>
            <button class="remove-btn">Borrar</button>
        </div>
    `
    productRow.innerHTML = elemProducto;
    contenedorProductos.append(productRow);
    let botonesBorrar = productRow.querySelectorAll(".remove-btn");
    for(let boton of botonesBorrar) {
        boton.addEventListener("click", borrarElemento);
    }
    cantElementosCarrito();
}
function borrarElemento(e) {
    btn = e.target;
    btn.parentElement.parentElement.remove();
    cantElementosCarrito()
}

function cantElementosCarrito() {
    let cantidad = document.querySelectorAll(".product-rows > div");
    let cartQuantity = document.querySelector(".cart-quantity");
    cartQuantity.innerText = cantidad.length;

}

































/*

let carritoDeCompras = []
let contenedorProductos = document.getElementById('contenedor-productos')
let contenedorCarrito = document.getElementById('contenedor-carrito')
let contadorCarrito = document.getElementById('contadorCarrito')
let total = document.getElementById('precioTotal')

mostrarProductos(stockProductos)

function mostrarProductos(array){
    contenedorProductos.innerHTML =""
   array.forEach(item =>{
    let div = document.createElement('div')
    div.className = 'producto'
    div.innerHTML = `<div class="card">
                        <div class="card-image">
                            <img src="${item.img}">
                            <span class="card-title">${item.nombre}</span>
                            <a id="boton" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${item.desc}</p>
                            <p> $${item.precio}</p>
                            <button type="button" class="btn btn-primary" id="boton comprar" </button> comprar
                        </div>
                    </div>
                    `
        contenedorProductos.appendChild(div)
   })

    agregarAlCarrito()
}

function agregarAlCarrito() {
    let productoAgregar = prompt('que producto quiere?').toLowerCase()
    let encontrado = stockProductos.find(element=> element.nombre.toLowerCase() == productoAgregar)
    carritoDeCompras.push(encontrado)
    mostrarCarrito(encontrado)
    actualizarCarrito()
}

function mostrarCarrito(encontrado) {
console.log(encontrado);
    let div = document.createElement('div')
    div.className= 'productoEnCarrito'
    div.innerHTML =`<p>${encontrado.nombre}</p>
                    <p>precio: $${encontrado.precio}</p>
                    <button class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`
    contenedorCarrito.appendChild(div)
}

function  actualizarCarrito (){
   contadorCarrito.innerText = carritoDeCompras.length
   total.innerText = carritoDeCompras.reduce((acc, el)=> acc + el.precio, 0)
   
}

*/
