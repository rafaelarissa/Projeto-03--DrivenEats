let mudarCSS = {
    primeiroA: document.getElementById('primeiroA'),
    primeiroB: document.getElementById('primeiroB'),
    primeiroC: document.getElementById('primeiroC'),
    segundoD: document.getElementById('segundoD'),
    segundoE: document.getElementById('segundoE'),
    segundoF: document.getElementById('segundoF'),
    terceiroG: document.getElementById('terceiroG'),
    terceiroH: document.getElementById('terceiroH'),
    terceiroI: document.getElementById('terceiroI'),
    iconeA: document.getElementById('iconeA'),
    iconeB: document.getElementById('iconeB'),
    iconeC: document.getElementById('iconeC'),
    iconeD: document.getElementById('iconeD'),
    iconeE: document.getElementById('iconeE'),
    iconeF: document.getElementById('iconeF'),
    iconeG: document.getElementById('iconeG'),
    iconeH: document.getElementById('iconeH'),
    iconeI: document.getElementById('iconeI')
}

function apagarIcone() {
    mudarCSS.iconeA.classList.add('icone-desativado');
    mudarCSS.iconeB.classList.add('icone-desativado');
    mudarCSS.iconeC.classList.add('icone-desativado');
    mudarCSS.iconeD.classList.add('icone-desativado');
    mudarCSS.iconeE.classList.add('icone-desativado');
    mudarCSS.iconeF.classList.add('icone-desativado');
    mudarCSS.iconeG.classList.add('icone-desativado');
    mudarCSS.iconeH.classList.add('icone-desativado');
    mudarCSS.iconeI.classList.add('icone-desativado');
}

apagarIcone();

var confA, confB, confC, confD, confE, confF, confG, confH, confI;


function SelecionandoPrimeiroItemA() {
    console.log("clicou");
    mudarCSS.primeiroA.classList.add('selecionado');
    mudarCSS.primeiroC.classList.remove('selecionado');
    mudarCSS.primeiroB.classList.remove('selecionado');
    mudarCSS.iconeA.classList.remove('icone-desativado');
    mudarCSS.iconeB.classList.add('icone-desativado');
    mudarCSS.iconeC.classList.add('icone-desativado');
    confA = true;
    pratoSelecionado = document.getElementById('preco-prato-A');
    FecharPedido();
}


function SelecionandoPrimeiroItemB() {
    console.log("clicou");
    mudarCSS.primeiroB.classList.add('selecionado');
    mudarCSS.primeiroC.classList.remove('selecionado');
    mudarCSS.primeiroA.classList.remove('selecionado');
    mudarCSS.iconeB.classList.remove('icone-desativado');
    mudarCSS.iconeA.classList.add('icone-desativado');
    mudarCSS.iconeC.classList.add('icone-desativado');
    confB = true;
    pratoSelecionado = document.getElementById('preco-prato-B');
    FecharPedido();
}


function SelecionandoPrimeiroItemC() {
    console.log("clicou");
    mudarCSS.primeiroC.classList.add('selecionado');
    mudarCSS.primeiroA.classList.remove('selecionado');
    mudarCSS.primeiroB.classList.remove('selecionado');
    mudarCSS.iconeC.classList.remove('icone-desativado');
    mudarCSS.iconeB.classList.add('icone-desativado');
    mudarCSS.iconeA.classList.add('icone-desativado');
    confC = true;
    pratoSelecionado = document.getElementById('preco-prato-C');
    FecharPedido();
}

function SelecionandoSegundoItemD() {
    console.log("clicou");
    mudarCSS.segundoD.classList.add('selecionado');
    mudarCSS.segundoE.classList.remove('selecionado');
    mudarCSS.segundoF.classList.remove('selecionado');
    mudarCSS.iconeD.classList.remove('icone-desativado');
    mudarCSS.iconeE.classList.add('icone-desativado');
    mudarCSS.iconeF.classList.add('icone-desativado');
    confD = true;
    bebidaSelecionada = document.getElementById('preco-coca-D');
    FecharPedido();
}


