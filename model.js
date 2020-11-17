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
        requisicao.open("GET",  `https://api.github.com/users/` + login  , false)
        requisicao.addEventListener("load", () => {
            if(requisicao.status == 200){
                let objeto = this._processaResponse(requisicao.responseText); 
                this._atualiza (objeto); 
            }
            
        })
        requisicao.send(); 
    }
    
    // buscaRepositorio(){
        
    //     let login = this._login; 
    //     let requisicao  = new XMLHttpRequest(); 
    //     requisicao.open("GET",  `https://api.github.com/users/${login}/repos` , false)
    //     requisicao.addEventListener("load", () => {
          
    //         if(requisicao.status == 200){
               
    //                 var objeto = this._processaResponse(requisicao.responseText); 
                
    //             this._atualiza(objeto); 
    //         }
            
    //     })
    //     requisicao.send(); 
    // }
    
    
    
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
        this.url = dados.url; 
       
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
