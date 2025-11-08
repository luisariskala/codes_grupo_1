document.addEventListener('DOMContentLoaded', function() {  
    // Seleção de elemtnos
    var texto = document.querySelectorAll(".label")
    var audio = document.querySelectorAll("audio")
    var finalizar = document.querySelector(".finalizar a")

    // Variáveis utilitáias
    var historico = [] //tipo, data, elemento
    var cont_pontos = 0
    var cont_pares = 0
    var gab_pares = texto.length

    // Seleção texto
    for(t of texto){
        t.addEventListener('click', function(event){
            matche(event.currentTarget)
        })
    }

    // Seleção audio
    for(a of audio){
        a.addEventListener('click', function(event){
            matche(event.currentTarget)
        })
        a.addEventListener('play', function(event){
            matche(event.currentTarget)
        })
    }
    
    // Matche texto-audio
    function matche(elemento) {
        const tipo = elemento.tagName.toLowerCase()    // "p" ou "audio"
        const data = elemento.dataset.palavra          // palavra correspondente

        // PRIMEIRA Seleção
        if (historico.length === 0) {
            elemento.classList.add('selecionado')
            historico = [tipo, data, elemento]
            return // tirar
        }

        // SEGUNDA seleção
        const [tipoAnterior, dataAnterior, elementoAnterior] = historico

        // --- mesmo tipo ---
        if (tipo === tipoAnterior) {
            // mesma palavra --> desmarca
            if (data === dataAnterior) {
            elemento.classList.remove('selecionado');
            historico = [];
            }
            // palavra diferente --> troca seleção
            else {
            elementoAnterior.classList.remove('selecionado');
            elemento.classList.add('selecionado');
            historico = [tipo, data, elemento];
            }

        // --- tipo diferente ---
        } else {
            // Em qualquer caso (acerto ou erro): pareado e desativa interação.
            elemento.classList.remove('selecionado');
            elementoAnterior.classList.remove('selecionado');

            elemento.classList.add('pareado');
            elementoAnterior.classList.add('pareado');

            elemento.style.pointerEvents = 'none';
            elementoAnterior.style.pointerEvents = 'none';
            // aumenta contagem de pares
            cont_pares++
            // limpa histórico para próximo ciclo
            historico = []  
            // Pontuação
            if (data === dataAnterior) {
                cont_pontos++
                // debug
                console.log(cont_pontos)
                // ativa botão de finalizar
                if(cont_pares == gab_pares){
                    localStorage.setItem("pontos", cont_pontos)
                    finalizar.classList.remove('desativado')
                    finalizar.classList.add('ativado')

                }
            }
        }
    }
})