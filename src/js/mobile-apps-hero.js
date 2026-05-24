// Mobile Apps Hero Animation - Floating Phones and App Icons
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('mobileCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Phone mockup system
    const phones = [];
    const phoneCount = 8;

    // App icon particles
    const appIcons = [];
    const iconCount = 30;

    // Phone class
    class Phone {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.width = 60 + Math.random() * 40;
            this.height = this.width * 2;
            this.angle = (Math.random() - 0.5) * 0.3;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.rotationSpeed = (Math.random() - 0.5) * 0.01;
            this.opacity = Math.random() * 0.4 + 0.3;
            this.type = Math.random() > 0.5 ? 'ios' : 'android';
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.angle += this.rotationSpeed;

            // Bounce off edges
            if (this.x < -100 || this.x > canvas.width + 100) this.vx *= -1;
            if (this.y < -100 || this.y > canvas.height + 100) this.vy *= -1;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.globalAlpha = this.opacity;

            // Draw phone shadow
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.fillRect(-this.width / 2 + 3, -this.height / 2 + 3, this.width, this.height);

            // Draw phone body
            ctx.fillStyle = this.type === 'ios' ? 
                'rgba(255, 255, 255, 0.9)' : 
                'rgba(220, 220, 230, 0.9)';
            ctx.strokeStyle = 'rgba(100, 100, 120, 0.5)';
            ctx.lineWidth = 2;
            
            // Rounded rectangle for phone
            const radius = 8;
            ctx.beginPath();
            ctx.moveTo(-this.width / 2 + radius, -this.height / 2);
            ctx.lineTo(this.width / 2 - radius, -this.height / 2);
            ctx.quadraticCurveTo(this.width / 2, -this.height / 2, this.width / 2, -this.height / 2 + radius);
            ctx.lineTo(this.width / 2, this.height / 2 - radius);
            ctx.quadraticCurveTo(this.width / 2, this.height / 2, this.width / 2 - radius, this.height / 2);
            ctx.lineTo(-this.width / 2 + radius, this.height / 2);
            ctx.quadraticCurveTo(-this.width / 2, this.height / 2, -this.width / 2, this.height / 2 - radius);
            ctx.lineTo(-this.width / 2, -this.height / 2 + radius);
            ctx.quadraticCurveTo(-this.width / 2, -this.height / 2, -this.width / 2 + radius, -this.height / 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Draw screen
            const screenMargin = 5;
            ctx.fillStyle = 'rgba(142, 45, 226, 0.3)';
            ctx.fillRect(
                -this.width / 2 + screenMargin,
                -this.height / 2 + screenMargin + 10,
                this.width - screenMargin * 2,
                this.height - screenMargin * 2 - 20
            );

            // Draw notch (iOS) or camera (Android)
            if (this.type === 'ios') {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
                ctx.fillRect(-this.width / 4, -this.height / 2 + screenMargin + 10, this.width / 2, 5);
            } else {
                ctx.beginPath();
                ctx.arc(0, -this.height / 2 + screenMargin + 15, 3, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
                ctx.fill();
            }

            // Draw home indicator (iOS) or buttons (Android)
            if (this.type === 'ios') {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.fillRect(-this.width / 6, this.height / 2 - 15, this.width / 3, 3);
            }

            ctx.restore();
        }
    }

    // App Icon class
    class AppIcon {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 20 + 15;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.angle = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.02;
            this.color = this.getRandomColor();
            this.opacity = Math.random() * 0.5 + 0.3;
        }

        getRandomColor() {
            const colors = [
                { r: 142, g: 45, b: 226 },   // Purple
                { r: 74, g: 0, b: 224 },     // Dark Blue
                { r: 102, g: 126, b: 234 },  // Light Blue
                { r: 165, g: 180, b: 252 },  // Very Light Blue
                { r: 255, g: 255, b: 255 }   // White
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.angle += this.rotationSpeed;

            // Wrap around edges
            if (this.x < -50) this.x = canvas.width + 50;
            if (this.x > canvas.width + 50) this.x = -50;
            if (this.y < -50) this.y = canvas.height + 50;
            if (this.y > canvas.height + 50) this.y = -50;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.globalAlpha = this.opacity;

            // Draw app icon with rounded corners
            const radius = this.size * 0.2;
            ctx.beginPath();
            ctx.moveTo(-this.size / 2 + radius, -this.size / 2);
            ctx.lineTo(this.size / 2 - radius, -this.size / 2);
            ctx.quadraticCurveTo(this.size / 2, -this.size / 2, this.size / 2, -this.size / 2 + radius);
            ctx.lineTo(this.size / 2, this.size / 2 - radius);
            ctx.quadraticCurveTo(this.size / 2, this.size / 2, this.size / 2 - radius, this.size / 2);
            ctx.lineTo(-this.size / 2 + radius, this.size / 2);
            ctx.quadraticCurveTo(-this.size / 2, this.size / 2, -this.size / 2, this.size / 2 - radius);
            ctx.lineTo(-this.size / 2, -this.size / 2 + radius);
            ctx.quadraticCurveTo(-this.size / 2, -this.size / 2, -this.size / 2 + radius, -this.size / 2);
            ctx.closePath();

            // Gradient fill
            const gradient = ctx.createLinearGradient(-this.size / 2, -this.size / 2, this.size / 2, this.size / 2);
            gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.8)`);
            gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.4)`);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Border
            ctx.strokeStyle = `rgba(255, 255, 255, 0.5)`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Draw simple icon shape inside
            ctx.fillStyle = `rgba(255, 255, 255, 0.6)`;
            ctx.beginPath();
            ctx.arc(0, 0, this.size * 0.2, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }
    }

    // Initialize phones
    for (let i = 0; i < phoneCount; i++) {
        phones.push(new Phone());
    }

    // Initialize app icons
    for (let i = 0; i < iconCount; i++) {
        appIcons.push(new AppIcon());
    }

    // Draw notification badges
    function drawNotifications() {
        const time = Date.now() * 0.001;

        for (let i = 0; i < 5; i++) {
            const x = 100 + (canvas.width - 200) * (i / 4);
            const y = 100 + Math.sin(time + i) * 50;
            const pulse = Math.sin(time * 2 + i) * 0.3 + 0.7;

            ctx.save();
            ctx.globalAlpha = pulse * 0.5;

            // Draw notification bubble
            ctx.fillStyle = 'rgba(255, 59, 48, 0.8)';
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fill();

            // Draw notification number
            ctx.fillStyle = 'white';
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(Math.floor(Math.random() * 9) + 1, x, y);

            ctx.restore();
        }
    }

    // Draw app store ratings
    function drawRatings() {
        const time = Date.now() * 0.0003;

        for (let i = 0; i < 3; i++) {
            const x = 150 + (canvas.width - 300) * (i / 2);
            const y = canvas.height - 150 + Math.sin(time + i * 2) * 30;
            const pulse = Math.sin(time * 3 + i) * 0.2 + 0.8;

            ctx.save();
            ctx.globalAlpha = pulse * 0.4;

            // Draw stars
            for (let s = 0; s < 5; s++) {
                ctx.fillStyle = 'rgba(255, 204, 0, 0.8)';
                ctx.font = '16px Arial';
                ctx.fillText('★', x + s * 18, y);
            }

            ctx.restore();
        }
    }

    // Animation loop
    function animate() {
        // Clear with fade effect
        ctx.fillStyle = 'rgba(142, 45, 226, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw and update app icons
        appIcons.forEach(icon => {
            icon.update();
            icon.draw();
        });

        // Draw notifications
        drawNotifications();

        // Draw ratings
        drawRatings();

        // Draw and update phones
        phones.forEach(phone => {
            phone.update();
            phone.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Create floating emoji app icons
    createFloatingAppEmojis();
});

function createFloatingAppEmojis() {
    const hero = document.querySelector('.mobile-hero-background');
    if (!hero) return;

    const emojis = ['📱', '💬', '📧', '🎮', '🎵', '📷', '🎬', '🛒', '📊', '🗺️', '☁️', '🔒', '⚡', '❤️', '⭐'];

    for (let i = 0; i < 25; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'floating-app-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 25 + 20}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatApp ${Math.random() * 15 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
            opacity: ${Math.random() * 0.4 + 0.3};
            filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
        `;
        hero.appendChild(emoji);
    }

    if (!document.getElementById('floatingAppStyle')) {
        const style = document.createElement('style');
        style.id = 'floatingAppStyle';
        style.textContent = `
            @keyframes floatApp {
                0% {
                    transform: translateY(0) rotate(0deg) scale(1);
                    opacity: 0;
                }
                10% {
                    opacity: 0.7;
                }
                90% {
                    opacity: 0.7;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg) scale(1.2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}