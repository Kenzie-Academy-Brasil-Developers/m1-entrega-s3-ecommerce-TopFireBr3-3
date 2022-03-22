//retirar itens V

const buttonRemuve = document.getElementById("central");
      buttonRemuve.addEventListener('click', remuveItens)
function remuveItens(event){
    let item=event.target.id.split("-")
    console.log(item)
    if(event.target.classList=="linkCarrinho"){
        document.getElementById("li-"+item[1]).remove()
        //remover do arr de carrinho e atualizar a quantidade 
        p3.innerText=arrCarrinho.length-1
    }
}