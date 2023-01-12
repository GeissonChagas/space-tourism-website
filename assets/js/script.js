const comandanteSlide   = document.getElementById('radio1')
const especialistaSlide = document.getElementById('radio2')
const pilotoSlide = document.getElementById('radio3')
const engenheiraSlide = document.getElementById('radio4')

comandanteSlide.addEventListener('click', (evento) =>{
    evento.preventDefault()
    window.location.href = "./crew-commander.html"
})

especialistaSlide.addEventListener('click', (evento) => {
    evento.preventDefault()
    window.location.href = "./crew-specialist.html"
})
