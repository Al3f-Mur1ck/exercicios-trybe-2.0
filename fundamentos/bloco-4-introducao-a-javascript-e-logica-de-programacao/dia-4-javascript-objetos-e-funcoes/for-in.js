// 1 ao 4 //
let info = {
    personagem: ['Margarida', 'tio patinhas'],
    origem: ['Pato Donald', 'Christmas on Bear Mountain, Dells Four Color Comics #178'],
    nota: ['Namorada do personagem principal nos quadrinhos do Pato Donald', 'O último MacPatinhas'],
    recorrente: ['sim', 'Sim'],
};

console.log('Bem vinda', info['personagem']);

for (let key in info) {
    console.log(key);
    console.log(info[key])
}


    // 5 ao 8 //

    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
          {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
          },
        ],
      };    

      console.log("O Livro favorito de", leitor['nome'], leitor['sobrenome'], 'se chama', leitor['livrosFavoritos']);

    

