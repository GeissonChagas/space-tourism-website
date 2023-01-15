const comandanteRadio = document.getElementById('radio1')
const especialistaRadio = document.getElementById('radio2')
const pilotoRadio = document.getElementById('radio3')
const engenheiraRadio = document.getElementById('radio4')


// Trocando slides com através do evento de click:

comandanteRadio.addEventListener('click', () => {
    window.location.href = './crew-commander.html'
})

especialistaRadio.addEventListener('click', () => {
    window.location.href = './crew-specialist.html'
})

pilotoRadio.addEventListener('click', () => {
    window.location.href = './crew-pilot.html'
})

engenheiraRadio.addEventListener('click', () => {
    window.location.href = './crew-engineer.html'
})






