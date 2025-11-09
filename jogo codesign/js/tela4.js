document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll('.btn-add, .btn-primario, .btn-voltar');
  
    botoes.forEach(botao => {
      botao.addEventListener('mousedown', () => {
        botao.style.transform = 'scale(0.8)';
        botao.style.transition = 'transform 0.1s ease';
      });
  
      botao.addEventListener('mouseup', () => {
        botao.style.transform = 'scale(1)';
      });
  
      botao.addEventListener('mouseleave', () => {
        botao.style.transform = 'scale(1)';
      });
    });
    const botaoAdicionar = document.querySelector(".btn-add");
    const imagemPreview = document.querySelector(".preview");

    botaoAdicionar.addEventListener("click", (event) => {
      event.preventDefault(); 
      imagemPreview.src = "img/imagem_gato.jpg"; 
    });
});