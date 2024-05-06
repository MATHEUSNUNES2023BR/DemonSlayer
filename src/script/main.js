const getPersonagem = document.querySelectorAll('.personagens__nav__lista__item')
const selecionarPersonagem = document.getElementById('selecionar--personagem')
getPersonagem.forEach((p)=>{
    p.addEventListener('click', (e)=>{
        const dataName = p.dataset.personagens
        selecionarPersonagem.src = `src/assets/personagens_exibicao/${dataName}.png`
    })
})
console.log('oi')