// VARIAVÉIS

var human = 'x'; // turn = 0
var computer = 'o'; // turn = 1
var compMove;
var turn = 0; // alterna entre 0 e 1 para alternar as voltas (turn)

var boardCheck; // função para verificar o valor em cada célula
var a1; // valor dentro de cada célula
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;

var checkWin; // função que verifica a placa para ganhar combo
var xWin = false; // verdadeiro se X ganhou
var oWin = false; // verdadeiro se O ganhou 
var velha = false;
var winAlert; // função que declara vencedor e reinicia o jogo

var newGame;
var clearBoard;


// COLOCA UM X OU O NA CAIXA QUANDO CLICADO. TÓPICOS.
var newGame = function () {
    $('td').one('click', function (event) {
        if (turn == 0) {
            $(this).text(human);
            boardCheck();
            checkWin();
            turn == 1;
            compMove();
            boardCheck();
            checkWin();
        }
    });
};


// INICIALIZA O JOGO - continue após var newGame
$(document).ready(function () {
    newGame();
});


// COMP MOVE AI DETECTA SE HÁ DOIS NA LINHA AO LADO DE UMA CÉLULA VAZIA E OS LUGARES SE MOVEM PARA LÁ
var compMove = function () {
    if (a1 == "" && ((a3 == "x" && a2 == "x") || 
                     (c3 == "x" && b2 == "x") || 
                     (c1 == "x" && b1 == "x") || 
                    (a3 == "o" && a2 == "o") || 
                    (c3 == "o" && b2 == "o") || 
                    (c1 == "o" && b1 == "o"))) {
        $('#a1').text("o");
        turn = 0;
    } else {
        if (a2 == "" && (((a1 == "x" && a3 == "x") ||
            (a1 == "o" && a3 == "o")) ||
            (c2 == "x" && b2 == "x" && (a1 == "" || c1 == "")) ||
            (c2 == "o" && b2 == "o") ||
            (c2 == "x" && b2 == "x") ||
            (b2 == "o" && b3 == "o" && c2 == "o" && (a1 == "x" || a2 == "x" || b1 == "x")))) {
            $('#a2').text("o");
            turn = 0;
        }
        else {
            if (a3 == "" && ((a1 == "x" && a2 == "x") ||
                (a1 == "o" && a2 == "o") ||
                (c1 == "x" && b2 == "x") ||
                (c1 == "o" && b2 == "o") ||
                ((c3 == "x" && b3 == "x") && (a1 == "" || c1 == "")) ||
                (c3 == "o" && b3 == "o"))) {
                $('#a3').text("o");
                turn = 0;
            }
            else {
                if (c3 == "" && ((c1 == "x" && c2 == "x") ||
                    (a1 == "x" && b2 == "x") ||
                    (a3 == "x" && b3 == "x") ||
                    (a1 == "o" && b1 == "o") ||
                    (a3 == "x" && b3 == "x" && (a1 == "" || c1 == "")))) {
                    $('#c3').text("o");
                    turn = 0;
                }
                else {
                    if (c1 == "" && ((c3 == "x" && c2 == "x" && (a1 == "" || a2 == "")) ||
                        (c3 == "x" && c2 == "x") ||
                        (c3 == "o" && c2 == "o") ||
                        (a3 == "x" && b2 == "x") ||
                        (a3 == "o" && b2 == "o") ||
                        (a1 == "x" && b1 == "x") ||
                        (a1 == "o" && b1 == "o") ||
                        (c3 == "x" && b2 == "x") ||
                        (c3 == "o" && b2 == "o"))) {
                        $('#c1').text("o");
                        turn = 0;
                    }
                        else {
                        if (c2 == "" && ((c3 == "x" && c1 == "x" && (a1 == "" || a3 == "")) ||
                            (c3 == "x" && c1 == "x") ||
                            (c3 == "o" && c1 == "o") ||
                            ((a2 == "x" && b2 == "x") && (a1 == "" || c1 == "")) ||
                            (a2 == "x" && b2 == "x") ||
                            (a2 == "o" && b2 == "o"))) {
                                $('#c2').text("o");
                                turn = 0;
                            }
                            else {
                            if (b1 == "" && ((b3 == "x" && b2 == "x") ||
                                (b3 == "o" && b2 == "o") ||
                                (a1 == "x" && c1 == "x") ||
                                (a1 == "o" && c1 == "o" && b2 == "x" && c3 == "x" && (b3 == "x" || c2 == "x" || a2 == "x")) ||
                                (a1 == "o" && c1 == "o"))) {
                                    $('#b1').text("o");
                                    turn = 0;
                                }
                                else {
                                if (b3 == "" && ((a3 == "x" && c3 == "x") ||
                                    (a3 == "o" && c3 == "o") ||
                                    (b2 == "x" && b1 == "x") ||
                                    (b2 == "o" && b1 == "o") ||
                                    (c1 == "x" && a3 == "x" && b2 == "o"))) {
                                        $('#b3').text("o");
                                        turn = 0;
                                    }
                                    else {
                                    if (b2 == "" && ((a3 == "x" && c1 == "x") ||
                                        (a3 == "o" && c1 == "o" && (b2 == "")) ||
                                        (c3 == "x" && a1 == "x") ||
                                        (c3 == "o" && a1 == "o") ||
                                        (b3 == "x" && b1 == "x") ||
                                        (b3 == "o" && b1 == "o") ||
                                        (c2 == "x" && a2 == "x") ||
                                        (c2 == "o" && a2 == "o") ||
                                        (a1 == "o" && a3 == "o"))) {
                                            $('#b2').text("o");
                                            turn = 0;
                                    }
                                        else { // SE NAO BLOQUEAR PARA GANHAR, ENTÃO JOGAR EM UM DESTES QUADRADOS
                                            if (b2 == "") {
                                                $('#b2').text("o");
                                                turn = 0;

                                            }
                                            else {
                                                if (a1 == "") {
                                                    $('#a1').text("o");
                                                    turn = 0;

                                                } else {
                                                    if (a2 == "") {
                                                        $('#a2').text("o");
                                                        turn = 0;

                                                    }
                                                    else {
                                                        if (c3 == "") {
                                                            $('#c3').text("o");
                                                            turn = 0;

                                                        }
                                                        else {
                                                            if (c2 == "") {
                                                                $('#c2').text("o");
                                                                turn = 0;

                                                            }
                                                            else {
                                                                if (b1 == "") {
                                                                    $('#b1').text("o");
                                                                    turn = 0;

                                                                }
                                                            }
                                                        }
                                                    }

                                                }
                                            
                                        }
                                    }
                                }
                            }
                        
                        }
                    }
                }
            }
        }
    }
 };


