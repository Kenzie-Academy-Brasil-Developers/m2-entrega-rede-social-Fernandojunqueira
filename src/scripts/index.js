import { ApiRequests } from "./models/api.js"

//Botões de navegação e suas funcionalidades
const btnLogin = document.getElementById('btnLogin')
const btnRegister = document.getElementById('btnRegister')
const btnVoltar = document.querySelector('.register div > button')
const btnEntendi = document.querySelector('.modal > button')
const btnIrpagLogin = document.querySelector('.pgLogin')
console.log(btnIrpagLogin)
const btnIrpagRegister = document.querySelector('.pgRegister')

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
btnVoltar.addEventListener('click', () => {
    const formLogin = document.querySelector('.login')
    const formRegister = document.querySelector('.register')
    formLogin.classList.toggle('hidden')
    formRegister.classList.toggle('hidden')
})
btnEntendi.addEventListener('click',() =>{

    const modal = document.querySelector('.modal-wrapper')

    modal.classList.toggle('hidden')
})
btnIrpagRegister.addEventListener('click', (event) => {
    event.preventDefault()
    const formLogin = document.querySelector('.login')
    const formRegister = document.querySelector('.register')
    formLogin.classList.toggle('hidden')
    formRegister.classList.toggle('hidden')
})
btnIrpagLogin.addEventListener('click', (event) => {
    event.preventDefault()
    const formLogin = document.querySelector('.login')
    const formRegister = document.querySelector('.register')
    formLogin.classList.toggle('hidden')
    formRegister.classList.toggle('hidden')
})

//Buscando o body do register
class Buttons {

    static registerBtn(){
        const register = document.querySelector('.register > button')
        
        register.addEventListener('click', (event) => {
            event.preventDefault()
            
            const inputsRegister = document.querySelectorAll('.register > input')
            let valores = []
            inputsRegister.forEach( (element,index) => {
                valores.push(element.value)
            })
        
            let body = 
                {
                    username: valores[0], 
                    email: valores[1], 
                    password: valores[2],
                    work_at: valores[3],
                    image: valores[4]
                }
            
          ApiRequests.registerLogin(body)

        })    

    }

    static loginBtn(){
        const login = document.querySelector('.login > button')
        
        login.addEventListener('click', (event) => {
            event.preventDefault()
            
            const inputsLogin = document.querySelectorAll('.login > input')
            let valores = []
            inputsLogin.forEach( (element) => {
                valores.push(element.value)
            })
        
            let body = 
                {
                    email: valores[0], 
                    password: valores[1] 
                    
                }
            
          ApiRequests.login(body)

        }) 
    }
}
Buttons.registerBtn()
Buttons.loginBtn()
