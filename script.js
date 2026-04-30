/* K-POP ELEGANCE - 原生 JS 交互 */

document.addEventListener('DOMContentLoaded', () => {
    // 简单的滚动进场动画 (Intersection Observer)
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 为卡片添加动画初始状态
    const animatedElements = document.querySelectorAll('.card, .hero-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
        
        // 当元素变为可见时，触发动画
        observer.observe(el);
    });

    // 观察者回调函数（通过类名触发样式）
    const revealCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    };

    const finalObserver = new IntersectionObserver(revealCallback, observerOptions);
    animatedElements.forEach(el => finalObserver.observe(el));
});
