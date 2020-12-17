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
       
        let montaUrl = document.querySelector("#conteudoUrl")
       
    
        let profileUsuario = document.querySelector("#conteudo")
       
        let arrayUrl = [] 
        
       
        profileUsuario.innerHTML = `<img src=${dados[0].owner.avatar_url}>`
        for(let i of dados){
            
            arrayUrl.push(`
           
            <a href="${i.html_url}"<br>${i.name}</a>
          
            `)
        }    
             
        montaUrl.innerHTML = arrayUrl.toString().split(',').join('')

    
        
      
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
    limpaCampos(){
        document.querySelector("#search").value = ""; 
      
    }
    
}

let controller = new UserController(); 
document.getElementById("buscarRepositorio").addEventListener("click", controller.adicionaImagem)
document.getElementById("buscarRepositorio").addEventListener("click", controller.limpaCampos)
var login = document.querySelector("#search")