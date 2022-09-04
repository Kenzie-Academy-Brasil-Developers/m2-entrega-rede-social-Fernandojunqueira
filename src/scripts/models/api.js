export class ApiRequests {

    static baseUrl = 'https://m2-rede-social.herokuapp.com/api/'
    static token = localStorage.getItem("@kenzieRedeSocial:token") || "";
    static headers = {
        "Content-Type": "application/json"
        // Authorization: `token ${this.token}`
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
            localStorage.setItem("@kenzieRedeSocial:token", JSON.stringify(res.token));
            if(typeof JSON.stringify(res.user_uuid) == 'string'){
            
                console.log('oi')
            }else{
                const modal = document.querySelector('.modal-wrapper')

                modal.classList.toggle('hidden')
            }
            return res;
          })
          .catch(err => console.log(err));
    
        return newUser;
      }
}

