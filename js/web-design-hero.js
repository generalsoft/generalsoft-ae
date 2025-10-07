// Web Design Hero Animation - Network Nodes and Browser Windows
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('webCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Network node system
    const nodes = [];
    const nodeCount = 40;
    const connectionDistance = 200;

    // Browser window mockups
    const browsers = [];
    const browserCount = 5;

    // Data packet system
    const packets = [];

    // Network Node class
    class Node {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 4 + 2;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.connections = [];
            this.pulsePhase = Math.random() * Math.PI * 2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

            // Keep in bounds
            this.x = Math.max(0, Math.min(canvas.width, this.x));
            this.y = Math.max(0, Math.min(canvas.height, this.y));
        }

        draw() {
            const time = Date.now() * 0.001;
            const pulse = Math.sin(time + this.pulsePhase) * 0.3 + 0.7;

            // Draw glow
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 2);
            gradient.addColorStop(0, `rgba(56, 239, 125, ${pulse * 0.6})`);
            gradient.addColorStop(1, 'rgba(56, 239, 125, 0)');
            ctx.fillStyle = gradient;
            ctx.fill();

            // Draw node
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${pulse})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(56, 239, 125, ${pulse})`;
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }

    // Browser Window class
    class Browser {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.width = 200 + Math.random() * 100;
            this.height = this.width * 0.6;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.angle = (Math.random() - 0.5) * 0.2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.005;
            this.opacity = Math.random() * 0.3 + 0.2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.angle += this.rotationSpeed;

            // Bounce
            if (this.x < -150 || this.x > canvas.width + 150) this.vx *= -1;
            if (this.y < -150 || this.y > canvas.height + 150) this.vy *= -1;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.globalAlpha = this.opacity;

            // Browser window
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.strokeStyle = 'rgba(200, 200, 200, 0.8)';
            ctx.lineWidth = 2;
            ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
            ctx.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height);

            // Browser header
            ctx.fillStyle = 'rgba(220, 220, 220, 0.9)';
            ctx.fillRect(-this.width / 2, -this.height / 2, this.width, 25);

            // Browser buttons
            const buttonY = -this.height / 2 + 12;
            const colors = ['rgba(255, 95, 86, 0.8)', 'rgba(255, 189, 46, 0.8)', 'rgba(39, 201, 63, 0.8)'];
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.arc(-this.width / 2 + 15 + i * 15, buttonY, 5, 0, Math.PI * 2);
                ctx.fillStyle = colors[i];
                ctx.fill();
            }

            // Address bar
            ctx.fillStyle = 'rgba(245, 245, 245, 0.8)';
            ctx.fillRect(-this.width / 2 + 60, buttonY - 8, this.width - 80, 16);

            // Content area with gradient
            const contentGradient = ctx.createLinearGradient(
                -this.width / 2, -this.height / 2 + 25,
                -this.width / 2, this.height / 2
            );
            contentGradient.addColorStop(0, 'rgba(17, 153, 142, 0.2)');
            contentGradient.addColorStop(1, 'rgba(56, 239, 125, 0.2)');
            ctx.fillStyle = contentGradient;
            ctx.fillRect(-this.width / 2, -this.height / 2 + 25, this.width, this.height - 25);

            // Simulate content lines
            ctx.strokeStyle = 'rgba(200, 200, 200, 0.4)';
            ctx.lineWidth = 2;
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.moveTo(-this.width / 2 + 20, -this.height / 2 + 50 + i * 20);
                ctx.lineTo(this.width / 2 - 20, -this.height / 2 + 50 + i * 20);
                ctx.stroke();
            }

            ctx.restore();
        }
    }

    // Data Packet class
    class Packet {
        constructor(startNode, endNode) {
            this.startNode = startNode;
            this.endNode = endNode;
            this.progress = 0;
            this.speed = 0.015 + Math.random() * 0.015;
            this.size = 3;
        }

        update() {
            this.progress += this.speed;
            if (this.progress >= 1) {
                this.progress = 0;
                if (Math.random() > 0.5) {
                    this.startNode = this.endNode;
                    this.endNode = nodes[Math.floor(Math.random() * nodes.length)];
                }
            }
        }

        draw() {
            const x = this.startNode.x + (this.endNode.x - this.startNode.x) * this.progress;
            const y = this.startNode.y + (this.endNode.y - this.startNode.y) * this.progress;

            // Packet glow
            ctx.beginPath();
            ctx.arc(x, y, this.size * 2, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.size * 2);
            gradient.addColorStop(0, 'rgba(56, 239, 125, 0.8)');
            gradient.addColorStop(1, 'rgba(56, 239, 125, 0)');
            ctx.fillStyle = gradient;
            ctx.fill();

            // Packet core
            ctx.beginPath();
            ctx.arc(x, y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(56, 239, 125, 1)';
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node());
    }

    // Initialize browsers
    for (let i = 0; i < browserCount; i++) {
        browsers.push(new Browser());
    }

    // Create initial packets
    for (let i = 0; i < 15; i++) {
        const start = nodes[Math.floor(Math.random() * nodes.length)];
        const end = nodes[Math.floor(Math.random() * nodes.length)];
        if (start !== end) {
            packets.push(new Packet(start, end));
        }
    }

    // Draw connections between nodes
    function drawConnections() {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    const opacity = (1 - distance / connectionDistance) * 0.3;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(56, 239, 125, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
    }

    // Draw WiFi signals
    function drawWiFiSignals() {
        const time = Date.now() * 0.001;

        for (let i = 0; i < 3; i++) {
            const x = 100 + (canvas.width - 200) * (i / 2);
            const y = 100 + Math.sin(time + i * 2) * 50;

            for (let wave = 0; wave < 3; wave++) {
                const pulse = (time + wave * 0.5 + i) % 2;
                const size = 20 + wave * 15 + pulse * 20;
                const opacity = Math.max(0, 0.4 - pulse * 0.2);

                ctx.beginPath();
                ctx.arc(x, y, size, Math.PI * 1.2, Math.PI * 1.8);
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.lineWidth = 2;
                ctx.stroke();
            }

            // WiFi icon center
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fill();
        }
    }

    // Animation loop
    function animate() {
        // Clear with fade
        ctx.fillStyle = 'rgba(17, 153, 142, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw connections
        drawConnections();

        // Draw WiFi signals
        drawWiFiSignals();

        // Update and draw browsers
        browsers.forEach(browser => {
            browser.update();
            browser.draw();
        });

        // Update and draw nodes
        nodes.forEach(node => {
            node.update();
            node.draw();
        });

        // Update and draw packets
        packets.forEach(packet => {
            packet.update();
            packet.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Create floating web icons
    createFloatingWebIcons();
});

function createFloatingWebIcons() {
    const hero = document.querySelector('.web-hero-background');
    if (!hero) return;

    const icons = ['🌐', '💻', '📱', '🖥️', '⚡', '🔗', '📊', '🎨', '🚀', '⭐', '💡', '🔒', '📈', '✨', '🌟'];

    for (let i = 0; i < 20; i++) {
        const icon = document.createElement('div');
        icon.className = 'floating-web-icon';
        icon.textContent = icons[Math.floor(Math.random() * icons.length)];
        icon.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 25 + 20}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatWeb ${Math.random() * 15 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
            opacity: ${Math.random() * 0.4 + 0.3};
            filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
        `;
        hero.appendChild(icon);
    }

    if (!document.getElementById('floatingWebStyle')) {
        const style = document.createElement('style');
        style.id = 'floatingWebStyle';
        style.textContent = `
            @keyframes floatWeb {
                0% {
                    transform: translateY(0) translateX(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.7;
                }
                90% {
                    opacity: 0.7;
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