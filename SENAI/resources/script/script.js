
// Enquanto é um laço de repetição que sempre irá "rodar" enquanto
// a condição passada for verdadeira.
// let contador = 0 
// while (contador <= 20) {
//     alert(contador);
//     console.log(contador);
//     contador = contador + 2

// }

// let nomes = ["Paula Ribeiro", "Ana Julia","Israel de Oliveira"];
// let indice = 0;
// let encerrar = 0;
// while (encerrar < nomes.length) {
//   console.log(nomes[indice]);
//   nomes.splice(indice, 1);
//   console.log(nomes);
// }

// let nomes = ["admin"];

// while (nomes.includes("admin")){
//     resposta = prompt("Digite seu nome para verificar se ele está na lista");
//     if (resposta == "admin") {
//         alert("O nome está correto");
//        break; 
//       } else {
//         alert("O nome não está correto, tente novamente");

//        }

// }
// console.log(resposta);

// let nomes = ["Paula Ribeiro","Ana Julia","Israel de Oliveira","Bruna Fernandes","Zacarias"];

// // ordena os itens do Array em ordem alfabética
// nomes.sort();

// // Cria a listagem de itens
// nomes.forEach(nome =>{
//     console.log(nome);
// })
// let indice = nomes.indexOf("Israel de Oliveira")
// nomes.splice(indice,1);

// console.log(nomes)



let receitas = ["Bolo de Cenoura", "Ovo Cozido", "Panqueca Americana", "Arroz Soltinho"];
let opcao = prompt("Escolha uma opção:\n1 - Excluir uma receita\n2 - Apenas ver a lista");
switch (opcao) {
    case "1":
        let receitaParaExcluir = prompt("Digite o nome exato da receita que quer apagar:");
        let posicao = receitas.indexOf(receitaParaExcluir);
        
        if (posicao !== -1) {
            receitas.splice(posicao, 1);
            alert("Receita excluída com sucesso!");
        } else {
            alert("Receita não encontrada!");
        }
        break;
        
    case "2":
        alert("Ok! Vamos mostrar a lista no console.");
        break;
        
    default:
        alert("Opção inválida!");
        break;
}
console.log("=== MINHAS RECEITAS ===");
receitas.forEach(function(receita) {
    console.log(receita);
});







