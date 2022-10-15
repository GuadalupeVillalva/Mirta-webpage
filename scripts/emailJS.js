//botón para enviar formulario
const btn = document.getElementById("sendBtn");

//formulario
const form = document.getElementById("form");

//evento para enviar el formulario
form.addEventListener("submit", function (event){
  event.preventDefault();

  //cuando se apreta el botón enviar
  //cambia el texto a ENVIANDO
  btn.innerText = "ENVIANDO..";

  const serviceID = "default_service";
  const templateID = "template_ll45api";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
    //una vez envíado correctamente
    //el texto del botón se cambia a ENVIAR
      btn.innerText = "ENVIAR";
      //utilizo sweet alert para 
      //notificar que se envió correctamente
      Swal.fire({
        title: "Enviado correctamente",
        confirmButtonColor: "#805D93",
      });
    },
    //en caso de error
    //muestra el error en un alert
    (err) => {
      btn.value = "Enviar mensaje";
      alert(JSON.stringify(err));
    }
  );
});

export { btn, form };
