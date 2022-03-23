const cards = [{
    nome: "Lightweight Jacket",
    Id: 1,
    preco: 100,
    descricao: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    categoria: "Camisetas",
    imagem: "/site 2/img/Men-Jacket-Front-Black__15466 1.png",
    filto: ["Camisetas", "R$100,00", "Adicione", "energia", "guarda-roupa", "inverno", "jaqueta", "vibrante", "preto", "1"]

},
{
    nome: "Black Hat",
    Id: 2,
    preco: 100,
    descricao: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    categoria: "Acessórios",
    imagem: "/site 2/img/image 1.png",
    filto: ["Acessórios", "R$100,00", "gorro", "Black", "Next", "beldade", "bordado", "confortável", "preto", "2"]
},
{
    nome: "Mask",
    Id: 3,
    preco: 40,
    descricao: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    categoria: "Acessórios",
    imagem: "/site 2/img/Surgical-Mask-Black__89554 1.png",
    filto: ["Acessórios", "R$40,00", "máscara", "facial", "durável", "camadas", "tecido", "presilhas", "black", "preto", "3", "Mask"]
},
{
    nome: "T-Shirt",
    Id: 4,
    preco: 100,
    descricao: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    categoria: "Camisetas",
    imagem: "/site 2/img/Men-TShirt-Black-Front__70046 1.png",
    filto: ["Camisetas", "preto", "camisetas", "R$100,00", "t-shirt", "guarda-roupa", "intemporal", "caimento", "black", "4"]
},
{
    nome: "Short-Sleeve T-Shirt",
    Id: 5,
    preco: 100,
    descricao: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    categoria: "Camisetas",
    imagem: "/site 2/img/mockup-a0dc2330__62146 1.png",
    filto: ["preto", "camiseta", "camisetas", "básica", "guarda-roupa", "grosso", "R$100,00", "Short-Sleeve", "T-Shirt", "black", "5"]
},
{
    nome: "Champion Packable Jacket",
    Id: 6,
    preco: 100,
    descricao: "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    categoria: "Camisetas",
    imagem: "/site 2/img/mockup-9b9894f1__67347 1.png",
    filto: ["preto", "Protejer", "jaqueta", "Champion", "embalável", "poliéster", "camisetas", "R$100,00", "Packable", "black", "6"]
}]

// fazer imput do filtro F


// puxar filtro das cartas 
function filtroIput() {
    const imput = document.getElementById("valueList")


    let ToDoList = cards.filter(function (card) {
        return card.filto.includes(imput.value)
        
    })

    montagemCards(ToDoList)
}
//ascionar a montagem oltomatica das cartas montagemCards(arrCards)
const buttomFilto = document.getElementById("insertIten")
console.log(buttomFilto)
buttomFilto.addEventListener("click", filtroIput)



//criacao de cards V

function montagemCards(arrCards) {

    const main = document.querySelector("main")
    main.innerHTML = ""
    for (let i = 0; i < arrCards.length; i++) {

        const div1 = document.createElement("div")
        main.appendChild(div1)
        div1.classList = "div"

        const figura = document.createElement("figure")
        div1.appendChild(figura)

        const imagem = document.createElement("img")
        figura.appendChild(imagem)
        imagem.src = arrCards[i].imagem

        const paragrafo = document.createElement("p")
        paragrafo.classList = "pVitrine"
        div1.appendChild(paragrafo)
        paragrafo.innerText = arrCards[i].categoria

        const aga3 = document.createElement("h3")
        div1.appendChild(aga3)
        aga3.innerText = arrCards[i].nome

        const span = document.createElement("span")
        div1.appendChild(span)
        span.innerText = arrCards[i].descricao

        const aga4 = document.createElement("h4")
        div1.appendChild(aga4)
        aga4.innerText = "R$ " + arrCards[i].preco + ",00"

        const buttom = document.createElement("button")
        div1.appendChild(buttom)
        buttom.id = arrCards[i].Id
        buttom.classList = "linkcard"
        buttom.innerText = "Adicionar ao carrinho"

    }
}
montagemCards(cards)

