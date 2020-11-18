
class UserView{
    render(model){
        let imagem = document.querySelector("#ImagemProfile")
        imagem.innerHTML = `
        <img src=${model.getAvatarUrl()}> 
        ` 
        document.body.appendChild(imagem); 
    
    }
}


