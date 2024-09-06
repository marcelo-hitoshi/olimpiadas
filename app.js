function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    // Se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar o nome do atleta ou esporte</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `
        }
        
    }

    // Se resultados não receber nada, ou não foi encontrado
    if (!resultados) {
        resultados = "<p>Nada foi encontrado na base de dados</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}



