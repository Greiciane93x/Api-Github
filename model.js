class UserModel{
    constructor(login){
        this._login = login;
        this._id = "";
        this.avatar_url = ""; 
        this.repos_url = ""; 
        this.url = "";  
        
    }
    
    buscaImagem(){
        
        let login = this._login; 
        let requisicao  = new XMLHttpRequest(); 
        requisicao.open("GET",  `https://api.github.com/users/` + login + `/repos`  , false)
        requisicao.addEventListener("load", () => {
           try{
            if(requisicao.status == 200){
                let objeto = this._processaResponse(requisicao.responseText); 
                this._atualiza (objeto); 
            }else if (requisicao.status == 400){
                throw new Error("Usuário Inexistente")
            }
        }catch(err){
            console.log(err.message)
        }
            
        })
        requisicao.send(); 
    }
    

    _processaResponse(responseString){
        let response = JSON.parse(responseString); 
        return response; 
    }
    
    _atualiza (dados){
              
        let montaUsuario = document.querySelector("body")
        let profileUsuario = document.createElement("div")
       
        
        montaUsuario.appendChild(profileUsuario)
        profileUsuario.innerHTML = `<img src=${dados[0].owner.avatar_url}>`
        for(let i of dados){

            let Repositorios = document.createElement("a"); 
            montaUsuario.appendChild(Repositorios)
            Repositorios.innerHTML =
            `
            <a href="${i.html_url}"></td>
            ${i.name}</a>
           
            `

        }
    }
  

    getLogin(){
        return this._login; 
    }
    getHtmlUrl(){
        return this.html_url; 
    }
    getId(){
        return this._id; 
    }
    getAvatarUrl(){
        return this.avatar_url; 
    }
    getReposUrl(){
        return this.repos_url; 
    }
    getUrl(){
        return this._url; 
    }
    
}


class UserController{
    adicionaImagem(){
        let dados = new UserModel(login.value)
        dados.buscaImagem(); 
        
    }
    
}

let controller = new UserController(); 
document.getElementById("buscarRepositorio").addEventListener("click", controller.adicionaImagem)
var login = document.querySelector("#search")