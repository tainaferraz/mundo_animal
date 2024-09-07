function pesquisar() {
    // Essa função é responsável por buscar dados e exibir os resultados na página.
    // Ela utiliza o array 'dados' (que não está definido neste exemplo) para gerar a lista de resultados.
  
    let section = document.getElementById
    ("resultados-pesquisa"); // Seleciona a seção onde os resultados serão exibidos.
   
    console.log(section); // Verifica se a seção foi encontrada.
  
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

//se campoPesquisa for uma string sem nada
//{if (campoPesquisa == "")
//section.innerHTML = "<p>Nada foi encontrado</p>
//return
//}

campoPesquisa = campoPesquisa.toLwerCase()

    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa.
  
    // Itera sobre cada dado na lista de dados e cria o HTML para cada item.
    for (let dado of dados) {
        // se titulo includes campoPesquisa
        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes*(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta"> ${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais informações</a>
            </div>`;
        }
        //então, faça...
        console.log(dado.titulo.includes (campoPesquisa))
     
    }
  
    // Atribui o HTML gerado para a seção de resultados.
    section.innerHTML = resultados;
  }
