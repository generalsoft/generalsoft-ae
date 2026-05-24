// Education & Training Hero Animation - Floating Books and Knowledge Particles
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('educationCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Book particle system
    const books = [];
    const bookCount = 30;

    // Knowledge particle class
    class Book {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.width = Math.random() * 30 + 20;
            this.height = this.width * 0.7;
            this.angle = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.02;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.color = this.getRandomColor();
            this.opacity = Math.random() * 0.5 + 0.3;
        }

        getRandomColor() {
            const colors = [
                'rgba(255, 255, 255, ',
                'rgba(255, 224, 240, ',
                'rgba(255, 192, 203, ',
                'rgba(173, 216, 230, '
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.angle += this.rotationSpeed;

            // Bounce off edges
            if (this.x < -50 || this.x > canvas.width + 50) this.vx *= -1;
            if (this.y < -50 || this.y > canvas.height + 50) this.vy *= -1;

            // Keep within bounds
            this.x = Math.max(-50, Math.min(canvas.width + 50, this.x));
            this.y = Math.max(-50, Math.min(canvas.height + 50, this.y));
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);

            // Draw book shadow
            ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity * 0.2})`;
            ctx.fillRect(-this.width / 2 + 2, -this.height / 2 + 2, this.width, this.height);

            // Draw book cover
            ctx.fillStyle = this.color + this.opacity + ')';
            ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

            // Draw book spine
            ctx.fillStyle = this.color + (this.opacity * 0.7) + ')';
            ctx.fillRect(-this.width / 2, -this.height / 2, this.width * 0.15, this.height);

            // Draw book pages
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.8})`;
            ctx.fillRect(this.width / 2 - 3, -this.height / 2 + 2, 3, this.height - 4);

            // Draw decorative lines
            ctx.strokeStyle = this.color + (this.opacity * 0.5) + ')';
            ctx.lineWidth = 1;
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.moveTo(-this.width / 2 + 5, -this.height / 2 + 10 + i * 8);
                ctx.lineTo(this.width / 2 - 10, -this.height / 2 + 10 + i * 8);
                ctx.stroke();
            }

            ctx.restore();
        }
    }

    // Initialize books
    for (let i = 0; i < bookCount; i++) {
        books.push(new Book());
    }

    // Light particle system for knowledge sparkles
    const sparkles = [];
    const sparkleCount = 100;

    class Sparkle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 2 + 1;
            this.vx = (Math.random() - 0.5) * 1;
            this.vy = (Math.random() - 0.5) * 1;
            this.life = Math.random() * 100 + 50;
            this.maxLife = this.life;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life--;

            if (this.life <= 0 || this.x < 0 || this.x > canvas.width || 
                this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }

        draw() {
            const opacity = this.life / this.maxLife;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
            ctx.fill();

            // Glow effect
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(255, 255, 255, ${opacity})`;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    // Initialize sparkles
    for (let i = 0; i < sparkleCount; i++) {
        sparkles.push(new Sparkle());
    }

    // Draw connecting lines between nearby books
    function drawConnections() {
        for (let i = 0; i < books.length; i++) {
            for (let j = i + 1; j < books.length; j++) {
                const dx = books[i].x - books[j].x;
                const dy = books[i].y - books[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    const opacity = (1 - distance / 200) * 0.2;
                    ctx.beginPath();
                    ctx.moveTo(books[i].x, books[i].y);
                    ctx.lineTo(books[j].x, books[j].y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        ctx.fillStyle = 'rgba(240, 147, 251, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw sparkles
        sparkles.forEach(sparkle => {
            sparkle.update();
            sparkle.draw();
        });

        // Draw connections
        drawConnections();

        // Update and draw books
        books.forEach(book => {
            book.update();
            book.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Create floating educational icons
    createFloatingIcons();
});

function createFloatingIcons() {
    const hero = document.querySelector('.education-hero-background');
    if (!hero) return;

    const icons = ['📚', '✏️', '🎓', '📖', '💡', '🔬', '🖥️', '📊', '🧮', '🌟'];

    for (let i = 0; i < 20; i++) {
        const icon = document.createElement('div');
        icon.className = 'floating-edu-icon';
        icon.textContent = icons[Math.floor(Math.random() * icons.length)];
        icon.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 20}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatEdu ${Math.random() * 15 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
            opacity: ${Math.random() * 0.4 + 0.3};
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
        `;
        hero.appendChild(icon);
    }

    if (!document.getElementById('floatingEduStyle')) {
        const style = document.createElement('style');
        style.id = 'floatingEduStyle';
        style.textContent = `
            @keyframes floatEdu {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.7;
                }
                90% {
                    opacity: 0.7;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}