// CRIA UMA FUNÇÃO PARA DETECTAR O QUE ESTÁ EM CADA CAIXA DEPOIS DE CADA MOVIMENTO
    a1 = $('#a1').html();
    a2 = $('#a2').html();
    a3 = $('#a3').html();
    b1 = $('#b1').html();
    b2 = $('#b2').html();
    b3 = $('#b3').html();
    c1 = $('#c1').html();
    c2 = $('#c2').html();
    c3 = $('#c3').html();
};

// CRIA UMA FUNÇÃO PARA DETECTAR UMA VITÓRIA OU UM TIE
checkWin = function () { // CHECKS IF X WON
    if ((a1 == a2 && a1 == a3 && (a1 == "x")) || //primeira linha
    (b1 == b2 && b1 == b3 && (b1 == "x")) || //secunda linha
    (c1 == c2 && c1 == c3 && (c1 == "x")) || //terceira linha
    (a1 == b1 && a1 == c1 && (a1 == "x")) || //primeira coluna
    (a2 == b2 && a2 == c2 && (a2 == "x")) || //segunda colna
    (a3 == b3 && a3 == c3 && (a3 == "x")) || //terceira coluna
    (a1 == b2 && a1 == c3 && (a1 == "x")) || //diagonal 1
    (a3 == b2 && a3 == c1 && (a3 == "x")) //diagonal 2
    ) {
        xWin = true;
        winAlert();

    } else { // VERIFICAR SE O WON
        if ((a1 == a2 && a1 == a3 && (a1 == "o")) || //first row
        (b1 == b2 && b1 == b3 && (b1 == "o")) || //second row
        (c1 == c2 && c1 == c3 && (c1 == "o")) || //third row
        (a1 == b1 && a1 == c1 && (a1 == "o")) || //first column
        (a2 == b2 && a2 == c2 && (a2 == "o")) || //second column
        (a3 == b3 && a3 == c3 && (a3 == "o")) || //third column
        (a1 == b2 && a1 == c3 && (a1 == "o")) || //diagonal 1
        (a3 == b2 && a3 == c1 && (a3 == "o")) //diagonal 2
        ) {
            oWin = true;
            winAlert();

        } else { // VERIFICAÇÕES PARA O JOGO DE GRAVAÇÃO SE TODAS AS CÉLULAS FOR CHAMADAS
            if (((a1 == "x") || (a1 == "o")) && ((b1 == "x") || (b1 == "o")) && ((c1 == "x") || (c1 == "o")) && ((a2 == "x") || (a2 == "o")) && ((b2 == "x") || (b2 == "o")) && ((c2 == "x") || (c2 == "o")) && ((a3 == "x") || (a3 == "o")) && ((b3 == "x") || (b3 == "o")) && ((c3 == "x") || (c3 == "o"))) {
                velha = true;
                winAlert();
            }
        }
    }
};


// DECLARA QUEM GANHO
var winAlert = function () {
    if (xWin == true) {
        alert("Você ganhou!");
        location.reload();
        clearBoard(); // Isso não funciona
    } else {
        if (oWin == true) {
            alert("Desculpe, você perdeu!");
            location.reload();
            clearBoard(); // Isso não funciona
        } else {
            if (velha == true) {
                alert("Velha!");
                location.reload();
                clearBoard();
            }
        }
    }
};


// O BOTÃO NEWGAME APAGA O QUADRO, REINTE O JOGO E REDE OS VITÓRIOS
var clearBoard = $('#restart').click(function (event) {
    a1 = $('#a1').text("");
    b1 = $('#b1').text("");
    c1 = $('#c1').text("");
    a2 = $('#a2').text("");
    b2 = $('#b2').text("");
    c2 = $('#c2').text("");
    a3 = $('#a3').text("");
    b3 = $('#b3').text("");
    c3 = $('#c3').text("");
    xWin = false;
    oWin = false;
    newGame();
    location.reload(); // SEM ESTE, HÁ UM ERRO QUE COLOCA O MÚLTIPLO 0 EM TODOS OS JOGOS APÓS O PRIMEIRO
});

// AINDA PRECISA FIXAR:
// * Alerta para jogo de empate ou xWin aparece duas vezes
// * X pode substituir O's
// * Oportunidades perdidas para O ganhar
// * Quase nunca vamos ganhar humano
// * Limpar lógica para compMove