//as funções servem para executar tarefas que são chamadas por algum gatilho, nesse caso é chamada quando clica no botão que está no html
//tudo que ta dentro da função é o que vai acontecer quando o botão que chama ela for clicado
function InscreverEstudante(){
    //armazena em uma variavel o valor que o usuário digitar na janela de prompt que aparece quando clica no botão
    let idadeDoEstudante = prompt("Qual a idade do estudante?");
    if (idadeDoEstudante = 16 || 17) alert("VOCÊ É DO GRUPO A");
    if (idadeDoEstudante = 14 || 15) alert("VOCÊ É DO GRUPO B");
    if (idadeDoEstudante => 17) alert("VOCÊ NÃO PODE PARTICIPAR");
}



//LEIA ANTES DE COMEÇAR:
//Como não estamos usando banco de dados, toda vez que o site for recarregado o valor das variáveis volta a ser zero, não se preocupe com isso
//para realizar o calculo de quantos times podem ser feitos, use o parseInt() para forçar o resultado ser um número inteiro e ignorar as sobras do cálculo.

