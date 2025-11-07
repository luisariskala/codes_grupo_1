document.addEventListener('DOMContentLoaded', function() {

    let itemsendoarrastado = null
    const palavras = document.querySelectorAll('.palavra')
    const linha1 = document.querySelector('.linha1')
    const linha2 = document.querySelector('.linha2')
    const linha3 = document.querySelector('.linha3')
    const imagens = document.querySelectorAll('.imagem')
    const pronto = document.querySelector('.pronto')

    // torna as palavras arrastáveis e guarda a referência ao iniciar o drag
    for (let pal of palavras) {
        pal.setAttribute('draggable', 'true')
        pal.addEventListener('dragstart', function(event){
            itemsendoarrastado = event.target
        })
    }
    for (let img of imagens) {
        img.setAttribute('draggable', 'true')
        img.addEventListener('dragstart', function(event){
            itemsendoarrastado = event.target
        })
    }

    const linhas = [linha1, linha2, linha3]
    let textofinal = []

    // permitir drop nas linhas
    for (let alvo of linhas) {
        alvo.addEventListener('dragover', function(event) {
            event.preventDefault()
        })

        alvo.addEventListener('drop', function(event) {
            event.preventDefault()
            if (!itemsendoarrastado) return
            
            let clone = itemsendoarrastado.cloneNode(true)

            clone.setAttribute('draggable', 'true')
            clone.addEventListener('dragstart', function(ev){
                itemsendoarrastado = ev.target
            })

            const cloneWidth = measureOuterWidth(clone)

            let destino = null
            for (let linha of linhas) {
                const ocupada = currentOccupiedWidth(linha)
                if (ocupada + cloneWidth <= linha.clientWidth - 4) {
                    destino = linha
                    break
                }
            }

            if (!destino) destino = linhas[linhas.length - 1]
            
            
            if (clone.tagName == 'IMG') {
                clone.style.height = '2.5rem'
                clone.style.width = '2.5rem'
                textofinal.push(String(clone.alt || '').toUpperCase().trim())
            } else {
                textofinal.push(String(clone.textContent || '').trim())
            }
            destino.appendChild(clone)

            itemsendoarrastado = null
        })
    }



    pronto.addEventListener('click', function(ev){
        localStorage.setItem('textofinal', textofinal)
    })
    // --- Funções utilitárias ---

    function measureOuterWidth(element) {
        const temp = element.cloneNode(true)
        temp.style.visibility = 'hidden'
        temp.style.position = 'absolute'
        temp.style.left = '-9999px'
        document.body.appendChild(temp)
        const computed = window.getComputedStyle(temp)
        const width = temp.offsetWidth + parseFloat(computed.marginLeft || 0) + parseFloat(computed.marginRight || 0)
        document.body.removeChild(temp)
        return width
    }

    function currentOccupiedWidth(linha) {
        let total = 0
        for (let child of linha.children) {
            const computed = window.getComputedStyle(child)
            const w = child.offsetWidth + parseFloat(computed.marginLeft || 0) + parseFloat(computed.marginRight || 0)
            total += w
        }
        return total
    }

})