//filtro  V

function filtroCategorias(event) {
    const NewCards = []
    const item = event.target
    if (item.dataset.tag === "Todos") {
        montagemCards(cards)
    } else {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].categoria.indexOf(item.dataset.tag) !== -1) {
                NewCards.push(cards[i])
            }
        }
        montagemCards(NewCards)
    }
    console.log(item)
}

const listaItens = document.getElementById("listaNav")
listaItens.addEventListener("click", filtroCategorias)





// add carrinho  V


const central = document.getElementById("central")

const buttonAdd = document.querySelectorAll(".linkcard");


function newItem(Id) {

    for (let i = 0; i < cards.length; i++) {

        if (Id == cards[i].Id) {



            const li = document.createElement("li")
            const figura = document.createElement("figure")
            const imagem = document.createElement("img")

            const section3 = document.createElement("section")
            const aga3 = document.createElement("h3")
            const paragrafo = document.createElement("p")
            const removeItem = document.createElement("button")
            removeItem.innerText = "Remover do carrinho"




            li.appendChild(figura)
            figura.appendChild(imagem)
            li.appendChild(section3)
            section3.appendChild(aga3)
            section3.appendChild(paragrafo)
            section3.appendChild(removeItem)


            li.classList = "posicionamentoTexto"
            figura.classList = "figurecarrinho"
            li.id = "li-" + cards[i].Id
            central.appendChild(li)

            li.classList = "posicionamentoTexto"

            figura.classList = "figurecarrinho"

            imagem.classList = "imagemsscroll"
            imagem.src = cards[i].imagem

            section3.classList = "divLista"

            aga3.innerText = cards[i].nome

            paragrafo.innerText = "R$ " + cards[i].preco + ",00"

            removeItem.classList = "linkCarrinho"
            removeItem.id = "remove-" + cards[i].Id

        }
    }
}





for (let i = 0; i < buttonAdd.length; i++) {
    buttonAdd[i].addEventListener('click', () => {
        contador++
        numeros.innerText=contador
        //if (contador <= 2) {
        addcontador(contador)
        //}
        newItem(buttonAdd[i].id)
    })
}

//retirar itens V

const buttonRemuve = document.querySelector("body");
buttonRemuve.addEventListener('click', remuveItens)

function remuveItens(event) {
    let item = event.target.id.split("-")

    if (event.target.classList == "linkCarrinho") {
        document.getElementById("li-" + item[1]).remove()
        contador--
        numeros.innerText=contador
        addcontador(contador)
    }

}

//aparecer nada no carrinho ou a quantidade dentro do carrinho F



const section = document.getElementById("divaide")
let contador = 0
addcontador(contador)
function addcontador(contador) {

    console.log(contador)
    if (contador >= 1) {

        document.getElementById("vazio-show").classList = "vazio-hide"
        document.getElementById("resultado").classList = "resultado-show"

        //criacao
        const ul = document.createElement("ul")
        const scroll = document.createElement("section")

        const section4 = document.createElement("section")
        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")
        const p4 = document.createElement("p")
        console.log(contador)
        //filhos
        section.appendChild(scroll)
        scroll.appendChild(ul)
        section.appendChild(section4)
        section4.appendChild(p1)
        section4.appendChild(p2)
        section4.appendChild(p3)
        section4.appendChild(p4)

        //afiliacoes

        ul.classList = "central"
        ul.id = "central"

        scroll.classList = "scroll"
        scroll.id = "scroll"

        section4.id = "resultado"

    } else {
        document.getElementById("vazio-show").classList = "vazio-show"
        document.getElementById("resultado").classList = "resultado-hide"

    }
}

//quantidade

const numeros=document.getElementById("p3numeros")
