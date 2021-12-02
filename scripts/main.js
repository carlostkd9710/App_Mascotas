let btnPerro = document.getElementById("btnPerros");
let btnGato = document.getElementById("btnGatos");

const getElementos = async (url) => {
    let mostrarElementos = document.querySelector(".grid-elementos");
    mostrarElementos.innerHTML = "";

    const resp = await fetch(url);
    const data = await resp.json();
{/* <a href="javascript:getItemDetalle ('${url}/${id}');" class="enlace-detalle-elemento"> */}
    data.forEach((element) => {
        const { url, nombre, descripcion } = element;
        mostrarElementos.innerHTML += `
        <div id="container-cards" class="col elementos">

                <div class="card text-white gradiente">
                    <img src="${url}" class="card-img" alt="${nombre}">
                    <div class="card-img-overlay">
                            <h3 class="card-title body2Bold">${nombre}</h3>
                            <p>descripcion ${descripcion}</p>
                    </div>
                </div>
            </a>
        </div>
        `;
    });
};

btnPerro.addEventListener("click", () => {
    getElementos("http://localhost:3000/perros");
});
btnGato.addEventListener("click", () => {
    getElementos("http://localhost:3000/gatos");
});
/*
const getItemDetalle = async (url) => {
    let muestraRopaDetalle = document.querySelector(".detalle-elementos");
    let muestraMascota = document.querySelector(".grid-elementos");
    let muestraMascotas = document.querySelector("header");
    muestraMascota.classList.add("ocultarmascotas");
    muestraMascotas.classList.add("ocultarmascotas");
    muestraRopaDetalle.innerHTML = "";
    const resp = await fetch(url);
    const data = await resp.json();
    const { id, imagen,imagen1, imagen2, nombre, precio } = data;
    muestraRopaDetalle.innerHTML += `
          <div class="col mascotas-info">
          <a href="#" class="enlace-detalle-elemento"></a>

              <div class="card gradiente">
              <div class="card-info" >
              <div id="Info1">
                  <div id="Info2>
                      <h1 class="card-text body2Bold">${nombre}</h1>
                      <p class="card-text body2Regular">${precio}</p>
                      <button id="carrito"><img id="imgCarrito" src="https://res.cloudinary.com/dvh5dsa7s/image/upload/v1638032117/APP_Principe_Fresco/CarIcon_pkayar.png" alt="" width="30" height="30"> 
                      </div>
                </div>
                <div>
                 <img src="${imagen}" class="card-img-info" alt="...">
                 <img src="${imagen1}" class="card-img-info" alt="...">
                 <img src="${imagen2}" class="card-img-info" alt="...">
                </div>


                  </div>

              </div>
          </a>
      </div>
          `;



document.getElementById("carrito").addEventListener("click",() => {
    const favoritesString = localStorage.getItem("favorites") || "[]"
    const favorites = JSON.parse(favoritesString)
    toggleArrayItem(favorites,data)
    localStorage.setItem("favorites", JSON.stringify(favorites))
  })
};

function toggleArrayItem(array, value) {
const indice = array.findIndex(element => element.id === value.id);
if (indice === -1)
    array.push(value);
else
    array.splice(indice,1);
} */
