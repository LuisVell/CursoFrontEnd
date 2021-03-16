const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
      rua: 'Rua central',
      numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
  }
  const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]

//Resposta 1
let { nome, endereco:{rua}, projetos, projetos:[,segundo] } = user
console.log(nome, rua, projetos, segundo)

//Resposta 2
let [res2a]=students
let [,,res2b]=students
let [,{name: res2c}]=students
console.log(res2a, res2b, res2c)
