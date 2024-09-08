function pesquisar() {
    // seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // imprime a seção no console para verificar se foi selecionada corretamente
    console.log(campoPesquisa);
  
    // inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    //let tags = "";

    if(campoPesquisa ==""){
      section.innerHTML = "<p>Por favor, digite seu mangá.</p>";
      return;
    }
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // itera sobre cada dado da lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      //tags = dado.tags.toLowerCase();
      if(titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa)/*||tags.includes(campoPesquisa)*/){
          // cria um novo elemento div para cada dado e adiciona as informações
          resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">
              <h3>${dado.autora}</h3><br>
              ${dado.descricao}
            </p>
          </div>
        `;
      }
    }
  
    // atribui a string com os resultados ao conteúdo da seção
    section.innerHTML = resultados;
  }
  //console.log(dados);