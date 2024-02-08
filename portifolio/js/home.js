// Função para rolar suavemente até a seção correspondente ao clicar nos links da navbar
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const sectionId = this.getAttribute('href');
      document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });