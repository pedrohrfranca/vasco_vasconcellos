// produtos.js


// Função para criar FADE IN e FADE OUT dos títulos

document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.title-container h2');
    let current = 0;
  
    // mostra só o primeiro no carregamento
    titles[current].classList.add('active');
  
    // a cada 4s faz o fade out do atual e fade in do próximo
    setInterval(() => {
        titles[current].classList.remove('active'); // Remove 'active' from the current title
        current = (current + 1) % titles.length; // Update to the next title
        titles[current].classList.add('active'); // Add 'active' to the next title
    }, 4000);
});

// Menu Hamburguer
function clickMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Animação de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação dos cards de produtos
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.produto-card, .categoria-card, .beneficio-card').forEach((el) => observer.observe(el));

// Adiciona classe show aos elementos quando visíveis
document.querySelectorAll('.produto-card, .categoria-card, .beneficio-card').forEach(el => {
    el.classList.add('hide');
});

// Adiciona estilos CSS para as animações
const style = document.createElement('style');
style.textContent = `
    .hide {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
    }
    
    .show {
        opacity: 1;
        transform: translateY(0);
    }
    
    .menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: #fff;
        padding: 1rem;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    @media (min-width: 769px) {
        .menu.active {
            display: flex;
            flex-direction: row;
            position: static;
            box-shadow: none;
        }
    }
`;
document.head.appendChild(style);

// Adiciona evento de clique nos botões de detalhes
document.querySelectorAll('.btn-detalhes').forEach(button => {
    button.addEventListener('click', function() {
        const produto = this.closest('.produto-card');
        const nome = produto.querySelector('h3').textContent;
        const preco = produto.querySelector('.preco').textContent;
        
        // Aqui você pode adicionar a lógica para abrir um modal ou redirecionar para a página do produto
        alert(`Produto: ${nome}\nPreço: ${preco}\n\nEm breve, você será redirecionado para a página de detalhes do produto.`);
    });
});

