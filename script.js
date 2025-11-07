
document.querySelectorAll('.group > button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const ul = btn.parentElement.querySelector('ul');
    if(!ul) return;
    ul.style.display = ul.style.display==='none' ? '' : 'none';
  });
});
const here = document.body.getAttribute('data-path');
document.querySelectorAll('.group a').forEach(a=>{ if (a.getAttribute('href')===here) a.classList.add('active'); });
document.addEventListener('click', (e)=>{ const head = e.target.closest('.acc-header'); if(!head) return; head.parentElement.classList.toggle('open'); });
