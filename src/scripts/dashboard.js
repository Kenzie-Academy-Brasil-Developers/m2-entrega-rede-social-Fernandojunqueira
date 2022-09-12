import { ApiRequests } from "./models/api.js"

export class Dashboard{
    
    static postForm = document.querySelector('.postForm') 
    static inputheader = document.querySelector('.postForm > input')   
    static textArea = document.querySelector('.postForm > textarea') 
    static btnPostForm = document.querySelector('.postForm > button')
    
    static consoles() {
        
        
        let btn = Dashboard.btnPostForm

        btn.addEventListener('click', (event) => {
        event.preventDefault()

        const body = {
            "title": Dashboard.inputheader.value,
            "description": Dashboard.textArea.value
        } 
    
    ApiRequests.post(body)
})
        
    }

}

Dashboard.consoles()
ApiRequests.AllPosts()