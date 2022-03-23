//criacao de cards V

function montagemCards(arrCards){

    const main= document.querySelector("main")    
    main.innerHTML=""
    for(let i = 0 ; i < arrCards.length ; i++){

        const div1= document.createElement("div")
        main.appendChild(div1)
        div1.classList="div"

        const figura= document.createElement("figure")
        div1.appendChild(figura)

        const imagem= document.createElement("img")
        figura.appendChild(imagem)
        imagem.src=arrCards[i].imagem

        const paragrafo= document.createElement("p")
        paragrafo.classList="pVitrine"
        div1.appendChild(paragrafo)
        paragrafo.innerText=arrCards[i].categoria

        const aga3= document.createElement("h3")
        div1.appendChild(aga3)
        aga3.innerText=arrCards[i].nome

        const span= document.createElement("span")
        div1.appendChild(span)
        span.innerText=arrCards[i].descricao

        const aga4= document.createElement("h4")
        div1.appendChild(aga4)    
        aga4.innerText="R$ " + arrCards[i].preco + ",00"

        const buttom= document.createElement("button")
        div1.appendChild(buttom)
        buttom.id=arrCards[i].Id
        buttom.classList="linkcard"
        buttom.innerText="Adicionar ao carrinho"
    }
}
montagemCards(cards)