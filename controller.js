
class UserController{
    adicionaImagem(){
        let dados = new UserModel(login.value)
        dados.buscaImagem(); 
        
        let view = new UserView(); 
        view.render(dados); 
        
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
//let controllerRepos = new UserControllerRepositorio(); 
// document.getElementById("buscarRepositorio").addEventListener("click", controller.adicionaImagem)
document.getElementById("buscarRepositorio").addEventListener("click", controller.adicionaImagem)

var login = document.querySelector("#search")