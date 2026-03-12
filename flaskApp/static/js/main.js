// ============================================================
// CardioInsight — Main JavaScript
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
    initScrollHeader();
    initMobileMenu();
    initDashboardNavigation();
    initContactForm();
    initFadeIn();
    initModalEscClose();
});

// ============================================================
// Header shrink on scroll
// ============================================================
function initScrollHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
}

// ============================================================
// Mobile Menu
// ============================================================
function initMobileMenu() {
    const toggle = document.getElementById('mobile-toggle');
    const links  = document.getElementById('nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
    });

    // close when a link is clicked
    links.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => links.classList.remove('open'));
    });
}

// ============================================================
// Dashboard Navigation
// ============================================================
let currentDashboard = 0;

function initDashboardNavigation() {
    updateDashboardButtons();

    document.querySelectorAll('.indicator').forEach((dot, i) => {
        dot.addEventListener('click', () => goToDashboard(i));
    });
}

function changeDashboard(dir) {
    const total = document.querySelectorAll('.dashboard-slide').length;
    const next  = currentDashboard + dir;
    if (next >= 0 && next < total) goToDashboard(next);
}

function goToDashboard(index) {
    const slides     = document.querySelectorAll('.dashboard-slide');
    const indicators = document.querySelectorAll('.indicator');
    if (!slides.length) return;

    slides[currentDashboard].classList.remove('active');
    indicators[currentDashboard]?.classList.remove('active');

    slides[index].classList.add('active');
    indicators[index]?.classList.add('active');

    currentDashboard = index;
    updateDashboardButtons();
}

function updateDashboardButtons() {
    const total   = document.querySelectorAll('.dashboard-slide').length;
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (prevBtn) prevBtn.disabled = currentDashboard === 0;
    if (nextBtn) {
        nextBtn.disabled = currentDashboard === total - 1;
        nextBtn.classList.toggle('active-ctrl', currentDashboard < total - 1);
    }
}

// ============================================================
// Visualization fullscreen modal
// ============================================================
function openVizModal(btn, title) {
    const card   = btn.closest('.viz-card');
    const iframe = card.querySelector('iframe');
    const modal  = document.getElementById('fullscreen-modal');
    const mIframe = document.getElementById('modal-iframe');
    const mTitle  = document.getElementById('modal-title');

    if (!modal || !mIframe || !iframe) return;

    mIframe.src = iframe.src;
    if (mTitle) mTitle.textContent = title || 'Visualization';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal  = document.getElementById('fullscreen-modal');
    const mIframe = document.getElementById('modal-iframe');
    if (modal)  modal.classList.remove('active');
    if (mIframe) mIframe.src = '';
    document.body.style.overflow = '';
}

function initModalEscClose() {
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });
    const modal = document.getElementById('fullscreen-modal');
    if (modal) {
        modal.addEventListener('click', e => {
            if (e.target === modal) closeModal();
        });
    }
}

// ============================================================
// Scroll fade-in animation
// ============================================================
function initFadeIn() {
    const items = document.querySelectorAll('.fade-in');
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    items.forEach(el => observer.observe(el));
}

// ============================================================
// Contact Form (async)
// ============================================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const orig = btn.textContent;

        btn.textContent = 'Sending…';
        btn.disabled = true;

        try {
            const res  = await fetch(form.action, { method: 'POST', body: new FormData(form) });
            const data = await res.json();
            showToast(data.success ? '✓ Message sent successfully!' : '✕ Something went wrong.', data.success ? 'success' : 'error');
            if (data.success) form.reset();
        } catch {
            showToast('✕ Network error. Please try again.', 'error');
        } finally {
            btn.textContent = orig;
            btn.disabled = false;
        }
    });
}

function showToast(msg, type) {
    document.querySelector('.ci-toast')?.remove();
    const t = document.createElement('div');
    t.className = 'ci-toast';
    t.textContent = msg;
    t.style.cssText = `
        position:fixed; top:90px; right:24px; z-index:3000;
        padding:14px 22px; border-radius:10px; font-size:14px; font-weight:500;
        background:${type === 'success' ? '#0ABDE3' : '#EE5A24'}; color:#060D1F;
        box-shadow:0 10px 32px rgba(0,0,0,0.4);
        animation:toastIn .3s cubic-bezier(0.4,0,0.2,1);
    `;
    document.body.appendChild(t);
    setTimeout(() => { t.style.animation = 'toastOut .3s ease'; setTimeout(() => t.remove(), 280); }, 4500);
}

// inject toast keyframes once
const ks = document.createElement('style');
ks.textContent = `
@keyframes toastIn  { from{transform:translateX(110%);opacity:0} to{transform:none;opacity:1} }
@keyframes toastOut { from{transform:none;opacity:1} to{transform:translateX(110%);opacity:0} }
`;
document.head.appendChild(ks);
