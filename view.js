
class UserView{
    render(model){
        let imagem = document.querySelector("#ImagemProfile")
        imagem.innerHTML = `
        <img src=${model.getAvatarUrl()}> 
        ` 
        document.body.appendChild(imagem); 
    
    }
}


 class UserViewRepositorio{
    renderRepositorio(model){
        let repos = document.querySelector("#repositorio")
        repos.innerHTML  = `
        ` 
        
      



   
    }
}
