function generateToken(usuario, contraseña) {
    return usuario + Math.random() + contraseña;
}

function login(event){
    event.preventDefault()
    const user = document.getElementById('user').value
    const password = document.getElementById('password').value;

    if (user.value !== null && password !== null) {
        let token = generateToken(user, password);
        localStorage.setItem("token", token);
    }
    const theresAToken = tokenExists();
    if(theresAToken){
        const homeBtn = document.getElementById('toHomeBtn__container')
        homeBtn.innerHTML= `
        <a href="./home.html">Ver página</a>
        `
    }
}

function tokenExists() {
    if(localStorage.getItem('token') !== null){
        return true;
    } else {
        false;
    }
}


const loginBtn = document.getElementById('submitBtn')
loginBtn.addEventListener('click', login)