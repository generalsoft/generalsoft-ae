// Custom Software Hero Animation - Matrix-style Code Rain Effect
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('codeCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Code characters to display
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]();=+-*&|$#@!%^~';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }

    // Color palette for code
    const colors = [
        'rgba(79, 172, 254, 0.8)',  // Bright blue
        'rgba(0, 242, 254, 0.8)',   // Cyan
        'rgba(255, 255, 255, 0.6)'  // White
    ];

    function draw() {
        // Semi-transparent black to create fade effect
        ctx.fillStyle = 'rgba(30, 60, 114, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = fontSize + 'px monospace';

        // Draw characters
        for (let i = 0; i < drops.length; i++) {
            // Random character
            const char = charArray[Math.floor(Math.random() * charArray.length)];
            
            // Random color from palette
            const color = colors[Math.floor(Math.random() * colors.length)];
            ctx.fillStyle = color;

            // Draw character
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            ctx.fillText(char, x, y);

            // Reset drop to top randomly
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Move drop down
            drops[i]++;
        }
    }

    // Animation loop
    setInterval(draw, 50);

    // Add some code snippets floating effect
    createFloatingCodeSnippets();
});

function createFloatingCodeSnippets() {
    const hero = document.querySelector('.custom-hero-background');
    if (!hero) return;

    const snippets = [
        'function()',
        '{ }',
        'const x =',
        'return',
        'if (true)',
        'class',
        'import',
        'async',
        '=>',
        'new',
        'this.',
        'for()',
        'while',
        'try',
        'catch'
    ];

    // Create 20 floating code elements
    for (let i = 0; i < 20; i++) {
        const snippet = document.createElement('div');
        snippet.className = 'floating-code';
        snippet.textContent = snippets[Math.floor(Math.random() * snippets.length)];
        snippet.style.cssText = `
            position: absolute;
            font-family: monospace;
            font-size: ${Math.random() * 10 + 12}px;
            color: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatCode ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
            white-space: nowrap;
        `;
        hero.appendChild(snippet);
    }

    // Add CSS animation for floating code
    if (!document.getElementById('floatingCodeStyle')) {
        const style = document.createElement('style');
        style.id = 'floatingCodeStyle';
        style.textContent = `
            @keyframes floatCode {
                0% {
                    transform: translateY(0) translateX(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.5;
                }
                90% {
                    opacity: 0.5;
                }
                100% {
                    transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}