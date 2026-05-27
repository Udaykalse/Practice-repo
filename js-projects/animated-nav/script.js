class AnimatedNavigation {
    constructor() {
        this.nav = document.getElementById('nav');
        this.toggleBtn = document.getElementById('navToggle');
        this.overlay = document.getElementById('overlay');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.demoBtn = document.getElementById('demoBtn');
        this.toggleDemoBtn = document.getElementById('toggleDemoBtn');
        this.isExpanded = true;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupKeyboardNavigation();
        this.updateAriaAttributes();
        this.setupActiveLinkHighlight();
    }
    
    setupEventListeners() {
        this.toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleNavigation();
        });
        
        this.overlay.addEventListener('click', () => {
            if (this.isExpanded) {
                this.closeNavigation();
            }
        });
        
        document.addEventListener('click', (e) => {
            if (this.isExpanded && !this.nav.contains(e.target)) {
                this.closeNavigation();
            }
        });
        
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                this.showToast(`Navigating to ${link.textContent}`);
                if (window.innerWidth <= 768) {
                    this.closeNavigation();
                }
            });
        });
        
        if (this.demoBtn) {
            this.demoBtn.addEventListener('click', () => {
                this.showToast('✨ Explore the smooth animations and responsive design!');
                this.animateDemo();
            });
        }
        
        if (this.toggleDemoBtn) {
            this.toggleDemoBtn.addEventListener('click', () => {
                this.toggleNavigation();
            });
        }
    }
    
    toggleNavigation() {
        if (this.isExpanded) {
            this.closeNavigation();
        } else {
            this.openNavigation();
        }
    }
    
    openNavigation() {
        this.nav.classList.add('expanded');
        this.overlay.classList.add('active');
        this.isExpanded = true;
        this.toggleBtn.setAttribute('aria-expanded', 'true');
        this.updateAriaAttributes();
    }
    
    closeNavigation() {
        this.nav.classList.remove('expanded');
        this.overlay.classList.remove('active');
        this.isExpanded = false;
        this.toggleBtn.setAttribute('aria-expanded', 'false');
        this.updateAriaAttributes();
    }
    
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isExpanded) {
                this.closeNavigation();
                this.toggleBtn.focus();
            }
            
            if (e.key === 'Tab' && this.isExpanded) {
                const focusableElements = this.nav.querySelectorAll('a, button');
                const firstFocusable = focusableElements[0];
                const lastFocusable = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey && document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        });
    }
    
    updateAriaAttributes() {
        const expandedState = this.isExpanded;
        this.toggleBtn.setAttribute('aria-expanded', expandedState);
        
        this.navLinks.forEach(link => {
            const isActive = link.classList.contains('active');
            link.setAttribute('aria-current', isActive ? 'page' : 'false');
        });
    }
    
    setupActiveLinkHighlight() {
        const currentPath = window.location.pathname;
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href !== '#' && currentPath.includes(href)) {
                this.navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }
    
    showToast(message) {
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) {
            existingToast.remove();
        }
        
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerHTML = `
            <i class="fas fa-info-circle"></i>
            <span>${message}</span>
        `;
        toast.style.cssText = `
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: #2d3748;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            font-size: 0.85rem;
            z-index: 1000;
            opacity: 0;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            pointer-events: none;
            white-space: nowrap;
            font-family: 'Inter', sans-serif;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.transform = 'translateX(-50%) translateY(0)';
            toast.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
            toast.style.transform = 'translateX(-50%) translateY(100px)';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 2500);
    }
    
    animateDemo() {
        this.openNavigation();
        
        let index = 0;
        const links = Array.from(this.navLinks);
        const interval = setInterval(() => {
            if (index < links.length) {
                links[index].classList.add('active');
                if (index > 0) {
                    links[index - 1].classList.remove('active');
                }
                index++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    if (links.length > 0) {
                        links.forEach(l => l.classList.remove('active'));
                        links[0].classList.add('active');
                    }
                    this.showToast('✨ Demo complete! Click outside to close');
                }, 500);
            }
        }, 600);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AnimatedNavigation();
});