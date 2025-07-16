// Função para carregar e renderizar projetos
async function loadProjects() {
    try {
        const response = await fetch('./data/projects.json');
        const data = await response.json();
        renderProjects(data.projects);
    } catch (error) {
        console.error('Erro ao carregar projetos:', error);
        // Fallback caso o JSON não carregue
        renderFallbackProjects();
    }
}

// Função para renderizar os projetos
function renderProjects(projects) {
    const container = document.querySelector('.cards');
    if (!container) return;

    container.innerHTML = '';

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Adiciona classe especial se for o Netofy
        if (project.id === 'netofy') {
            card.classList.add('Netofy');
        }

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" ${project.id === 'netofy' ? 'class="projetos"' : ''}>
            <h2>${project.title}</h2>
            <p class="descricao">${project.description}</p>
            <a href="${project.url}" class="btn" target="_blank">Ver Projeto</a>
        `;

        container.appendChild(card);
    });
}

// Função fallback caso o JSON não carregue
function renderFallbackProjects() {
    const container = document.querySelector('.cards');
    if (!container) return;

    const fallbackProjects = [
        {
            title: "Portfólio Pessoal",
            image: "./images/ENsite.png",
            description: "Site responsivo desenvolvido para apresentar meus projetos e habilidades profissionais de forma moderna e acessível.",
            url: "https://eldio-neto.github.io/PaginaPortifolio/"
        },
        {
            title: "Netofy Music Player",
            image: "./images/Netofy.PNG",
            description: "Aplicação web de player de música com design personalizado, interface intuitiva e playlist curada de alta qualidade.",
            url: "https://eldio-neto.github.io/netofyPlayer/",
            isNetofy: true
        }
        // Adicione mais projetos se necessário
    ];

    container.innerHTML = '';
    fallbackProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        if (project.isNetofy) card.classList.add('Netofy');
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" ${project.isNetofy ? 'class="projetos"' : ''}>
            <h2>${project.title}</h2>
            <p class="descricao">${project.description}</p>
            <a href="${project.url}" class="btn" target="_blank">Ver Projeto</a>
        `;

        container.appendChild(card);
    });
}

// Carrega os projetos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', loadProjects);
