let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-rigth');
let numeros = document.querySelector('.d-1-3');




document.querySelectorAll('.teclado--botao').forEach(qBotao =>{
    qBotao.addEventListener('click',()=>{
        console.log(qBotao.getAttribute('data-key'));
    });
});




