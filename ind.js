class alunos {
    constructor (nome, nota){
        this._nome
        this._nota
    }

    estaprovados(){
       return this.nota >= 7 ? "aprovados" : this.nota <=7 ? "em recuperação": "FDS";
    }
}


class turma {
    constructor(listadealunos = []){
        this.alunos = listadealunos;
    }

    adicionarAluno(aluno){
        let novo_aluno = new alunos ("aliennigina", 2)
        this.alunos.push(novo_aluno);
    }
    
    gerarRelatorio(){
        return this.alunos.filter((aluno) => aluno.estaAprovados())
    }

    adicionarAlunosEmMassa(listaAlunos){
        listaAlunos.forEach(aluno => {
            this.adicionarAluno(aluno)
        });
    }
}

let listaAlunos = [
    {nome: "aliennigina", nota: 2},
    {nome: "banana", nota: 4},
    {nome: "cunda", nota: 7}
];

let alunosEstanciados = []
listaAlunos.forEach(aluno => {
    let aluno_novo = new alunos(aluno.nome, aluno.nota);
    cajuhub.adicionarAluno(aluno_novo);
    // alunosEstanciados.push(aluno_novo);
});

let novo_aluno = new alunos("novo aluno", 5);
let cajuhub = new turma();
cajuhub.adicionarAlunosEmMassa(alunosEstanciados);
cajuhub.adicionarAluno(novo_aluno);
console.log(cajuhub.alunos);
console.log("Alunos aprovados:", cajuhub.gerarRelatorio());





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

