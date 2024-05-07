const getPersonagem = document.querySelectorAll('.personagens__nav__lista__item')
const selecionarNome = document.querySelector('.selecionado__dados__name')
const respiracao = document.getElementById('Respiracao')
const categoria = document.getElementById('Categoria')
const personagensNomes = [
    {tanjiro: 'Tanjiro Kamado', respiracao: 'Sol e Água'},
    {nezuko: 'Nezuko Kamado', tipo: 'Humana/Oni'},
    {zenitsu: 'Zenitsu Agatsuma', respiracao: 'Trovão'},
    {inosuke: 'Inosuke Hashibira', respiracao: 'Fera'},
    {kanao: 'Kanao Tsuyuri', respiracao: 'Flores'},
    {yoriichi:'Yoriichi Tsugikuni', respiracao: 'Sol'},
    {gyu: 'Giyu Tomioka', respiracao:'Água'},
    {shinobu: 'Shinobu Kochō', respiracao: 'Inseto'},
    {kyojuro: 'Kyōjurō Rengoku', respiracao: 'Fogo'},
    {mitsuri: 'Mitsuri Kanroji', respiracao: 'Amor'},
    {obanai: 'Obanai Iguro', respiracao: 'Serpente'},
    {sanemi: 'Sanemi Shinazugawa', respiracao: 'Vento'},
    {gyomei: 'Gyomei Himejima', respiracao: 'Pedra'},
    {muichiro:'Muichiro Tokito', respiracao: 'Névoa'},
    {tengen: 'Tengen Uzui', respiracao: 'Som'},
]
const mainBackground = document.querySelector('.main')
getPersonagem.forEach((p)=>{
    p.addEventListener('click', (e)=>{
        const dataName = p.dataset.personagens
        mainBackground.style.backgroundImage = `url(../../src/assets/personagens-background/${dataName}.jpg)`;
        personagensNomes.forEach((personagem)=>{
            if(personagem[dataName]){
                if(dataName == 'nezuko'){
                    selecionarNome.innerHTML = personagem[dataName]
                    categoria.innerText = 'TIPO: '
                    respiracao.innerHTML = personagem['tipo']
                }else{
                    categoria.innerText = 'RESPIRAÇÃO: '
                    selecionarNome.innerHTML = personagem[dataName]
                    respiracao.innerHTML =  personagem['respiracao']
                }
            }
        })
    })
})
