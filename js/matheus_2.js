document.addEventListener('DOMContentLoaded', function() {
    p = document.querySelector('p')
    p.innerHTML = localStorage.getItem("pontos")+" Acertos"
}
)