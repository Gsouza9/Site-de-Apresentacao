// Ano automático no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Efeito suave nos botões
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 20px rgba(56,189,248,.4)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
  });
});

// Animação leve nos ícones ao carregar
window.addEventListener('load', () => {
  const icons = document.querySelectorAll('.stack img');
  icons.forEach((icon, i) => {
    setTimeout(() => {
      icon.style.transform = 'scale(1.1)';
      setTimeout(() => icon.style.transform = 'scale(1)', 150);
    }, i * 120);
  });
});
