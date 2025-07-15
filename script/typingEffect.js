// Efeito de digitação (typing effect)
document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.getElementById('typing-text');
    const text = "Olá, eu sou Eldio 👋";
    let index = 0;
    let isTyping = false;
    
    // Limpa o texto inicial
    typingText.textContent = '';
    typingText.classList.add('typing');
    
    function typeWriter() {
        if (index < text.length) {
            isTyping = true;
            typingText.textContent += text.charAt(index);
            index++;
            
            // Velocidade variável: mais rápida para letras, mais lenta para emojis e espaços
            let speed = 120;
            if (text.charAt(index - 1) === ' ') {
                speed = 200; // Pausa maior em espaços
            } else if (text.charAt(index - 1) === '👋') {
                speed = 300; // Pausa maior no emoji
            }
            
            setTimeout(typeWriter, speed);
        } else {
            // Terminou a digitação
            isTyping = false;
            typingText.classList.remove('typing');
            typingText.classList.add('finished');
            
            // Remove o cursor piscante após terminar
            setTimeout(() => {
                typingText.style.borderRight = 'none';
            }, 1500);
        }
    }
    
    // Inicia o efeito após um pequeno delay para sincronizar com outras animações
    setTimeout(() => {
        typeWriter();
    }, 1200);
    
    // Adiciona um observer para reiniciar o efeito se o usuário rolar para cima
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isTyping && typingText.textContent === '') {
                index = 0;
                setTimeout(typeWriter, 500);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(typingText);
});
