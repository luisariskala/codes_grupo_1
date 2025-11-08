document.addEventListener('DOMContentLoaded', function() {


    const texto = document.querySelector('.textotela2')

    const stored = localStorage.getItem('textofinal')
    if (!stored) {
        texto.innerHTML = ''
        return;
    }

    const partes = stored.split(',').filter(p => p !== '')
    const frase = partes.join(' ')
    texto.innerHTML = frase




















})