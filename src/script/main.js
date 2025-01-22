window.onload = function() {
    let imageUrls = [
        'yoriichi.jpg', 'gyu.jpg', 'shinobu.jpg', 'kyojuro.jpg',
        'mitsuri.jpg', 'obanai.jpg', 'sanemi.jpg', 'gyomei.jpg',
        'muichiro.jpg', 'muichiro.jpg'
    ];
    
    function preloadImages(urls) {
        for (var i = 0; i < urls.length; i++) {
            var img = new Image();
            img.src = "../../dist/assets/personagens-background/" + urls[i];
        }
    }
    preloadImages(imageUrls);
};

const getPersonagem = document.querySelectorAll('.personagens__nav__lista__item')
const selecionarNome = document.querySelector('.selecionado__dados__name')
const respiracao = document.getElementById('Respiracao')
const categoria = document.getElementById('Categoria')

const personagemHistoria = document.querySelector('.historia__texto')
const personagemTitulo = document.querySelector('.historia__titulo--personagem')

const personagensNomes = [
    {tanjiro: 'Tanjiro Kamado', respiracao: 'Sol e Água',
        historia: 'Filho mais velho de um vendedor de carvão, perdeu sua família após um massacre provocado por um demônio. Para evitar que outras famílias passem por isso e para conseguir encontrar uma forma de "curar" a única irmã que sobreviveu ao massacre (mas se tornou um demônio), o jovem decide se unir à Demon Slayer Corps (Corporação de Aniquiladores de Demônios). Após alguns anos estudando e treinando, Tanjirō consegue desenvolver uma técnica de batalha conhecida como Respiração da Água, e aprende a técnica ancestral de sua família, a Dança do deus do Fogo. Posteriormente, encontra uma forma de fundir os dois estilos de batalha. Tanjirō também conta com um crânio extremamente duro, que usa para golpear seus oponentes; e um olfato aguçado ao ponto de ele conseguir detectar a presença de demônios e perceber as emoções das pessoas.'
    },
    {nezuko: 'Nezuko Kamado', tipo: 'Humana/Oni',
        historia: 'Irmã mais nova de Tanjirō, foi a única sobrevivente de sua família, além do irmão, após o massacre. Contudo, a menina foi transformada em um demônio. Para felicidade de Tanjirō, de alguma forma Nezuko consegue manter sua consciência humana, o que permite que ela reconheça seu irmão e não represente uma ameaça para ele. Para evitar que ela seja um perigo para outras pessoas, Urokodaki, treinador de Tanjirō na Demon Slayer Corps, usa uma técnica de hipnose na garota, para que ela passe a ver todos os humanos como seus familiares. Dessa forma, Nezuko não sente mais necessidade de consumir carne humana. Como um demônio, Nezuko é incapaz de falar, tem força sobre-humana e pode mudar o tamanho do seu corpo. Tanjirō costuma transportar a garota em uma caixa de madeira que leva em suas costas, para evitar que seja incinerada pelo sol, e amordaçada, para impedir que ela morda alguém.'},
    {zenitsu: 'Zenitsu Agatsuma', respiracao: 'Trovão',
        historia: 'Um jovem extremamente medroso, Zenitsu Agatsuma passa a integrar a Demon Slayer Corps no mesmo período que Tanjirō. Inseguro, menospreza-se por não ter conseguido aprender todas as técnicas que compõem o estilo de batalha Respiração do Trovão, passado a ele por seu avô. Contudo, segue se dedicando para aprender e tem a seu favor uma audição excelente. Zenitsu fica amigo de Tanjirō em uma missão. Ele decide acompanhar o amigo em sua busca por uma cura para Nezuko, a quem acha atraente. Com o tempo, ele começa a controlar seus medos, agindo sempre que necessário. Além disso, o jovem caçador também age com grande força quando está inconsciente, com ataques complexos e poderosos.'},
    {inosuke: 'Inosuke Hashibira', respiracao: 'Fera',
        historia: 'Inosuke foi criado por um javali selvagem, o que lhe proporcionou uma personalidade impetuosa, estando sempre propenso a reagir de forma violenta. Um caçador habilidoso e musculoso, esconde um rosto com traços femininos por baixo de uma cabeça de javali empalhada. Autodidata, criou um estilo de luta chamado Respiração das Feras, o qual utiliza acompanhado de duas espadas serrilhadas. Seu tato aguçado lhe permite perceber a presença de inimigos a longas distâncias. Também aluno da Demon Slayer Corps, inicialmente via Tanjirō como um inimigo, já que desaprovava o fato de o garoto proteger Nezuko, mesmo ela sendo um demônio. Contudo, os dois se tornam amigos e passam a lutar juntos.'
    },
    {kanao: 'Kanao Tsuyuri', respiracao: 'Flores',
        historia: 'Com uma infância traumática, Kanao sofria agressões de seu pai, que acaba por vendê-la como escrava para um desconhecido. A garota é resgatada por Kanae, antiga Pilar da Flor, e sua irmã Shinobu, a Pilar do Inseto. Shinobu treina Kanao para ser sua sucessora, ou seja, sua Tsuguko (membros excepcionais da Demon Slayer Corps que são pessoalmente indicados como sucessores dos Pilares). Seu passado deixa marcas em sua personalidade, com a jovem tendo dificuldade em demonstrar emoções e até mesmo em conversar. Entrou para a Demon Slayer Corps no mesmo teste de admissão que Tanjirō, Inosuke, Zenitsu e Genya. É uma talentosa espadachim, além de possuir uma visão muito aguçada.'
    },
    {yoriichi:'Yoriichi Tsugikuni', respiracao: 'Sol',
        historia: 'Yoriichi Tsugikuni, nascido na Era Taisho do Japão feudal, foi o mais poderoso caçador de demônios da história, marcado por uma trajetória extraordinária e um legado duradouro. Nascido com a Marca do Caçador, um sinal de força e potencial excepcionais, Yoriichi já demonstrava habilidades prodigiosas desde cedo. Aos 12 anos, ele se juntou ao Corpo de Caçadores de Demônios, treinando com Jigoro Kuwajima e rapidamente se tornando um espadachim formidável. Guiado por uma visão em um sonho, Yoriichi criou a Respiração do Sol, a base para todas as outras respirações utilizadas pelos caçadores de demônios. Sua genialidade se estendeu à criação da Dança do Fogo Solar, uma técnica de espada inigualável que dizimava demônios com maestria. O destino de Yoriichi se entrelaçou com Muzan Kibutsuji, o progenitor dos demônios. Em um duelo épico, Yoriichi feriu gravemente Muzan, mas não conseguiu eliminá-lo completamente. Apesar de não ter derrotado Muzan, Yoriichi deixou um legado imenso, inspirando gerações de caçadores de demônios e estabelecendo as bases para a eventual derrota do Rei dos Demônios. Yoriichi faleceu em paz, aos 86 anos, deixando para trás um legado que moldaria o futuro da humanidade. Seus ensinamentos e técnicas continuaram a ser transmitidos através das gerações, servindo como guia para os caçadores em sua luta contra os demônios. A história de Yoriichi Tsugikuni serve como um lembrete inspirador do poder da compaixão, da determinação e da força do espírito humano, mesmo diante dos desafios mais sombrios.'
    },
    {gyu: 'Giyu Tomioka', respiracao:'Água',
        historia: 'Sempre sério e de poucas palavras, Giyu é um homem reservado que se destaca por seu grande senso de justiça. Assim como os demais caçadores, não tem respeito algum pelos demônios, mas quebra o código de conduta da Demon Slayer Corps para proteger Nezuko, a irmã de Tanjirō, transformada em um demônio. Em determinado ponto da trama, é revelado que Giyu tem um complexo de inferioridade que quase o faz abandonar sua posição como Pilar da Água. Felizmente, Tanjirō o convence a ficar. Um dos espadachins mais habilidosos e poderosos da organização, o atual Pilar da Água também se destaca por sua velocidade e grande resistência. Treinado por Sakonji Urokodaki, o antigo Pilar da Água e também treinador de Tanjirō, Giyu domina o estilo Respiração da Água, por meio do qual pode aumentar o oxigênio em seu sangue e controlar seu padrão de respiração, o que lhe aumenta a força e agilidade para se igualar a de um demônio.'
    },
    {shinobu: 'Shinobu Kochō', respiracao: 'Inseto',
        historia: 'Um sorriso sempre no rosto, o semblante calmo e o gosto por brincar com todos que Shinobu demonstra escondem um estado de quase constante raiva por tudo e todos que ela já perdeu nas batalhas contra os demônios. Embora não tenha a força e as habilidades sobre-humanas que tanto inveja nos demais pilares, ela é tão poderosa e perigosa quanto todos eles. Shinobu tem grandes habilidades e conhecimentos no campo médico e farmacêutico, sendo capaz de combater venenos criados por demônios. Além disso, pode produzir diferentes formas de veneno. Apesar de sua posição inicial de querer se dar bem com os demônios, ela pode ser bastante cruel no momento de combatê-los. Mas abre exceção para Tanjirō e Nezuko, após ouvir a história por traz da transformação da menina e entender que ela não oferece riscos.'
    },
    {kyojuro: 'Kyōjurō Rengoku', respiracao: 'Fogo',
        historia: 'Um guerreiro honrado, Kyojuro vive sob o código moral passado a ele por sua mãe, cujo principal princípio é: Aqueles que nasceram fortes têm o dever de proteger os fracos. Seu entusiasmo e alegria quanto a seus deveres como Pilar lhe dão, às vezes, um ar meio excêntrico, mas Kyojuro é gentil e amável. Após treinar com seu pai, ele se treinou no nível de um Pilar a partir de um livro de instruções do estilo Respiração das Chamas. Sua força e sua habilidade com a espada são tão grandes que foram reconhecidas até mesmo por Akaza, demônio Lua Superior Três, que chegou a lhe oferecer a transformação em demônio para ele superar seus limites físicos e elogiou seu espírito de batalha.'
    },
    {mitsuri: 'Mitsuri Kanroji', respiracao: 'Amor',
        historia: 'Uma pessoa tímida, mas sempre atenciosa e gentil com todos, Mitsuri não deixa que sua índole emocional interfira em sua missão como caçadora de demônios, com quem tem nenhuma piedade. Embora sonhe em se casar, deseja encontrar um homem que seja mais forte que ela, o que é uma grande dificuldade, dado o incrível nível de seu poder. Talento como espadachim, grande velocidade e flexibilidade são algumas de suas características. Mas seu principal diferencial é sua constituição singular. Seus músculos possuem uma densidade oito vezes maior que o normal, o que lhe proporciona força e resistência inacreditáveis. Para manter sua composição, inclusive, ela precisa comer o equivalente ao que três lutadores de sumô comeriam.'
    },
    {obanai: 'Obanai Iguro', respiracao: 'Serpente',
        historia: 'Um homem rigoroso, não tolera que alguns dos caçadores quebrem o código da Demon Slayer Corps e tem expectativas quase irreais quanto ao desempenho dos estudantes. Acha os novos recrutas da organização fracos e incapazes, ficando realmente surpreso ao saber que Tanjirō sobreviveu à missão da Seleção Final. Considera seu sangue impuro por vir de um clã que sacrificava seus membros aos demônios por meros motivos monetários. Seu senso de auto-aversão é tão grande que acredita que para ser digno de Mitsuri, por quem é apaixonado, precisa morrer derrotando Muzan, o Rei Demônio, e reencarnar em outra vida. Embora tenha grande força, é o segundo mais fraco entre os Pilares. Parcialmente cego de um dos olhos, conta com a ajuda de sua cobra Kubaramaru para ler os ataques do inimigo e relatá-los a ele. Domina o estilo Respiração da Serpente, com a qual consegue usar sua espada com movimentos de uma cobra.'
    },
    {sanemi: 'Sanemi Shinazugawa', respiracao: 'Vento',
        historia: 'Um pai abusivo que acabou assassinado, uma mãe que foi transformada em um demônio e quase matou todos os seus filhos e o peso de precisar matá-la para evitar uma tragédia ainda maior são traumas do passado de Sanemi que ele carrega consigo até hoje. Não à toa, tornou-se agressivo, impulsivo, grosseiro e frio, de modo a afastar as pessoas de si, até mesmo o próprio irmão, Genya. Além disso, voltou seus objetivos todos para o combate contra os demônios, por quem sente profundo ódio. Ele, inclusive, não acredita que Nezuko Kamado não ataca humanos e tenta provar isso. Sanemi tem um raro tipo de sangue que atrai os demônios e os deixam desorientados pelo desejo de se alimentar. O Pilar também é capaz de manipular os próprios músculos para evitar ou mesmo fechar feridas que seriam mortais. Sua marca de caçador de demônio lhe proporciona a Luta Subconsciente, na qual ele segue batalhando mesmo após perder a consciência.'
    },
    {gyomei: 'Gyomei Himejima', respiracao: 'Pedra',
        historia: 'Apesar de sua aparência intimidante, visto que é um dos mais altos caçadores, Gyomei é gentil e sensível, e frequentemente oferece orações aos outros. Acredita que, se recebem oportunidades, as pessoas, principalmente os jovens, podem ser capazes de coisas incríveis. Embora sempre bondoso, seu passado fez dele um homem desconfiado. Antes de se tornar um caçador, Gyomei cuidava de nove crianças órfãs em um templo, ainda que fosse cego desde criança. Após desobedecer suas ordens e sair do templo, um dos meninos se vê ameaçado por um demônio e, para se salvar, convida o demônio a matar as demais crianças. Em meio ao massacre, Gyomei descobre sua força, mas acaba acusado injustamente das mortes das crianças. Após Kagaya Ubuyashiki, o mestre dos Pilares, intervir e conseguir sua liberdade, Gyomei se torna um caçador de demônios e, apenas dois meses depois, o Pilar da Pedra.'
    },
    {muichiro:'Muichiro Tokito', respiracao: 'Névoa',
        historia: 'Quando criança, Muichiro demonstrava grande bondade e cuidado com aqueles ao seu redor. Por volta de seus 11 anos, contudo, seu irmão gêmeo foi assassinado por um demônio e Muichiro perdeu suas memórias. Depois desse trauma, mesmo que ele não se recordasse disso a um nível de consciência, Muichiro se tornou fechado, com tendência a pensar apenas em si mesmo, sem deixar emoções transparecessem ou mesmo guiá-lo em nenhuma de suas missões. Ainda assim, é devotado a sua função como Pilar, posição que conquistou apenas dois meses depois de dar início ao seu treinamento como caçador de demônios. Embora jovem e pequeno, é um dos Pilares mais fortes.'
    },
    {tengen: 'Tengen Uzui', respiracao: 'Som',
        historia:'Embora se destaque por ser uma pessoa excêntrica e com atitudes extravagantes, Tengen tem um lado amoroso e honrado que demonstra ao pedir, por exemplo, que suas três esposas priorizem sempre suas próprias vidas primeiro, depois a de inocentes e, só então, a dele. Uma das nove crianças sobreviventes da linha de shinobi, já havia perdido sete de seus irmãos antes dos 15 anos. Seu pai mantinha um treino abusivo com ele e seu irmão. Embora seu irmão tenha seguido o caminho do patriarca em termos de personalidade e forma como trata os outros, Tengen decidiu ir contra tudo isso. Sua super audição lhe proporciona a capacidade de ecolocalização. Ele também possui grande força, velocidade e resistência a veneno. Derivado da Respiração do Trovão, o estilo Respiração do Som foi desenvolvido por Tengen. Com a fórmula de batalha Score, ele ainda consegue ler os movimentos do oponente, analisando seu ritmo.'
    },
]
const mainBackground = document.querySelector('.main')

getPersonagem.forEach((p)=>{
    p.addEventListener('click', (e)=>{
        // Remove classe ativa de todos
        getPersonagem.forEach(item => item.classList.remove('personagem-ativo'));
        // Adiciona classe ativa ao selecionado
        p.classList.add('personagem-ativo');
        
        // Adiciona efeito de transição suave no background
        mainBackground.style.opacity = '0';
        setTimeout(() => {
            const dataName = p.dataset.personagens;
            mainBackground.style.backgroundImage = `url(../../dist/assets/personagens-background/${dataName}.jpg)`;
            mainBackground.style.opacity = '1';
        }, 300);

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
                personagemTitulo.innerHTML = personagem[dataName]
                personagemHistoria.innerHTML = personagem['historia']
            }
        })
    })
})

// Adicionar efeito de parallax no background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    mainBackground.style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Adicionar animação de entrada nos elementos
document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.personagens__nav__lista__item, .selecionado__dados, .historia__texto');
    elementos.forEach(elemento => {
        elemento.classList.add('fade-in');
    });
});