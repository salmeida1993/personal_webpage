/*Copyright (c) 2025 Stewart Almeida
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files…
 [or "Licensed under the MIT License - see LICENSE file for details"]
*/

// Skills page JavaScript functionality

// Animate skill bars when they come into view
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                
                // Reset width to 0 and then animate to target width
                skillBar.style.width = '0%';
                
                setTimeout(() => {
                    skillBar.style.width = width + '%';
                }, 100);
                
                // Unobserve after animation to prevent re-triggering
                observer.unobserve(skillBar);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Add subtle hover effects to skill cards
function initializeSkillCardEffects() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(-5px)';
        });
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
    initializeSkillCardEffects();
});

// Re-initialize animations if page is revisited (for single-page apps)
window.addEventListener('focus', () => {
    // Small delay to ensure page is fully visible
    setTimeout(() => {
        animateSkillBars();
    }, 200);
});