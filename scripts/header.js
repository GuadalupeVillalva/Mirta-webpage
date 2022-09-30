//guardo en una constante el boton hamburguesa
const hamburgerMenu = document.querySelector(".hamburger-menu");

//evento para que el menú se despliegue
hamburgerMenu.addEventListener('click', () => {
    const menu = document.querySelector(".header__nav-menu");
    menu.classList.toggle("show")
    console.log('hola')
})

//guardo en una constante el boton para iniciar una conversación
const buttonConsulta = document.getElementById('buttonConsulta');

buttonConsulta.addEventListener('click', () => {
    Swal.fire({
        title: 'Iniciar chat',
        text: "¿Desea iniciar un chat por Whatsapp?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        confirmButtonColor: '#805D93',
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "https://wa.me/542216207720";
        }
      })
})