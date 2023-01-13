
const botao1 = document.getElementById('check1')
const botao2 = document.getElementById('check2')
const botao3 = document.getElementById('check3')

// Adicionando endereço aos botões da aba de tecnologia

botao1.addEventListener('click', () => {window.location.href="./technology-vehicle.html"})
botao2.addEventListener('click', () => {window.location.href="./technology-spaceport.html"})
botao3.addEventListener('click', () => {window.location.href="./technology-capsule.html"})