export class ApiRequests {

    static baseUrl = 'https://m2-rede-social.herokuapp.com/api/'
    static token = localStorage.getItem("@kenzieRedeSocial:token") || "";
    static headers = {
        "Content-Type": "application/json",
        "Authorization": `Token ${this.token}`
    }

    static async registerLogin(body) {
        const newUser = await fetch(`${this.baseUrl}users/`, {
          method: "POST",
          headers: this.headers,
          body: JSON.stringify(body)
        })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            return res;
          })
          .catch(err => console.log(err));
    
        return newUser;
      }

      static async login(body) {
        const newUser = await fetch(`${this.baseUrl}users/login/`, {
          method: "POST",
          headers: this.headers,
          body: JSON.stringify(body)
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem("@kenzieRedeSocial:token", res.token); 
            if(typeof JSON.stringify(res.user_uuid) == 'string'){
            
                window.location.assign('src/pages/dashboard.html')
            }else{
                const modal = document.querySelector('.modal-wrapper')

                modal.classList.toggle('hidden')
            }
            return res;
          })
          .catch(err => console.log(err));
    
        return newUser;
      }

      static async post(body){

        
        const newPost = await fetch(`${this.baseUrl}posts/`,{
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => console.log(res))

        return newPost
      }

      static async AllPosts(){

        const allPosts = await fetch(`${this.baseUrl}posts/`,{
          method: 'GET',
          headers: this.headers
        })
        .then(res => res.json())
        .then(res => 
          res.results.forEach(element => {

            const sectionAllPost = document.querySelector('.all-posts')
            

            sectionAllPost.insertAdjacentHTML('afterbegin',`<article>
            <div class="flex mt-1 gap-6">
                <figure>
                    <img src=${element.author.image} alt="Foto perfil" class = 'profile-picture'>
                </figure>
                <main class="flex align-itens column gap-7">
                    <h2 class="font-text-1-mobile color-primary mr-8">${element.author.username}</h2>
                    <p class="font-text-4 color-primary">${element.author.work_at}</p>
                </main>
            </div>
            <h2 class="font-title-1 line-height mt-3">${element.title}</h2>
            <p class="mt-5 line-height-1 font-text-1 mb-3">${element.description}</p>
            <div class="flex align-itens">
                <button class="button color-white  bg-color-grey-0 font-text-3 mr-3">Abrir Post</button>
                <img src="../assets/heartBlack.png" alt="">
                <span class="ml-7">${element.likes.length}</span>
            </div>
        </article>`) 


            
          })
          )
      }

      static async suggestions(){
        
        

        const allPosts = await fetch(`${this.baseUrl}users/`,{
          method: 'GET',
          headers: this.headers
        })
        .then(res => res.json())
       .then(res => res.results.forEach(element => {
          
        const ul = document.querySelector('.suggestions__follow--list')

          ul.insertAdjacentHTML('afterbegin',`<li>
          <div class="flex mt-1 gap-6">
              <figure>
                  <img src=${element.image} alt="Foto perfil" class = 'profile-picture'>
              </figure>
              <main class="flex align-itens column gap-7">
                  <h2 class="font-text-1-mobile color-primary mr-8">${element.username}</h2>
                  <p class="font-text-4 color-primary">${element.work_at}</p>
              </main>
          </div>
          <button class="button-white-fixed suggestions__follow">Seguindo</button>
      </li>`) 
        }))
      }
      
}
ApiRequests.AllPosts()
ApiRequests.suggestions()
// console.log(ApiRequests.token)
