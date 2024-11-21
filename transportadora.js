const prompt = require("prompt-sync")();

class Transportadora {
    constructor() {
        this.registroCaminhoes = [];
        this.registroMotorista = [];
        this.registroEncomendas = [];
    }

    adicionarCaminhoes() {
        const idCaminhao = parseInt(prompt("Digite o ID do caminhão: "));
        const tipoCaminhao = prompt("Digite o tipo do caminhão: ");
        const quantidadeCarga = parseFloat(prompt("Qual a quantidade de carga que o caminhão suporta?: "));

        if (idCaminhao) {
            this.registroCaminhoes.push({ id: idCaminhao, tipo: tipoCaminhao, carga: quantidadeCarga });
            console.log(`Caminhão com o ID ${idCaminhao} do tipo ${tipoCaminhao} suportando ${quantidadeCarga} de carga foi adicionado.`);
        } else {
            console.log("Dados para o caminhão estão inválidos.");
        }
    }

    adicionarMotorista() {
        const nome = prompt("Qual é o nome do motorista?: ");
        const idMotorista = parseInt(prompt("Digite o ID do motorista: "));
        const idCaminhao = parseInt(prompt("Qual o ID do caminhão que deseja pilotar?"));

        const caminhaoEncontrado = this.registroCaminhoes.find(caminhao => caminhao.id === idCaminhao);

        if (nome && idMotorista) {
            if (caminhaoEncontrado) {
                this.registroMotorista.push({ nome, idMotorista, idCaminhao });
                console.log(`Motorista ${nome} (ID: ${idMotorista}) foi associado ao caminhão ${idCaminhao}.`);
            } else {
                console.log("Caminhão não encontrado. Cadastre o caminhão primeiro.");
                this.adicionarCaminhoes();
                this.adicionarMotorista();
            }
        } else {
            console.log("Dados do motorista inválidos.");
        }
    }
    adicionarEncomenda() {
        const idEncomenda = parseInt(prompt("Informe o ID da encomenda: "));
        const pesoEncomenda = parseFloat(prompt("Digite o peso da encomenda: "));
        const idCaminhao = parseInt(prompt("Informe o ID do caminhão para esta encomenda: "));

        const caminhaoEncontrado = this.registroCaminhoes.find(caminhao => caminhao.id === idCaminhao);

        if (caminhaoEncontrado) {
            if (pesoEncomenda <= caminhaoEncontrado.carga) {
                this.registroEncomendas.push({ idEncomenda, pesoEncomenda, idCaminhao });
                console.log(`Encomenda ${idEncomenda} foi atribuída ao caminhão ${idCaminhao}.`);
            } else {
                console.log(" O CAMINHÃO NÃO SUPORTA ESTÁ CARGA! .");
            }
        } else {
            console.log("Caminhão não encontrado.");
        }
    }

    listarCaminhoes() {
        this.registroCaminhoes.forEach((caminhao, index) => {
            console.log(`[${index}] ID: ${caminhao.id}, Tipo: ${caminhao.tipo}, Capacidade: ${caminhao.carga}`);
        });
    }

    listarMotoristas() {
        this.registroMotorista.forEach((motorista, index) => {
            console.log(`[${index}] Nome: ${motorista.nome}, ID: ${motorista.idMotorista}, Caminhão: ${motorista.idCaminhao}`);
        });
    }

    listarEncomendas() {
        this.registroEncomendas.forEach((encomenda, index) => {
            console.log(`[${index}] ID Encomenda: ${encomenda.idEncomenda}, Peso: ${encomenda.pesoEncomenda}, Caminhão: ${encomenda.idCaminhao}`);
        });
    }

}

const transportadora = new Transportadora();

let sair = false
do {
    console.log("=== TRANSPORTADORA DE CAMINHÕES ===")
    console.log("=== ATENÇÃO NAS OPÇÕES! ===")
    console.log("[1] ADICIONAR NOVO CAMINHÃO ")
    console.log("[2] ADICIONAR NOVO MOTORISTA")
    console.log("[3] ADICIONAR ENCOMENDA E ATRIBUI-LÁ A UM CAMINNHÃO CADASTRADO")
    console.log("[4] LISTAR TODOS OS MOTORISTAS")
    console.log("[5] LISTAR TODOS OS CAMINHÕES")
    console.log("[6] LISTAR TODAS AS ENCOMENDAS")
    console.log("[7] SAIR")
    let escolha = parseInt(prompt("Escolha uma opção: "));
    switch (escolha) {

        case 1:
            transportadora.adicionarCaminhoes();
            break;

        case 2:
            transportadora.adicionarMotorista();
            break;

        case 3:
            transportadora.adicionarEncomenda();
            break;

        case 4:
            transportadora.listarMotoristas();

            break;

        case 5:
            transportadora.listarCaminhoes();
            break;

        case 6:
            transportadora.listarEncomendas();
            break;

        case 7:
            sair = true
            console.log("Até a próxima...")

            break;

        default:
            console.log("Opção invalida tente novamente.")
            break;


    }
}
while (!sair)

    