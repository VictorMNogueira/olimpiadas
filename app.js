function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa =document.getElementById ("campo-pesquisa").value;

    //console.log(campoPesquisa)
  
 
    campoPesquisa = campoPesquisa.toLowerCase()

    //Se campoPesquisa for uma string vazia
    if(!campoPesquisa){
        //Então retorne
        section.innerHTML = "<p>Nada foi encontrado.</p><p>Você precisa digitar o nome do atleta ou esporte.</p>"
        return;
    }
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) da lista de dados (dados)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLocaleLowerCase();
        //Se o titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        //Então faça...
            // Concatena HTML para cada resultado, formatando o título, descrição e link
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
        // se resultado em braco
    }
    if(!resultados){
        //Então faça..
        resultados = "<p>Nada foi encontrado.</p>"
    }
    // Atribui a string com os resultados formatados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }