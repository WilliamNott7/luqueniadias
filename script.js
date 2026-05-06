document.addEventListener('DOMContentLoaded', function() {
  // Animação de contagem dos números
  function animateNumbers() {
      const counters = document.querySelectorAll('.proof-number');
      const speed = 200;
      
      counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = target / speed;
          
          if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(() => animateNumbers(), 1);
          } else {
              counter.innerText = target + '+';
          }
      });
  }
  
  // Observador de interseção
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              setTimeout(animateNumbers, 500);
          }
      });
  });
  
  observer.observe(document.querySelector('.social-proof-section'));
  
  // Animações de entrada suave
  function animateOnScroll() {
      const elements = document.querySelectorAll('.proof-card, .testimonial-card');
      
      elements.forEach((element, index) => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
              element.style.animation = `countUp 0.6s ease forwards ${index * 0.1}s`;
          }
      });
  }
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
  });
  
  







const text = "Seja bem-vindo ao meu portfólio. Aqui você vai conhecer um pouco sobre mim, meu estilo de criação e os resultados que entrego. Mais do que números, meu foco é criar conexão real com a audiência através de conteúdo autêntico, criativo e estratégico. Neste portfólio você encontra meus melhores trabalhos, métricas e todas as minhas redes sociais. Cada projeto é pensado para gerar valor tanto pra quem assiste quanto pra marca parceira. Para parcerias, colaborações ou campanhas com a sua marca, clica no botão abaixo.";
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  }
  typing();


