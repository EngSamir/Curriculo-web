// ====== FUNCIONALIDADE: DOWNLOAD PDF  ======
document.getElementById('download-btn').addEventListener('click', function()  {
    window.print();
});

// ===== SCROLL SUAVE PARA LINKS INTERNOS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e)  {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (targer) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== ANIMAÇÃO AO SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplica animação em todas as seções
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.7s ease';
    observer.observe(section);
});

// ===== LOG NO CONSOLE =====
console.log('%c💼 Currículo Web Carregado! ', 'background: #2563eb; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%c🚀 Desenvolvido por Samir', 'color: #1e40af; font-size: 14px;');
console.log('%c⭐ Tecnologias: HTML5, CSS3, JavaScript', 'color: #6b7280; font-size: 12px;');

// ===== EASTER EGG: TECLA DE ATALHO =====
document.addEventListener('keydown', function(e) {
    // Ctrl + K = Modo escuro (exemplo)
    if (e.ctrlKey && e.key === 'k') {
        document.body.style.filter = document.body.style.filter === 'invert(1)' ? 'invert(0)' : 'invert(1)';
        console.log('🌓 Modo alternado!');
    }
});

// ===== ATUALIZAÇÃO AUTOMÁTICA DO ANO NO FOOTER =====
window.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace('2024', currentYear);
    }
});