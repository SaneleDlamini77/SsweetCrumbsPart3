
// Main interactive JS: modals, gallery lightbox, search filter, form validation, dynamic messages
document.addEventListener('DOMContentLoaded', () => {
  // Modal openers
  document.querySelectorAll('[data-modal-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.modalTarget);
      if (target) target.style.display = 'flex';
    });
  });
  document.querySelectorAll('.modal-backdrop .close, .modal-backdrop').forEach(el => {
    el.addEventListener('click', (e) => {
      if(e.target !== el && !el.classList.contains('modal-backdrop')) return;
      el.style.display = 'none';
    });
  });

  // Lightbox for gallery images
  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
      const lb = document.getElementById('lightbox');
      const lbImg = lb.querySelector('img.lightbox-img');
      lbImg.src = img.src;
      lb.style.display = 'flex';
    });
  });

  // Search filter for menu/cards
  const searchInput = document.getElementById('menuSearch');
  if(searchInput){
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      document.querySelectorAll('.card').forEach(card => {
        const text = (card.dataset.name + ' ' + card.dataset.tags).toLowerCase();
        card.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  // Simple form validation and fake backend response
  document.querySelectorAll('form.needs-validation').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const valid = [...form.querySelectorAll('[required]')].every(inp => inp.value.trim() !== '');
      const status = form.querySelector('.form-status');
      if(!status){
        console.warn('No .form-status element found for form');
      }
      if(!valid){
        if(status) status.textContent = 'Please fill in all required fields.';
        return;
      }
      // simulate backend processing
      if(status) status.textContent = 'Processing...';
      setTimeout(() => {
        // generate a fake reference
        const ref = 'SC' + Math.floor(Math.random()*90000 + 10000);
        if(status) status.innerHTML = 'Success! Reference: <strong>' + ref + '</strong> — we will contact you shortly.';
        form.reset();
        // close modal if present after a short delay
        const modal = form.closest('.modal-backdrop');
        if(modal) setTimeout(()=> modal.style.display='none', 2200);
      }, 900);
    });
  });

  // small dynamic message example
  const promo = document.getElementById('dynamicPromo');
  if(promo){
    setInterval(()=>{
      const messages = ['Free delivery for orders over R300','Try our seasonal lemon drizzle!','Book custom cakes 48h in advance'];
      promo.textContent = messages[Math.floor(Math.random()*messages.length)];
    }, 4000);
  }
});
