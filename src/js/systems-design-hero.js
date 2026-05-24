// Systems Design Hero Animation - Architecture Diagrams and Data Flow
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('systemsCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Architecture components (boxes representing services/modules)
    const components = [];
    const componentCount = 12;

    // Data flow particles
    const dataFlows = [];

    // Component class (representing microservices, modules, etc.)
    class Component {
        constructor() {
            this.x = Math.random() * (canvas.width - 200) + 100;
            this.y = Math.random() * (canvas.height - 200) + 100;
            this.width = 80 + Math.random() * 40;
            this.height = 60 + Math.random() * 20;
            this.vx = (Math.random() - 0.5) * 0.2;
            this.vy = (Math.random() - 0.5) * 0.2;
            this.opacity = 0.6 + Math.random() * 0.3;
            this.pulsePhase = Math.random() * Math.PI * 2;
            this.connections = [];
            this.type = this.getRandomType();
        }

        getRandomType() {
            const types = ['service', 'database', 'api', 'queue'];
            return types[Math.floor(Math.random() * types.length)];
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 50 || this.x > canvas.width - this.width - 50) this.vx *= -1;
            if (this.y < 50 || this.y > canvas.height - this.height - 50) this.vy *= -1;

            // Keep in bounds
            this.x = Math.max(50, Math.min(canvas.width - this.width - 50, this.x));
            this.y = Math.max(50, Math.min(canvas.height - this.height - 50, this.y));
        }

        draw() {
            const time = Date.now() * 0.001;
            const pulse = Math.sin(time + this.pulsePhase) * 0.2 + 0.8;

            ctx.save();
            ctx.globalAlpha = this.opacity * pulse;

            // Component shadow
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.fillRect(this.x + 3, this.y + 3, this.width, this.height);

            // Component body based on type
            const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
            
            if (this.type === 'database') {
                gradient.addColorStop(0, 'rgba(46, 204, 113, 0.8)');
                gradient.addColorStop(1, 'rgba(39, 174, 96, 0.6)');
            } else if (this.type === 'api') {
                gradient.addColorStop(0, 'rgba(52, 152, 219, 0.8)');
                gradient.addColorStop(1, 'rgba(41, 128, 185, 0.6)');
            } else if (this.type === 'queue') {
                gradient.addColorStop(0, 'rgba(155, 89, 182, 0.8)');
                gradient.addColorStop(1, 'rgba(142, 68, 173, 0.6)');
            } else {
                gradient.addColorStop(0, 'rgba(52, 152, 219, 0.7)');
                gradient.addColorStop(1, 'rgba(41, 128, 185, 0.5)');
            }

            ctx.fillStyle = gradient;
            ctx.fillRect(this.x, this.y, this.width, this.height);

            // Component border
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.x, this.y, this.width, this.height);

            // Component header bar
            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.fillRect(this.x, this.y, this.width, 15);

            // Component dots (like window controls)
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.arc(this.x + 10 + i * 10, this.y + 7.5, 2, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.fill();
            }

            // Component icon/indicator
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.font = 'bold 12px monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            let icon = '';
            if (this.type === 'database') icon = 'DB';
            else if (this.type === 'api') icon = 'API';
            else if (this.type === 'queue') icon = 'Q';
            else icon = 'SVC';
            
            ctx.fillText(icon, this.x + this.width / 2, this.y + this.height / 2 + 5);

            ctx.restore();
        }

        getCenter() {
            return {
                x: this.x + this.width / 2,
                y: this.y + this.height / 2
            };
        }
    }

    // Data Flow particle class
    class DataFlow {
        constructor(start, end) {
            this.start = start;
            this.end = end;
            this.progress = 0;
            this.speed = 0.008 + Math.random() * 0.012;
            this.size = 3;
            this.color = this.getRandomColor();
        }

        getRandomColor() {
            const colors = [
                { r: 52, g: 152, b: 219 },   // Blue
                { r: 46, g: 204, b: 113 },   // Green
                { r: 155, g: 89, b: 182 },   // Purple
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.progress += this.speed;
            if (this.progress >= 1) {
                this.progress = 0;
                // Sometimes change destination
                if (Math.random() > 0.7) {
                    this.start = this.end;
                    this.end = components[Math.floor(Math.random() * components.length)];
                }
            }
        }

        draw() {
            const startCenter = this.start.getCenter();
            const endCenter = this.end.getCenter();
            
            const x = startCenter.x + (endCenter.x - startCenter.x) * this.progress;
            const y = startCenter.y + (endCenter.y - startCenter.y) * this.progress;

            // Draw trail
            ctx.beginPath();
            ctx.arc(x, y, this.size * 2, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.size * 2);
            gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.6)`);
            gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Draw core
            ctx.beginPath();
            ctx.arc(x, y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1)`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.8)`;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    // Initialize components
    for (let i = 0; i < componentCount; i++) {
        components.push(new Component());
    }

    // Create data flows
    for (let i = 0; i < 20; i++) {
        const start = components[Math.floor(Math.random() * components.length)];
        const end = components[Math.floor(Math.random() * components.length)];
        if (start !== end) {
            dataFlows.push(new DataFlow(start, end));
        }
    }

    // Draw connections between components
    function drawConnections() {
        for (let i = 0; i < components.length; i++) {
            for (let j = i + 1; j < components.length; j++) {
                const c1 = components[i].getCenter();
                const c2 = components[j].getCenter();
                const dx = c1.x - c2.x;
                const dy = c1.y - c2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 300) {
                    const opacity = (1 - distance / 300) * 0.2;
                    
                    ctx.beginPath();
                    ctx.moveTo(c1.x, c1.y);
                    ctx.lineTo(c2.x, c2.y);
                    ctx.strokeStyle = `rgba(52, 152, 219, ${opacity})`;
                    ctx.lineWidth = 1.5;
                    ctx.setLineDash([5, 5]);
                    ctx.stroke();
                    ctx.setLineDash([]);
                }
            }
        }
    }

    // Draw layer labels
    function drawLayerLabels() {
        const time = Date.now() * 0.0005;
        const pulse = Math.sin(time) * 0.2 + 0.8;

        ctx.save();
        ctx.globalAlpha = pulse * 0.3;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.font = 'bold 14px sans-serif';
        ctx.textAlign = 'left';

        const labels = ['Presentation Layer', 'Business Logic', 'Data Layer'];
        const yPos = [100, canvas.height / 2, canvas.height - 100];

        labels.forEach((label, i) => {
            ctx.fillText(label, 30, yPos[i]);
        });

        ctx.restore();
    }

    // Draw system architecture indicators
    function drawArchitectureIndicators() {
        const time = Date.now() * 0.001;

        // Load balancer indicator
        const lbX = 100;
        const lbY = 50;
        
        ctx.save();
        ctx.globalAlpha = 0.4;
        ctx.strokeStyle = '#3498db';
        ctx.lineWidth = 2;
        
        // Draw cloud shape
        ctx.beginPath();
        ctx.arc(lbX, lbY, 15, Math.PI * 0.5, Math.PI * 1.5);
        ctx.arc(lbX + 15, lbY - 10, 10, Math.PI, 0);
        ctx.arc(lbX + 30, lbY, 15, Math.PI * 1.5, Math.PI * 0.5);
        ctx.closePath();
        ctx.stroke();
        
        ctx.fillStyle = 'rgba(52, 152, 219, 0.2)';
        ctx.fill();
        
        ctx.restore();

        // Arrows indicating flow
        for (let i = 0; i < 3; i++) {
            const arrowY = canvas.height - 50 - i * 40;
            const offset = Math.sin(time + i) * 20;
            
            ctx.save();
            ctx.globalAlpha = 0.3;
            ctx.strokeStyle = '#2ecc71';
            ctx.lineWidth = 2;
            
            ctx.beginPath();
            ctx.moveTo(canvas.width - 100 + offset, arrowY);
            ctx.lineTo(canvas.width - 50 + offset, arrowY);
            ctx.lineTo(canvas.width - 60 + offset, arrowY - 5);
            ctx.moveTo(canvas.width - 50 + offset, arrowY);
            ctx.lineTo(canvas.width - 60 + offset, arrowY + 5);
            ctx.stroke();
            
            ctx.restore();
        }
    }

    // Animation loop
    function animate() {
        // Clear with fade
        ctx.fillStyle = 'rgba(44, 62, 80, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw connections
        drawConnections();

        // Draw layer labels
        drawLayerLabels();

        // Draw architecture indicators
        drawArchitectureIndicators();

        // Update and draw components
        components.forEach(component => {
            component.update();
            component.draw();
        });

        // Update and draw data flows
        dataFlows.forEach(flow => {
            flow.update();
            flow.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Create floating architecture icons
    createFloatingArchIcons();
});

function createFloatingArchIcons() {
    const hero = document.querySelector('.systems-hero-background');
    if (!hero) return;

    const icons = ['⚙️', '🔧', '🏗️', '📐', '🔗', '📊', '⚡', '🎯', '🔄', '💾', '🌐', '📡', '🔒', '⚖️', '🚀'];

    for (let i = 0; i < 20; i++) {
        const icon = document.createElement('div');
        icon.className = 'floating-arch-icon';
        icon.textContent = icons[Math.floor(Math.random() * icons.length)];
        icon.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 20}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatArch ${Math.random() * 15 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
            opacity: ${Math.random() * 0.3 + 0.2};
            filter: drop-shadow(0 0 8px rgba(52, 152, 219, 0.5));
        `;
        hero.appendChild(icon);
    }

    if (!document.getElementById('floatingArchStyle')) {
        const style = document.createElement('style');
        style.id = 'floatingArchStyle';
        style.textContent = `
            @keyframes floatArch {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.5;
                }
                90% {
                    opacity: 0.5;
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