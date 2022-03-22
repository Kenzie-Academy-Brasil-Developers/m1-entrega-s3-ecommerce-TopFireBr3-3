//filtro  V

function filtroCategorias(event){
    const NewCards=[]
    const item= event.target
    if(item.dataset.tag === "Todos"){
         montagemCards(cards)
     }else{
        for(let i = 0 ; i < cards.length ; i++){
            if(cards[i].categoria.indexOf(item.dataset.tag) !== -1){
                NewCards.push(cards[i])  
            }
        }
        montagemCards(NewCards)
     }
    console.log(item)
}

const listaItens=document.getElementById("listaNav")
listaItens.addEventListener("click",filtroCategorias)