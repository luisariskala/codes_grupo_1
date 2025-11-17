document.addEventListener('DOMContentLoaded', function() {


    const texto = document.querySelector('.textotela2')
    const play = document.querySelector('.imagem')

    const stored = localStorage.getItem('textofinal')
    if (!stored) {
        texto.innerHTML = ''
        return;
    }

    const partes = stored.split(',').filter(p => p !== '')
    const frase = partes.join(' ')
    texto.innerHTML = frase



    let voiceBR = null

    function carregarVozes() {
        const voices = speechSynthesis.getVoices();
        voiceBR = voices.find(v => v.lang === 'pt-BR');

        play.addEventListener('click', () => {
            const u = new SpeechSynthesisUtterance(frase)
            u.rate = 1
            u.pitch = 1
            u.voice = voiceBR
            speechSynthesis.speak(u)
        })
    }
    speechSynthesis.onvoiceschanged = carregarVozes
    

    play.style.transition = "transform 0.1s ease"

    play.addEventListener("mousedown", () => {
        play.style.transform = "scale(0.93)"
    })
    play.addEventListener("mouseup", () => {
        play.style.transform = ""
    })
    play.addEventListener("mouseleave", () => {
        play.style.transform = ""
    })
    play.addEventListener("touchstart", () => {
        play.style.transform = "scale(0.93)";
    })
    play.addEventListener("touchend", () => {
        play.style.transform = ""
    })




















})