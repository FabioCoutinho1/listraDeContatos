const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const caixaDosContatos = document.querySelector(".caixa_de_contatos");
const arrDosContatos = [];
// funções
const limparInputsEfocar = () => {
  inputs.forEach((i) => {
    i.value = "";
  });
};

const criarElemento = (nomeRecebido, numeroRecebido, areaRecebida) => {
  const contato = document.createElement("div");
  contato.className = "contato";
  // div do nome
  const divNome = document.createElement("div");
  divNome.className = "nome";
  const nome = document.createElement("h2");
  nome.innerHTML = nomeRecebido;
  divNome.appendChild(nome);
  contato.appendChild(divNome);
  //div do numero
  const divNumero = document.createElement("div");
  divNome.className = "numero";
  const numero = document.createElement("h2");
  numero.innerHTML = numeroRecebido;
  divNumero.appendChild(numero);
  contato.appendChild(divNumero);
  // div da area
  const divArea = document.createElement("div");
  divNome.className = "area";
  const area = document.createElement("h2");
  area.innerHTML = areaRecebida;
  divArea.appendChild(area);
  contato.appendChild(divArea);

  // botoes
  const divBotoes = document.createElement("div");
  divBotoes.className = "botoes";
  contato.appendChild(divBotoes);

  const botoaoDeletar = document.createElement("button");
  botoaoDeletar.className = "deletar";
  botoaoDeletar.innerHTML =
    '<span class="material-symbols-outlined">delete_forever </span>';
  divBotoes.appendChild(botoaoDeletar);

  const botaoEditar = document.createElement("button");
  botaoEditar.className = "editar";
  botaoEditar.innerHTML =
    '<span class="material-symbols-outlined">edit_note</span>';
  divBotoes.appendChild(botaoEditar);

  // todas as dives dentro do contato
  caixaDosContatos.appendChild(contato);
};

const desetruturarOsDados = (meuArry) => {
  meuArry.forEach((i) => {
    return i.nome, i.numero, i.area;
  });
};

// eventos
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  arrDosContatos.push(data);

  const { nome } = data;
  const { numero } = data;
  const { area } = data;
  console.log(arrDosContatos);
  console.log(nome, numero, area);

  limparInputsEfocar();
  criarElemento(nome, numero, area);
});
