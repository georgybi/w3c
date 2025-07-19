// Particle background effect
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size and position
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Random animation
        const animationDuration = Math.random() * 20 + 10;
        particle.style.animation = `float ${animationDuration}s infinite ease-in-out`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Wallet connection simulation
    const walletBtn = document.querySelector('.wallet-btn');
    walletBtn.addEventListener('click', function() {
        walletBtn.innerHTML = '<i class="fas fa-check"></i> Wallet Connecté';
        walletBtn.classList.remove('pulse');
        walletBtn.style.background = 'var(--success)';
        
        // Simulate Web3 connection
        setTimeout(() => {
            alert('Wallet connecté avec succès! Vous pouvez maintenant interagir avec les fonctionnalités Web3.');
            
            // Show NFT section when wallet is connected
            document.getElementById('nfts').style.display = 'block';
        }, 500);
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});