function SelecionandoSegundoItemE() {
    console.log("clicou");
    mudarCSS.segundoE.classList.add('selecionado');
    mudarCSS.segundoD.classList.remove('selecionado');
    mudarCSS.segundoF.classList.remove('selecionado');
    mudarCSS.iconeE.classList.remove('icone-desativado');
    mudarCSS.iconeD.classList.add('icone-desativado');
    mudarCSS.iconeF.classList.add('icone-desativado');
    confE = true;
    bebidaSelecionada = document.getElementById('preco-coca-E');
    FecharPedido();
}


function SelecionandoSegundoItemF() {
    console.log("clicou");
    mudarCSS.segundoF.classList.add('selecionado');
    mudarCSS.segundoD.classList.remove('selecionado');
    mudarCSS.segundoE.classList.remove('selecionado');
    mudarCSS.iconeF.classList.remove('icone-desativado');
    mudarCSS.iconeD.classList.add('icone-desativado');
    mudarCSS.iconeE.classList.add('icone-desativado');
    confF = true;
    bebidaSelecionada = document.getElementById('preco-coca-F');
    FecharPedido();
}

function SelecionandoTerceiroItemG() {
    console.log("clicou");
    mudarCSS.terceiroG.classList.add('selecionado');
    mudarCSS.terceiroH.classList.remove('selecionado');
    mudarCSS.terceiroI.classList.remove('selecionado');
    mudarCSS.iconeG.classList.remove('icone-desativado');
    mudarCSS.iconeH.classList.add('icone-desativado');
    mudarCSS.iconeI.classList.add('icone-desativado');
    confG = true;
    sobremesaSelecionada = document.getElementById('preco-sobremesa-G');
    FecharPedido();
}


function SelecionandoTerceiroItemH() {
    console.log("clicou");
    mudarCSS.terceiroH.classList.add('selecionado');
    mudarCSS.terceiroG.classList.remove('selecionado');
    mudarCSS.terceiroI.classList.remove('selecionado');
    mudarCSS.iconeH.classList.remove('icone-desativado');
    mudarCSS.iconeG.classList.add('icone-desativado');
    mudarCSS.iconeI.classList.add('icone-desativado');
    confH = true;
    sobremesaSelecionada = document.getElementById('preco-sobremesa-H');
    FecharPedido();
}


function SelecionandoTerceiroItemI() {
    console.log("clicou");
    mudarCSS.terceiroI.classList.add('selecionado');
    mudarCSS.terceiroH.classList.remove('selecionado');
    mudarCSS.terceiroG.classList.remove('selecionado');
    mudarCSS.iconeI.classList.remove('icone-desativado');
    mudarCSS.iconeH.classList.add('icone-desativado');
    mudarCSS.iconeG.classList.add('icone-desativado');
    confI = true;
    sobremesaSelecionada = document.getElementById('preco-sobremesa-I');
    FecharPedido();
}

let botaoSumir = document.getElementById("idBotaoAtivado");
botaoSumir.classList.add("botao-desativado");


function FecharPedido() {
    console.log("teste");
    if (confA || confB || confC) {
        if (confD || confE || confF) {
            if (confG || confH || confI) {
                let botao = document.getElementById("idBotao");
                botao.classList.add("botao-desativado");
                let botaoAtivado = document.getElementById("idBotaoAtivado");
                botaoAtivado.classList.remove("botao-desativado");
                botaoAtivado.classList.add("selecionado-botao");
            }
        }
    }
}

var pratoSelecionado, bebidaSelecionada, sobremesaSelecionada;

function WhatsApp() {
    let pratoSelecionadoFloat = (parseFloat(pratoSelecionado.innerHTML)).toFixed(2);
    let bebidaSelecionadaFloat = (parseFloat(bebidaSelecionada.innerHTML)).toFixed(2);
    let sobremesaSelecionadaFloat = (parseFloat(sobremesaSelecionada.innerHTML)).toFixed(2);
    let soma = pratoSelecionadoFloat + bebidaSelecionadaFloat + sobremesaSelecionadaFloat;
    let total = parseFloat(soma).toFixed(2);
    // console.log(precoCoca);
    
    let str = `Olá, gostaria de fazer o pedido:\n- Prato: R$${pratoSelecionadoFloat}\n- 
    Bebida: R$${bebidaSelecionadaFloat}\n- Sobremesa: R$${sobremesaSelecionadaFloat}\nTotal: R$ ${total}`;
    let res = encodeURIComponent(str);
    
    window.location.href = "https://wa.me/?text=" + res;
}