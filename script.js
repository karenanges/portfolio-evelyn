//animacao das habilidades
document.querySelectorAll('.habilidade-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-15px) scale(1.05)';
    card.style.boxShadow = '0 15px 30px rgba(46,204,113,0.5)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 5px 15px rgba(46,204,113,0.3)';
  });
});

//hoover no carrossel
document.querySelectorAll('.carrossel-projetos').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.05)';
    card.style.boxShadow = '0 12px 30px rgba(46,204,113,0.5)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 6px 20px rgba(46,204,113,0.3)';
  });
});

// formulario simulando envio de msg
const button = document.querySelector('.form-contato button');
button.addEventListener('mousedown', () => {
  button.style.transform = 'scale(0.95)';
});
button.addEventListener('mouseup', () => {
  button.style.transform = 'scale(1)';
});

// bolinhas clicaveis
document.querySelectorAll('section').forEach(sec => {
  sec.addEventListener('click', e => {
    const ball = document.createElement('div');
    ball.style.position = 'absolute';
    ball.style.left = `${e.clientX - 10}px`;
    ball.style.top = `${e.clientY - 10}px`;
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.background = '#2ecc71';
    ball.style.borderRadius = '50%';
    ball.style.pointerEvents = 'none';
    ball.style.transition = 'all 0.8s ease-out';
    sec.appendChild(ball);

    setTimeout(() => {
      ball.style.top = `${e.clientY - 50}px`;
      ball.style.opacity = '0';
    }, 10);

    setTimeout(() => {
      ball.remove();
    }, 800);
  });
});

// bolinhas que seguem o mouse
document.querySelectorAll('section').forEach(sec => {
  sec.addEventListener('mousemove', e => {
    const ball = document.createElement('div');
    ball.style.position = 'absolute';
    ball.style.left = `${e.clientX - 5}px`;
    ball.style.top = `${e.clientY - 5}px`;
    ball.style.width = '10px';
    ball.style.height = '10px';
    ball.style.background = '#2ecc71';
    ball.style.borderRadius = '50%';
    ball.style.pointerEvents = 'none';
    ball.style.opacity = '0.8';
    ball.style.transition = 'all 0.5s ease-out';
    sec.appendChild(ball);

    setTimeout(() => {
      ball.style.top = `${e.clientY - 20}px`;
      ball.style.opacity = '0';
    }, 10);

    setTimeout(() => {
      ball.remove();
    }, 500);
  });
});

//animacao das letras da pg inicial
window.addEventListener('load', () => {
  const texts = document.querySelectorAll('.home-text p, .home-text h1, .home-text h2');

  texts.forEach((el, index) => {
    const fullText = el.textContent;
    el.textContent = '';
    el.classList.add('typing');

    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < fullText.length) {
          el.textContent += fullText.charAt(i);
          i++;
        } else {
          el.classList.remove('typing');
          clearInterval(interval);
        }
      }, 50);
    }, index * 500);
  });

  // Animação da foto
  const homeImg = document.querySelector('.home-img');
  setTimeout(() => {
    homeImg.classList.add('show');
  }, texts.length * 500);
});

//manter a foto da pg inicial flutuando quando voltar pro topo
window.addEventListener('scroll', () => {
  const homeImg = document.querySelector('.home-img img');
  const scrollPos = window.scrollY;
  homeImg.style.transform = `translateY(${scrollPos * 0.2}px) scale(1)`;
});

// Carrossel girando infinitamente
const carrosselContainer = document.querySelector('.carousel-track');
const speed = 1; // velocidade do carrossel

// duplicar os cards para loop infinito
const cards = Array.from(carrosselContainer.children);
cards.forEach(card => {
  const clone = card.cloneNode(true);
  carrosselContainer.appendChild(clone);
});

let scrollAmount = 0;

function animateCarrossel() {
  scrollAmount += speed;

  if (scrollAmount >= carrosselContainer.scrollWidth / 2) {
    // quando chegar na metade, reseta para o início
    scrollAmount = 0;
  }

  carrosselContainer.style.transform = `translateX(-${scrollAmount}px)`;
  requestAnimationFrame(animateCarrossel);
}

animateCarrossel();
//anim dos cards dos projetos
document.querySelectorAll('.carrossel-projetos').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 10px 25px rgba(46,204,113,0.5)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 4px 15px rgba(46,204,113,0.4)';
  });

  card.addEventListener('click', () => {
    const link = card.getAttribute('data-link'); 
    if(link) window.open(link, '_blank');
  });
});

//simulação de envio do formulario
const form = document.querySelector('.form-contato');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const successMsg = document.createElement('p');
  successMsg.textContent = "Mensagem enviada com sucesso! ✅";
  successMsg.style.color = "#2ecc71";
  successMsg.style.marginTop = "10px";
  successMsg.style.fontWeight = "bold";
  form.appendChild(successMsg);

  form.reset();

  setTimeout(() => {
    successMsg.remove();
  }, 3000);
});