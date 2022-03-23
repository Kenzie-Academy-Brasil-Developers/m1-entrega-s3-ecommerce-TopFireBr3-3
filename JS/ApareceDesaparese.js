const section= document.getElementById("divaide")
if(contador===true){

   
        
        //criacao
        
        section.innerHTML=""

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
        section4.classList="Apagar"
        

        p1.id="p1Resultados"
        p1.innerText="Quantidade:"
        p2.id="p2Resultados"
        p2.innerText="Total:"
        p3.id="p3numeros"
        p3.innerText="0"
        p4.id="p4numeros"
        p4.innerText="R$ 200,00"  

        
    

}else if(contador===false){


    section.innerHTML=""
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