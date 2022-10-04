function adicionaItem() {
    let elementoNovo = document.createElement("article")
    elementoNovo.classList.add("item")
    elementoNovo.onclick = removeItem
    let referencia = document.getElementById("container")
    referencia.insertAdjacentElement("beforeend", elementoNovo)
}

function removeItem(event) {
    event.target.remove()
}