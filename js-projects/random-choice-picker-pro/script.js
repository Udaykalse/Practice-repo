class ChoicePicker {
    constructor() {
        this.textarea = document.getElementById('textarea');
        this.tagsContainer = document.getElementById('tags');
        this.emptyState = document.getElementById('emptyState');
        this.pickBtn = document.getElementById('pickBtn');
        this.clearBtn = document.getElementById('clearBtn');
        this.themeToggle = document.getElementById('themeToggle');
        this.choiceCountSpan = document.getElementById('choiceCount');
        this.statusTextSpan = document.getElementById('statusText');
        this.toastMessage = document.getElementById('toastMessage');
        this.currentTags = [];
        this.isSelecting = false;
        
        this.init();
    }
    
    init() {
        this.loadThemePreference();
        this.setupEventListeners();
        this.updateUI();
        this.textarea.focus();
    }
    
    setupEventListeners() {
        this.textarea.addEventListener('keyup', (e) => {
            this.createTagsFromInput(e.target.value);
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (!this.isSelecting && this.currentTags.length > 0) {
                    this.startRandomSelection();
                } else if (this.currentTags.length === 0) {
                    this.showToast('Please add at least one choice first', 'warning');
                }
            }
        });
        
        this.pickBtn.addEventListener('click', () => {
            if (!this.isSelecting && this.currentTags.length > 0) {
                this.startRandomSelection();
            }
        });
        
        this.clearBtn.addEventListener('click', () => {
            this.clearAllChoices();
            this.showToast('All choices cleared', 'info');
        });
        
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }
    
    createTagsFromInput(input) {
        const tags = input
            .split(',')
            .filter(tag => tag.trim() !== '')
            .map(tag => tag.trim());
        
        this.currentTags = tags;
        this.renderTags();
        this.updateUI();
    }
    
    renderTags() {
        this.tagsContainer.innerHTML = '';
        
        if (this.currentTags.length === 0) {
            this.emptyState.style.display = 'block';
            this.pickBtn.disabled = true;
            return;
        }
        
        this.emptyState.style.display = 'none';
        this.pickBtn.disabled = false;
        
        this.currentTags.forEach((tagText, index) => {
            const tagElement = document.createElement('span');
            tagElement.classList.add('tag');
            tagElement.innerText = tagText;
            tagElement.setAttribute('data-index', index);
            this.tagsContainer.appendChild(tagElement);
        });
    }
    
    updateUI() {
        const count = this.currentTags.length;
        this.choiceCountSpan.textContent = count;
        
        if (count === 0) {
            this.statusTextSpan.innerHTML = '<i class="fas fa-circle-info"></i> No choices';
        } else if (count < 3) {
            this.statusTextSpan.innerHTML = '<i class="fas fa-plus-circle"></i> Add more options';
        } else {
            this.statusTextSpan.innerHTML = '<i class="fas fa-check-circle"></i> Ready to pick';
        }
    }
    
    startRandomSelection() {
        if (this.isSelecting) return;
        
        const tags = document.querySelectorAll('.tag');
        if (tags.length === 0) return;
        
        this.isSelecting = true;
        this.pickBtn.disabled = true;
        this.textarea.disabled = true;
        this.clearBtn.disabled = true;
        this.statusTextSpan.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Selecting...';
        
        const iterations = 30;
        let currentIteration = 0;
        
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * tags.length);
            const randomTag = tags[randomIndex];
            
            this.highlightTag(randomTag);
            
            setTimeout(() => {
                this.unhighlightTag(randomTag);
            }, 80);
            
            currentIteration++;
            
            if (currentIteration >= iterations) {
                clearInterval(interval);
                setTimeout(() => {
                    const finalIndex = Math.floor(Math.random() * tags.length);
                    const finalTag = tags[finalIndex];
                    this.highlightTag(finalTag, true);
                    this.statusTextSpan.innerHTML = '<i class="fas fa-crown"></i> Decision made!';
                    this.showToast(`✨ Selected: ${finalTag.innerText}`, 'success');
                    this.isSelecting = false;
                    this.pickBtn.disabled = false;
                    this.textarea.disabled = false;
                    this.clearBtn.disabled = false;
                    
                    setTimeout(() => {
                        this.unhighlightTag(finalTag);
                        if (this.currentTags.length > 0) {
                            this.statusTextSpan.innerHTML = '<i class="fas fa-check-circle"></i> Ready to pick';
                        }
                    }, 1500);
                }, 100);
            }
        }, 100);
    }
    
    highlightTag(tagElement, isFinal = false) {
        tagElement.classList.add('highlight');
        if (isFinal) {
            tagElement.style.transform = 'scale(1.1)';
            setTimeout(() => {
                if (tagElement) {
                    tagElement.style.transform = '';
                }
            }, 300);
        }
    }
    
    unhighlightTag(tagElement) {
        tagElement.classList.remove('highlight');
    }
    
    clearAllChoices() {
        this.textarea.value = '';
        this.currentTags = [];
        this.renderTags();
        this.updateUI();
        this.textarea.focus();
    }
    
    showToast(message, type = 'info') {
        this.toastMessage.textContent = message;
        this.toastMessage.classList.add('show');
        
        setTimeout(() => {
            this.toastMessage.classList.remove('show');
        }, 2500);
    }
    
    loadThemePreference() {
        const savedTheme = localStorage.getItem('theme');
        const moonIcon = this.themeToggle.querySelector('.fa-moon');
        const sunIcon = this.themeToggle.querySelector('.fa-sun');
        
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    }
    
    toggleTheme() {
        const moonIcon = this.themeToggle.querySelector('.fa-moon');
        const sunIcon = this.themeToggle.querySelector('.fa-sun');
        
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
            this.showToast('Light mode activated', 'info');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
            this.showToast('Dark mode activated', 'info');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ChoicePicker();
});