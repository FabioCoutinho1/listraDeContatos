const prompt = require("prompt-sync")();
const contatos = [];

while (true) {
  function addContatos(nome, numero, dd) {
    const infosContatos = { nome, numero, dd };
    contatos.push(infosContatos);
    console.log(contatos);
  }

  function pegarIfons() {
    let nomoInfo = prompt("Nome: ");
    let numeroInfo = parseInt(prompt("numeo:"));
    let ddInfo = prompt("DD: ");

    addContatos(nomoInfo, numeroInfo, ddInfo);
  }

  function filtrar() {
    const filtrarPorDd = contatos.filter((item) => item.dd === "55");
    console.log(filtrarPorDd)
  }

  let op = parseInt(prompt("escolha: "));

  if (op === 1) {
    pegarIfons();
  }

  if (op === 2) {
    console.log(contatos);
    filtrar()
  }

  if (op === 3) {
    break;
  }
}
