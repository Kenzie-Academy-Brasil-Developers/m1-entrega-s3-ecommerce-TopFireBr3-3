// add carrinho  V


const divaide= document.querySelector(".central")

const buttonAdd = document.querySelectorAll(".linkcard");


function newItem(Id){

    for(let i = 0 ; i < cards.length ; i++){

        if(Id==cards[i].Id){ 



            const li= document.createElement("li")
            const figura= document.createElement("figure")
            const imagem= document.createElement("img")

            const section3= document.createElement("section")
            const aga3= document.createElement("h3")
            const paragrafo= document.createElement("p")
            const removeItem= document.createElement("button")
            removeItem.innerText="Remover do carrinho"




            li.appendChild(figura)
            figura.appendChild(imagem)
            li.appendChild(section3)
            section3.appendChild(aga3)
            section3.appendChild(paragrafo)
            section3.appendChild(removeItem)


            li.classList="posicionamentoTexto"
            figura.classList="figurecarrinho"
            li.id="li-"+cards[i].Id
            central.appendChild(li)

            li.classList="posicionamentoTexto"

            figura.classList="figurecarrinho"

            imagem.classList="imagemsscroll"
            imagem.src=cards[i].imagem

            section3.classList="divLista"

            aga3.innerText=cards[i].nome

            paragrafo.innerText="R$ "+cards[i].preco+",00"

            removeItem.classList="linkCarrinho"
            removeItem.id="remove-"+cards[i].Id

        }
    }
}


for(let i=0 ; i < buttonAdd.length ; i++){
    buttonAdd[i].addEventListener('click', () => {newItem(buttonAdd[i].id)
         contador=true})
}