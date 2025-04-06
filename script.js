document.addEventListener("DOMContentLoaded", () => {
    const inputTarefa = document.getElementById("tarefaInput");
    const botaoAdicionar = document.getElementById("adicionarBtn");
    const listaTarefas = document.getElementById("listaTarefas");

    // Adicionar tarefa
    botaoAdicionar.addEventListener("click", () => {
        const textoTarefa = inputTarefa.value.trim();
        if (textoTarefa === "") {
            alert("Digite uma tarefa válida.");
            return;
        }

        const itemLista = document.createElement("li");
        itemLista.textContent = textoTarefa;

        // Marcar tarefa como concluída ao clicar
        itemLista.addEventListener("click", () => {
            itemLista.classList.toggle("concluida");
        });

        // Botão de remover
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.style.marginLeft = "10px";
        botaoRemover.addEventListener("click", () => {
            listaTarefas.removeChild(itemLista);
        });

        itemLista.appendChild(botaoRemover);
        listaTarefas.appendChild(itemLista);
        inputTarefa.value = "";
    });
});