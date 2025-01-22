const arr = [
  { nome: "fabio", numero: 10 },
  { nome: "pedro", numero: 9 },
  { nome: "julio", numero: 5 },
];



const newArr = arr.map((i) => i.nome);
newArr.forEach((i)=> console.log(i))