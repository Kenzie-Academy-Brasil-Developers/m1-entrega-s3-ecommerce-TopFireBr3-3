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