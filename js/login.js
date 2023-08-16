const form = document.getElementById('form')

const ojo = document.getElementById('ojo')
const req = document.getElementsByClassName('req')

const email = document.getElementById('email')
const password = document.getElementById('password')

const errorPass = document.getElementById('errorPass')
const errorEmail = document.getElementById('errorEmail')

const ojoon = '<i class="fa-solid fa-eye" id="ojo"></i>'
const ojooff = '<i class="fa-solid fa-eye-slash 2" id="ojo"></i>'


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    localStorage.setItem('logged', true)
    window.location = "categories.html"
})

ojo.addEventListener('click',()=>{
    if(password.type === 'text'){
        password.type = 'password'
        ojo.innerHTML = ojoon
    }else{
        password.type = 'text'
        ojo.innerHTML = ojooff
    }
})

email.addEventListener('keydown',()=>{
    if(!email.checkValidity()){
        errorEmail.innerText = 'El email es requerido.'
    }else{
        errorEmail.innerText = ''
    }
    
})
password.addEventListener('keydown',()=>{
    if(password.value.length === 0){
        errorPass.innerText = 'La contraseña es requerida.'
    }else if(password.value.length < 6){
        errorPass.innerText = 'La contraseña debe ser mayor a 6'
    }else{
        errorPass.innerText = ''
    }

})
password.addEventListener('focusout',()=>{
    if(password.value.length === 0){
        errorPass.innerText = 'La contraseña es requerida.'
    }
})