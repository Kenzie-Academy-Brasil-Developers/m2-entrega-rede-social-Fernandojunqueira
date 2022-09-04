const btnLogin = document.getElementById('btnLogin')
const btnRegister = document.getElementById('btnRegister')

btnLogin.addEventListener('click', () => {
    const formLogin = document.querySelector('.login')
    const formRegister = document.querySelector('.register')
    formLogin.classList.toggle('hidden')
    formRegister.classList.toggle('hidden')
})
btnRegister.addEventListener('click', () => {
    const formLogin = document.querySelector('.login')
    const formRegister = document.querySelector('.register')
    formLogin.classList.toggle('hidden')
    formRegister.classList.toggle('hidden')
})