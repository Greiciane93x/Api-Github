class UserModel{
    constructor(login){
        this._login = login;
        if(this._login !== undefined){           
            this._login = login; 
        }
    
        this._id = "";
        this.avatar_url = ""; 
        this.repos_url = ""; 
        this.url = "";  
         
        
    }
    
    buscaImagem(){
        
        let login = this._login; 
        let requisicao  = new XMLHttpRequest(); 
        requisicao.open("GET",  `https://api.github.com/users/${login}` , false)
        requisicao.addEventListener("load", () => {
            
                if(requisicao.status == 200){
                    let objeto = this._processaResponse(requisicao.responseText); 
                    this._atualiza (objeto); 
                }else if(requisicao.status !=200 ){
                    throw new Error("Link AQUIIII")
                }
           
        })
        requisicao.send(); 
    }
    
    buscaRepositorio(){
        
        let login = this._login; 
        let requisicao  = new XMLHttpRequest(); 
        requisicao.open("GET",  `https://api.github.com/users/${login}/repos` , false)
        requisicao.addEventListener("load", () => {
          
            if(requisicao.status == 200){
               
                    var objeto = this._processaResponse(requisicao.responseText); 
                
                this._atualizaRepos (objeto); 
            }
            
        })
        requisicao.send(); 
    }
    
    
    
    _processaResponse(responseString){
        let response = JSON.parse(responseString); 
        return response; 
    }
    
    _atualiza (dados){
        
        this._login = dados.login; 
        this._html_url = dados.html_url; 
        this._id = dados.id;
        this.avatar_url = dados.avatar_url; 
        this.repos_url = dados.repos_url; 
        
    }
     _atualizaRepos (dadosRepos){
       for (let i of dadosRepos){
           let link = document.createElement("a");
           link.innerHTML = `Repositorio: <a href="${i.html_url}">${i.login}</a><br>` 
       }
        
        
    }

    // getLogin(){
    //     return this._login; 
    // }
    // getHtmlUrl(){
    //     return this.html_url; 
    // }
    
    getName(){
        return this._login; 
    }
    getUrl(){
        return this._html_url; 
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
    getUrlRepos(){
        return this._url; 
    }
    
}

class UserView{
    render(model){
        let imagem = document.querySelector("#ImagemProfile")
        imagem.innerHTML = `
        <img src=${model.getAvatarUrl()}> 
        ` 
        document.body.appendChild(imagem); 
        
        
    }
}


// class UserViewRepositorio{
//     renderRepositorio(model){
//         let repos = document.querySelector("#repositorio")
//         repos.innerHTML  = `
//         ` 
//         repos.href = model.getHtmlUrl()
//         document.body.appendChild(repos); 
//         console.log(repos)
        
//     }
// }

class UserController{
    adicionaImagem(){
        let dados = new UserModel(login.value)
        dados.buscaImagem(); 
        
        let view = new UserView(); 
        view.render (dados); 
        
    }
    
}

// class UserControllerRepositorio{
//     adicionaRepositorio(){
//         let dados = new UserModel(login.value)
//         dados.buscaRepositorio();
        
        
//         let view = new UserViewRepositorio(); 
//         view.renderRepositorio (dados);
//         console.log(view)
        
//     }
    
// }

let controller = new UserController(); 
 document.getElementById("buscarRepositorio").addEventListener("click", controller.adicionaImagem)
// document.getElementById("buscarRepositorio").addEventListener("click", controller.adicionaRepositorio)
// document.getElementById("buscarRepositorio").value="";
var login = document.querySelector("#search")