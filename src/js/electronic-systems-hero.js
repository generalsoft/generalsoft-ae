// Electronic Systems & IoT Hero Animation - Circuit Board and Signal Flow
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('iotCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Circuit node system
    const nodes = [];
    const nodeCount = 50;
    const connectionDistance = 150;

    // Signal particles that flow through connections
    const signals = [];

    // Circuit Node class
    class Node {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 3 + 2;
            this.connections = [];
            this.pulsePhase = Math.random() * Math.PI * 2;
        }

        draw() {
            const time = Date.now() * 0.001;
            const pulse = Math.sin(time + this.pulsePhase) * 0.3 + 0.7;
            
            // Draw node glow
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 2);
            gradient.addColorStop(0, `rgba(255, 165, 0, ${pulse * 0.8})`);
            gradient.addColorStop(1, 'rgba(255, 165, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.fill();

            // Draw node core
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 165, 0, ${pulse})`;
            ctx.fill();
            
            // Draw node border
            ctx.strokeStyle = `rgba(0, 174, 255, ${pulse * 0.8})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }

    // Signal particle class
    class Signal {
        constructor(startNode, endNode) {
            this.startNode = startNode;
            this.endNode = endNode;
            this.progress = 0;
            this.speed = 0.01 + Math.random() * 0.02;
            this.size = 2;
        }

        update() {
            this.progress += this.speed;
            if (this.progress >= 1) {
                this.progress = 0;
                // Randomly change destination
                if (Math.random() > 0.7) {
                    this.startNode = this.endNode;
                    this.endNode = nodes[Math.floor(Math.random() * nodes.length)];
                }
            }
        }

        draw() {
            const x = this.startNode.x + (this.endNode.x - this.startNode.x) * this.progress;
            const y = this.startNode.y + (this.endNode.y - this.startNode.y) * this.progress;
            
            // Draw signal trail
            ctx.beginPath();
            ctx.arc(x, y, this.size * 2, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.size * 2);
            gradient.addColorStop(0, 'rgba(0, 174, 255, 0.8)');
            gradient.addColorStop(1, 'rgba(0, 174, 255, 0)');
            ctx.fillStyle = gradient;
            ctx.fill();

            // Draw signal core
            ctx.beginPath();
            ctx.arc(x, y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 174, 255, 1)';
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(0, 174, 255, 1)';
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node());
    }

    // Create connections between nearby nodes
    function createConnections() {
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].connections = [];
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    nodes[i].connections.push(nodes[j]);
                }
            }
        }
    }

    createConnections();

    // Create initial signals
    for (let i = 0; i < 20; i++) {
        const startNode = nodes[Math.floor(Math.random() * nodes.length)];
        const endNode = nodes[Math.floor(Math.random() * nodes.length)];
        if (startNode !== endNode) {
            signals.push(new Signal(startNode, endNode));
        }
    }

    // Draw circuit board traces (connections)
    function drawConnections() {
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            for (let j = 0; j < node.connections.length; j++) {
                const connectedNode = node.connections[j];
                const dx = connectedNode.x - node.x;
                const dy = connectedNode.y - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const opacity = (1 - distance / connectionDistance) * 0.3;

                // Draw circuit trace
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                
                // Add some angles to make it look like circuit traces
                const midX = (node.x + connectedNode.x) / 2;
                const midY = (node.y + connectedNode.y) / 2;
                
                if (Math.abs(dx) > Math.abs(dy)) {
                    // Horizontal-first routing
                    ctx.lineTo(midX, node.y);
                    ctx.lineTo(midX, connectedNode.y);
                    ctx.lineTo(connectedNode.x, connectedNode.y);
                } else {
                    // Vertical-first routing
                    ctx.lineTo(node.x, midY);
                    ctx.lineTo(connectedNode.x, midY);
                    ctx.lineTo(connectedNode.x, connectedNode.y);
                }

                ctx.strokeStyle = `rgba(255, 165, 0, ${opacity})`;
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }
    }

    // Draw microchip icons at certain nodes
    function drawMicrochips() {
        const time = Date.now() * 0.001;
        
        for (let i = 0; i < nodes.length; i += 10) {
            const node = nodes[i];
            const pulse = Math.sin(time + i) * 0.2 + 0.8;
            
            ctx.save();
            ctx.translate(node.x, node.y);
            ctx.globalAlpha = pulse * 0.5;
            
            const size = 15;
            
            // Draw chip body
            ctx.fillStyle = 'rgba(255, 165, 0, 0.3)';
            ctx.fillRect(-size, -size, size * 2, size * 2);
            
            // Draw chip pins
            ctx.strokeStyle = 'rgba(255, 165, 0, 0.5)';
            ctx.lineWidth = 1;
            
            for (let pin = 0; pin < 4; pin++) {
                // Top pins
                ctx.beginPath();
                ctx.moveTo(-size + 5 + pin * 7, -size);
                ctx.lineTo(-size + 5 + pin * 7, -size - 5);
                ctx.stroke();
                
                // Bottom pins
                ctx.beginPath();
                ctx.moveTo(-size + 5 + pin * 7, size);
                ctx.lineTo(-size + 5 + pin * 7, size + 5);
                ctx.stroke();
            }
            
            // Draw chip label
            ctx.fillStyle = 'rgba(0, 174, 255, 0.6)';
            ctx.fillRect(-size * 0.7, -size * 0.7, size * 1.4, size * 1.4);
            
            ctx.restore();
        }
    }

    // Draw data packets flowing
    function drawDataPackets() {
        const time = Date.now() * 0.0005;
        
        for (let i = 0; i < 10; i++) {
            const t = (time + i * 0.1) % 1;
            const x = 50 + (canvas.width - 100) * t;
            const y = canvas.height / 2 + Math.sin(t * Math.PI * 4) * 100;
            
            ctx.fillStyle = `rgba(0, 174, 255, ${Math.sin(t * Math.PI) * 0.5 + 0.3})`;
            ctx.fillRect(x - 5, y - 3, 10, 6);
            
            ctx.strokeStyle = `rgba(255, 165, 0, ${Math.sin(t * Math.PI) * 0.5 + 0.3})`;
            ctx.lineWidth = 1;
            ctx.strokeRect(x - 5, y - 3, 10, 6);
        }
    }

    // Animation loop
    function animate() {
        // Clear with fade effect
        ctx.fillStyle = 'rgba(20, 30, 48, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw circuit traces
        drawConnections();

        // Draw microchips
        drawMicrochips();

        // Draw and update nodes
        nodes.forEach(node => {
            node.draw();
        });

        // Draw and update signals
        signals.forEach(signal => {
            signal.update();
            signal.draw();
        });

        // Draw data packets
        drawDataPackets();

        requestAnimationFrame(animate);
    }

    animate();

    // Add floating IoT device icons
    createFloatingDevices();
});

function createFloatingDevices() {
    const hero = document.querySelector('.iot-hero-background');
    if (!hero) return;

    const devices = ['📱', '💻', '⌚', '🔌', '📡', '🌡️', '💡', '📷', '🔊', '🖥️'];

    for (let i = 0; i < 15; i++) {
        const device = document.createElement('div');
        device.className = 'floating-iot-device';
        device.textContent = devices[Math.floor(Math.random() * devices.length)];
        device.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 20}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatIoT ${Math.random() * 15 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
            opacity: ${Math.random() * 0.3 + 0.2};
            filter: drop-shadow(0 0 8px rgba(255, 165, 0, 0.6));
        `;
        hero.appendChild(device);
    }

    if (!document.getElementById('floatingIoTStyle')) {
        const style = document.createElement('style');
        style.id = 'floatingIoTStyle';
        style.textContent = `
            @keyframes floatIoT {
                0% {
                    transform: translateY(0) translateX(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.6;
                }
                90% {
                    opacity: 0.6;
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