const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: " Qual é o objetivo principal que define a pontuação em uma partida de bocha?",
        alternativas: [
            {
                texto: " Lançar as bochas para que fiquem o mais próximo possível do balim.",
                afirmacao: [
                    "A excelência no jogo de bocha é medida pela precisão e pela capacidade de posicionar suas bolas em pontos estratégicos mais próximos ao alvo do que o seu oponente. ",
                    "O jogador que conseguir manter uma ou mais bochas mais próximas do balim ao final da rodada conquista os pontos correspondentes.",
                    "A pontuação depende diretamente da comparação entre as distâncias das bochas de cada equipe em relação ao balim, valorizando a técnica e o controle no arremesso."
                ]
            },
            {
                texto: " Lançar as bochas com força para retirar o maior número de bolas do adversário da cancha. ",
                afirmacao: [
                    "Embora a remoção de bolas adversárias seja uma tática importante , ela funciona como uma ferramenta para alcançar o objetivo principal, que é o de garantir a proximidade ao bolim. ",
                    "O arremesso com força, chamado de “tiro”, é uma jogada estratégica usada para eliminar uma vantagem momentânea do adversário.",
                    "Essa técnica deve ser usada com precisão e no momento certo, pois o excesso de força pode prejudicar o controle e afastar a própria bocha da zona de pontuação."
                ]
            }
        ]
    },
    {
        enunciado: " como se chama a bolinha pequena que se joga na cancha de bocha?",
        alternativas: [
            {
                texto: " Bocha Mestra. ",
                afirmacao: [
                    "No contexto do jogo, não existe uma bocha mestra; o termo 'bocha' designa as bolas maiores que são utilizadas pelos jogadores para pontuar.",
                    "A expressão pode causar confusão, mas nenhuma regra oficial da bocha reconhece esse nome como válido para o elemento central do jogo.",
                    "O jogo gira em torno do balim, e não de uma 'bocha mestra', sendo o balim o verdadeiro alvo das jogadas."
                ]
            },
            {
                texto: " Balim.",
                afirmacao: [
                    "Bolim é o ponto focal neutro da partida; a posição dele na cancha dita a estratégia e o valor de todas as outras jogadas subsequentes.",
                    "Ele é lançado antes das bochas e serve como referência para determinar qual jogador ou equipe pontuará.",
                    "A habilidade em posicionar as bochas próximas ao balim é o que define o sucesso e a pontuação na partida."
                ]
            }
        ]
    },
    {
        enunciado: " Ao final de uma rodada, como a pontuação é atribuída às equipes? ",
        alternativas: [
            {
                texto: " Ambas as equipes contam quantas bolas têm perto do bolim e a equipe com o maior número ganha 1 ponto.",
                afirmacao: [
                    "Este método de contagem não é utilizado, pois a bocha valoriza a superioridade posicional absoluta, não uma simples maioria de bolas próximas.",
                    "Na bocha, não há soma de pontos por maioria de bolas; a contagem depende exclusivamente da posição em relação ao balim.",
                    "A pontuação é determinada comparando a distância das bochas ao alvo, e não pela quantidade de bolas em torno dele."
                ]
            },
            {
                texto: " Apenas a equipe com a bocha mais próxima do bolim pontua, somando um ponto para cada bocha que esteja mais perto do alvo do que a melhor bocha adversária.",
                afirmacao: [
                    "O sistema de pontuação da bocha é exclusivo, pois garante que apenas o time em vantagem na rodada seja recompensado, podendo marcar múltiplos pontos dependendo do quão superior foi sua jogada.",
                    "Essa forma de pontuar valoriza a precisão e a estratégia, premiando a equipe que melhor controla a distância em relação ao balim.",
                    "Ao final de cada rodada, a contagem é feita comparando as posições das bochas; somente as mais próximas, até a primeira do adversário, somam pontos para o time vencedor."
                ]
            }
        ]
    },
    {
        Enunciado: "Durante uma rodada, qual é a regra que determina quem deve realizar o próximo lançamento?",
        alternativas: [
            {
                texto: "A equipe cuja bocha estiver mais longe do bolim deve jogar até que consiga posicionar uma bola mais perto que a do adversário. ",
                afirmacao: [
                    "A dinâmica do jogo é definida pela desvantagem posicional; a obrigação de jogar recai sobre a equipe que não detém o ponto, forçando-a a tentar reverter a situação.",
                    "Essa regra mantém o equilíbrio e o ritmo da partida, permitindo que cada equipe tenha a chance de melhorar sua posição até recuperar a vantagem.",
                    "Somente quando a equipe em desvantagem consegue colocar uma bocha mais próxima do balim, o direito de jogar volta para o time adversário."
                ]
            },
            {
                texto: "  As equipes jogam de forma estritamente alternada, uma bocha por vez, até que todas as bolas tenham sido lançadas.",
                afirmacao: [
                    "Um sistema de turnos fixos não se aplica à bocha, pois a estratégia do jogo depende da capacidade de responder diretamente à posição das bolas adversárias a cada momento.",
                    "Na bocha, o turno não é alternado automaticamente; ele é determinado pela posição das bolas em relação ao balim após cada jogada.",
                    "A alternância fixa reduziria a profundidade tática do jogo, que se baseia justamente na reação contínua e estratégica a cada lance do oponente."
                ]
            }
        ]
    },
    {
        Enunciado: " Qual termo descreve a jogada de precisão, onde o objetivo é rolar a bocha suavemente para posicioná-la perto do bolim? ",
        alternativas: [
            {
                texto: " pontear (rolar). ",
                afirmacao: [
                    "A ação de apontar é considerada a base técnica da bocha, exigindo cálculo, sensibilidade e controle para colocar a bola em uma posição vantajosa.",
                    "O jogador que aponta busca aproximar-se do balim com suavidade, utilizando o terreno e a força do arremesso de forma precisa.",
                    "Essa jogada é fundamental para construir a estratégia da equipe, pois define o posicionamento inicial e influencia todas as jogadas seguintes."
                ]
            },
            {
                texto: " atirar (bater). ",
                afirmacao: [
                    "O ato de bater a bocha corresponde a uma jogada ofensiva e de força, cujo intuito é desestruturar a jogada do adversário.",
                    "Ao atirar, o jogador busca remover uma bocha inimiga bem posicionada ou alterar o local do balim a seu favor.",
                    "Essa técnica requer precisão e potência, sendo usada em momentos estratégicos para reverter uma situação desfavorável."
                ]
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();