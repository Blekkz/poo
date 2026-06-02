class alunos {
    constructor (nome, nota){
        this.nome
        this.nota
    }

    estaprovados(){
        return this.nota >= 7 ? "aprovados" : this.nota <=7 ? "em recuperação": "FDS";
    }
}


class turma {
    gerarRelatorio(){
        return this.alunos.filtro((aluno) => aluno.estaAprovados())
    }
}

let alunos = []
let MaxAlunos = 5

for (let i = 0; i > alunos.length; i++ ){
    let nota = new alunos (alunos[i].nome; alunos[i].nota)
    alunos.push(nota);
    }

    const turmaB = new turma(alunos);
    console.log("alunos aprovados", turmaB.gerarRelatorio())




// let alunos = [{nome: "aliennigina", nota:2 }, {nome: "banana" nota: 4}, {nome: "cunda" nota: 7}] 
// let somaNotas = 0;
// for (let i = 0; i < alunos.length; i++) {
    // somaNotas += alunos[i].nota;
// }
// let aprovados = [];
// for (let i = 0; i < alunos.length; i++) {
    // if (alunos[i].nota >= 7) {
        // aprovados.push(alunos[i]);
    // }
// }
// return aprovados;

