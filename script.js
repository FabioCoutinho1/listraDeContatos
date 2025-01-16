const botaoDeAdicionarContato = document.querySelector(".botao_add")
const botaoFecharModal = document.querySelector(".botao_cancelar")
const modal = document.querySelector("dialog")

botaoDeAdicionarContato.onclick = function () {
    modal.style.opacity = '0'
    modal.style.transform = 'translateX(-100px)'

    modal.showModal()

    setTimeout(() => {
        modal.style.opacity = '1'
        modal.style.transform = 'translateX(0)'
    }, 10)
}

botaoFecharModal.onclick = function () {
    modal.style.opacity = '0'
    modal.style.transform = 'translateX(-100px)'

    setTimeout(() => {
        modal.close()

    }, 500)

}