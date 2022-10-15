//función para generar token
function generateToken(usuario, contraseña) {
    //retorna como token la suma del usuario ingresado + 
    //número random entre el 0 y el 1 + contraseña ingresada
    return usuario + Math.random() + contraseña;
}


//función para loguear
function login(event){
    //previene que la página se recargue cada vez que el form se envía
    event.preventDefault()

    //guardo en variable el input de user
    const user = document.getElementById('user').value

    //guardo en variable el input de password
    const password = document.getElementById('password').value;

    //siempre y cuando los campos de usuario y contraseña no
    //sean nulos se ejecuta la siguiente línea de código
    if (user.value !== null && password !== null) {
        //guardo en variable el token generado
        let token = generateToken(user, password);

        //guardo en local storage el token generado
        localStorage.setItem("token", token);
    }

    //creo una variable para validar si el token existe
    const theresAToken = tokenExists();

    //si el token existe se muestra un botón 
    //que te lleva a la página principal
    if(theresAToken){
        const homeBtn = document.getElementById('toHomeBtn__container')
        homeBtn.innerHTML= `
        <a href="./home.html">Ver página</a>
        `
    }
}


//función para verificar si hay un token almacenado en local storage
function tokenExists() {
    if(localStorage.getItem('token') !== null){
        return true;
    } else {
        false;
    }
}

//guardo en variable el botón para que el logeo se cumpla
const loginBtn = document.getElementById('submitBtn')

//le doy función a ese botón con la función anterior "login"
loginBtn.addEventListener('click', login)