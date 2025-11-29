/* ================================
   Smooth Scroll for Anchor Links
================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {

    // 外部リンクで誤作動するのを防止
    const href = link.getAttribute('href');
    if (href === "#" || href === "" || href === null) return;

    link.addEventListener('click', e => {
        // ページ内リンクのみスムーススクロール
        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        // Safariスムーススクロール安定化
        const top = target.getBoundingClientRect().top + window.scrollY - 10;

        window.scrollTo({
            top,
            behavior: 'smooth'
        });
    });
});


/* ================================
   Hero Fade-In on Load
================================ */
window.addEventListener('load', () => {
    // HTML構造に合わせて .apple-hero に変更
    const hero = document.querySelector('.apple-hero');
    if (hero) {
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }
});
