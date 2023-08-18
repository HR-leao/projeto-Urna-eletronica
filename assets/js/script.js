let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-rigth');
let numeros = document.querySelector('.d-1-3');



let etapaAtual = 0;
let numero = '';
let votoBranco = false;
let votos = [];


function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';

    for(let i=0; i< etapa.numeros; i++){
        if(i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';
        }else {
            numeroHtml += '<div class="numero"></div>';
        }
        

        
    }
    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
} 


comecarEtapa()


function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });
    console.log(candidato)
    if(candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;
        let fotosHtml = '';
        for(let i in candidato.fotos) {
            if(candidato.fotos[i].small) {
                fotosHtml += `<div class="d-1-image small"><img src="images/${candidato.fotos[i].url}" alt="" />${candidato.fotos[i].legenda}</div>`;
            } else {
                fotosHtml += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="" />${candidato.fotos[i].legenda}</div>`;
            }
        }
        lateral.innerHTML = fotosHtml;
    } else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
    }
}


function clicou (e) {
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null) {
        elNumero.innerHTML = e;
        numero = `${numero} ${e}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca')
        }else {
            atualizaInterface();
        }
        
    }
}


function branco () {
    console.log('Clicou em BRANCO')
}

function corrige () {
    console.log('Clicou em CORRIGE')
}

function confirma () {
    console.log('Clicou em CONFIRMA')
}



























