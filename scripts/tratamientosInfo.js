//guardo en variable el botón select 
const select = document.getElementById('select')
//guardo en variable el botón con texto "OK"
const okBtn = document.getElementById('okBtn')


//agrego evento para darle función al botón "OK"
okBtn.addEventListener('click', () => {

    //guardo en variable <section> del html
    //el cual contiene la información sobre
    //los tratamientos faciales
    const facial = document.getElementById('facial')

    //guardo en variable <section> del html
    //el cual contiene la información sobre
    //los tratamientos corporales
    const corporal = document.getElementById('corporal')

    //uso condicionales, en caso de que el valor 
    //del select sea "corporales" añade la clase
    //"show" al <section> que contiene la info
    //de los tratamientos corporales y quita la 
    //clase "show" de faciales
    if(select.value == "corporales"){
        corporal.classList.add("show");
        facial.classList.remove("show");

        //en caso de que el valor del select
        //sea "faciales" hace el proceso contrario
    }else if(select.value == "faciales"){
        corporal.classList.remove("show");
        facial.classList.add("show");
    }
})


//hago fetch desde un archivo JSON local
fetch('../tratamientosInfo.JSON')
.then(res => res.json())
.then(res => getData(res))


//función para obtener los datos
//del fetch
function getData(dato){
    //guardo los datos en una variable
    const datos = dato

    //guardo en variable las etiquetas del HTML
    //en la cual dentro va el título,
    //uso querySelectorAll para traer todas aquellas
    //con la misma clase
    const titleAccordion = document.querySelectorAll('.accordion-button')

    //guardo en variable las etiquetas del HTML
    //en la cual dentro va la información,
    //uso querySelectorAll para traer todas aquellas
    //con la misma clase
    const bodyAccordion = document.querySelectorAll('.accordion-body')


    //iteración para recorrer cada elemento del array
    //y poner los títulos e información en cada contenedor
    for (let i = 0; i < titleAccordion.length; ++i) {
        titleAccordion[i].innerHTML = datos[i].name;
        bodyAccordion[i].innerHTML = datos[i].description;
      }
}





//porción de código en el cual agrego empresas dentro del HTML y le doy funcion 
//a la barra de búsqueda

//guardo en variable el template de cada card en la cual va a ir la información
const empresaCardTemplate = document.querySelector('[data-empresa-template]')

//guardo en variable el div contenedor de las cards
const empresaCardContainer = document.querySelector('.cards_container')

//guardo en variable el input de búsqueda
const searchInput = document.querySelector('#search')


//agrego un evento de tipo "INPUT" a la barra de búsqueda para que 
//cada vez que se realice un cambio dentro del input este cambie el contenido que se muestra
searchInput.addEventListener('input', (e) => {
    //obtengo el valor del evento que ocurre en el input
    const value = e.target.value.toLowerCase()

//recorro cada empresa para ver si coincide con la búsqueda
    empresas.forEach(empresa => {
        //creo la variable "isVisible" para poder verificar si lo ingresado
        //coincide con la información
        const isVisible = empresa.name.toLowerCase().includes(value) || empresa.description.toLowerCase().includes(value)
        empresa.element.classList.toggle('hide', !isVisible)
    })
})

//creo un array vacío para guardar los datos obtenidos del map
let empresas = []


//hago fetch al JSON local donde se encuentran todos los datos de las empresas
fetch('../productosInfo.JSON')
.then(res => res.json())
.then(data => {
    empresas = data.map(empresa => { 
        //guardo en variable todos los elementos dentro del template      
        const card = empresaCardTemplate.content.cloneNode(true).children[0]

        //guardo el elemento del html en el cual va ubicado el titulo
        const header = card.querySelector('[data-header]')

         //guardo el elemento del html en el cual va ubicado el cuerpo
        const body = card.querySelector('[data-body]')

        //dentro de header se coloca el titulo (llamado "name" dentro del JSON)
        header.textContent = empresa.name

        //dentro de body se coloca el cuerpo (llamado "description" dentro del JSON)
        body.textContent = empresa.description

        //hago append de cada una de las cards dentro del
        //div contenedor de las cards
        empresaCardContainer.append(card)

        //return de un objeto con los datos que necesito
        return {name: empresa.name, description: empresa.description, element: card}
    });

})