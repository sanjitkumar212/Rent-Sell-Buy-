let add_to_card_btns  = document.getElementsByClassName('btn')
for(let i=0;i<add_to_card_btns.length;i++){
    add_to_card_btns[i].addEventListener('click', addToCart)
}

function addToCart(event){

    let btn = event.target
    let btn_parent = btn.parentElement
    let btn_grandparent = btn.parentElement.parentElement

    let itemName = btn_parent.children[0].innerText
    let itemPrice = btn_parent.children[1].innerText
    let itemImage = btn_grandparent.children[0].src

    let itemContainer = document.createElement()
}