class FAQAccordion {
  constructor() {
    this.container = document.getElementById('faqContainer');
    this.faqItems = Array.from(document.querySelectorAll('.faq-item'));
    this.expandAllBtn = document.getElementById('expandAllBtn');
    this.collapseAllBtn = document.getElementById('collapseAllBtn');
    this.autoCloseOthers = true;
    
    this.init();
  }
  
  init() {
    this.setupEventListeners();
    this.setupAnswerHeights();
    window.addEventListener('resize', () => this.setupAnswerHeights());
  }
  
  setupAnswerHeights() {
    this.faqItems.forEach(item => {
      const answer = item.querySelector('.faq-answer');
      if (answer) {
        if (item.classList.contains('active')) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          answer.style.maxHeight = '0px';
        }
      }
    });
  }
  
  openItem(item, updateHeight = true) {
    if (!item) return;
    
    if (this.autoCloseOthers && !item.classList.contains('active')) {
      this.faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          this.closeItem(otherItem);
        }
      });
    }
    
    if (!item.classList.contains('active')) {
      item.classList.add('active');
      const answer = item.querySelector('.faq-answer');
      if (answer && updateHeight) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
      
      this.animateAnswerIn(answer);
    }
  }
  
  closeItem(item, updateHeight = true) {
    if (!item) return;
    
    if (item.classList.contains('active')) {
      const answer = item.querySelector('.faq-answer');
      if (answer && updateHeight) {
        answer.style.maxHeight = '0px';
      }
      item.classList.remove('active');
    }
  }
  
  animateAnswerIn(answer) {
    if (!answer) return;
    answer.style.transition = 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
  }
  
  toggleItem(item) {
    if (item.classList.contains('active')) {
      this.closeItem(item);
    } else {
      this.openItem(item);
    }
  }
  
  expandAll() {
    this.autoCloseOthers = false;
    this.faqItems.forEach(item => {
      this.openItem(item);
    });
    setTimeout(() => {
      this.autoCloseOthers = true;
    }, 100);
  }
  
  collapseAll() {
    this.faqItems.forEach(item => {
      this.closeItem(item);
    });
  }
  
  handleQuestionClick(questionElement, item) {
    const toggleBtn = item.querySelector('.faq-toggle-btn');
    const isClickOnToggle = toggleBtn && toggleBtn.contains(event.target);
    
    if (!isClickOnToggle) {
      this.toggleItem(item);
    }
  }
  
  setupEventListeners() {
    this.faqItems.forEach(item => {
      const questionDiv = item.querySelector('.faq-question');
      const toggleBtn = item.querySelector('.faq-toggle-btn');
      
      if (questionDiv) {
        questionDiv.addEventListener('click', (e) => {
          if (toggleBtn && toggleBtn.contains(e.target)) {
            e.stopPropagation();
            this.toggleItem(item);
          } else {
            this.toggleItem(item);
          }
        });
      }
      
      if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggleItem(item);
        });
      }
    });
    
    if (this.expandAllBtn) {
      this.expandAllBtn.addEventListener('click', () => {
        this.expandAll();
      });
    }
    
    if (this.collapseAllBtn) {
      this.collapseAllBtn.addEventListener('click', () => {
        this.collapseAll();
      });
    }
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.collapseAll();
      }
    });
  }
}

const initFAQ = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new FAQAccordion();
    });
  } else {
    new FAQAccordion();
  }
};

initFAQ();