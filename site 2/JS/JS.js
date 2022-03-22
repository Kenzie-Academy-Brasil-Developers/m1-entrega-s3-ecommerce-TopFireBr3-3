const cards=[{
    nome:"Lightweight Jacket",
    Id:1,
    preco:100,
    descricao:"Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    categoria:"Camisetas",
    imagem:"./img/Men-Jacket-Front-Black__15466 1.png",
    filto:["Camisetas","R$100,00","Adicione","energia","guarda-roupa","inverno","jaqueta","vibrante","preto","1"]
    
},
{
    nome:"Black Hat",
    Id:2,
    preco:100,
    descricao:"O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    categoria:"Acessórios",
    imagem:"./img/image 1.png",
    filto:["Acessórios","R$100,00","gorro","Black","Next","beldade","bordado","confortável","preto","2"]
},
{
    nome:"Mask",
    Id:3,
    preco:40,
    descricao:"Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    categoria:"Acessórios",
    imagem:"./img/Surgical-Mask-Black__89554 1.png",
    filto:["Acessórios","R$40,00","máscara","facial","durável","camadas","tecido","presilhas","black","preto","3"]
},
{
    nome:"T-Shirt",
    Id:4,
    preco:100,
    descricao:"Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    categoria:"Camisetas",
    imagem:"./img/Men-TShirt-Black-Front__70046 1.png",
    filto:["Camisetas","preto","camisetas","R$100,00","t-shirt","guarda-roupa","intemporal","caimento","black","4"]
},
{
    nome:"Short-Sleeve T-Shirt",
    Id:5,
    preco:100,
    descricao:"Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    categoria:"Camisetas",
    imagem:"./img/mockup-a0dc2330__62146 1.png",
    filto:["preto", "camiseta", "camisetas", "básica", "guarda-roupa", "grosso", "R$100,00", "Short-Sleeve", "T-Shirt", "black", "5"]
},
{
    nome:"Champion Packable Jacket",
    Id:6,
    preco:100,
    descricao:"Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    categoria:"Camisetas",
    imagem:"./img/mockup-9b9894f1__67347 1.png",
    filto:["preto", "Protejer", "jaqueta", "Champion", "embalável", "poliéster", "camisetas", "R$100,00", "Packable", "black", "6"]
}]

// fazer imput do filtro F

// puxar filtro das cartas 
 function filtroIput(arrCards){
    for(let i = 0 ; i < arrCards.length ; i++){
        const filtro= arrCards[i].filtro
        const valueList = document.getElementById('valueList');
        const nameValue = valueList.value;
        textItem.innerText = nameValue;
        if(nameValue===filtro[i]){
            montagemCards(cards)
        }
    }
 }
//ascionar a montagem oltomatica das cartas montagemCards(arrCards)


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
         contador++})
}

//retirar itens V

const buttonRemuve = document.getElementById("central");
      buttonRemuve.addEventListener('click', remuveItens)
function remuveItens(event){
    let item=event.target.id.split("-")
    console.log(item)
    if(event.target.classList=="linkCarrinho"){
        document.getElementById("li-"+item[1]).remove()
        contador--
    }
}

//aparecer nada no carrinho ou a quantidade dentro do carrinho F



const section= document.getElementById("divaide")
let contador=0
if(contador>=1){

        //criacao
        
        const section4= document.createElement("section")
        const p1= document.createElement("p")
        const p2= document.createElement("p")
        const p3= document.createElement("p")
        const p4= document.createElement("p")

        //filhos

        section.appendChild(section4)
        section4.appendChild(p1)
        section4.appendChild(p2)
        section4.appendChild(p3)
        section4.appendChild(p4)

        //afiliacoes
        section4.id="resultado"

        p1.id="p1Resultados"
        p1.innerText="Quantidade:"
        p2.id="p2Resultados"
        p2.innerText="Total:"
        p3.id="p3numeros"
        p3.innerText="0"
        p4.id="p4numeros"
        p4.innerText="R$ 200,00"  

}else if(contador===0){
    //criacao

    const section1= document.createElement("section")
    const aga2= document.createElement("h2")
    const button=document.createElement("button")

    //filhos

    section.appendChild(section1)
    section1.appendChild(aga2)
    section1.appendChild(button)

    //afiliacoes
    section1.classList="vazio"
    aga2.innerText="Carrinho vázio"
    button.classList="carrinhoId"
    button.innerText="Adicione itens"

}




