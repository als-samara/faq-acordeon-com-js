const itensPerguntasERespostas = document.querySelectorAll(".item");

itensPerguntasERespostas.forEach(function (item) {
    item.addEventListener("click", function () {
        const itemAtivoAtual = document.querySelector(".ativo");

        if (itemAtivoAtual === this) {
            this.classList.remove("ativo");
        } else {
            if (itemAtivoAtual) {
                itemAtivoAtual.classList.remove("ativo");
            }
            this.classList.add("ativo");
        }
    });
});