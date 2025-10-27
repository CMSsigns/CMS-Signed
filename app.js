// app.js - CMS Signed (v5)
(function(){
  const ORDER_FORM = 'https://forms.gle/BqcvL2qQ58udLU2o6';
  const products = (typeof PRODUCTS !== 'undefined') ? PRODUCTS : [];

  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');

  function render(){
    grid.innerHTML = '';
    if(!products || products.length === 0){ emptyState.hidden = false; return; } else emptyState.hidden = true;

    products.forEach((p, idx) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      if(p.sold) card.classList.add('sold');

      const imgWrap = document.createElement('div');
      imgWrap.className = 'img-wrap';
      const img = document.createElement('img');
      img.className = 'product-img';
      img.src = p.img || 'assets/logo.png';
      img.alt = p.name;
      imgWrap.appendChild(img);

      const sold = document.createElement('div');
      sold.className = 'sold-overlay';
      sold.textContent = 'SOLD';
      imgWrap.appendChild(sold);

      const body = document.createElement('div');
      body.className = 'card-body';
      const name = document.createElement('h3');
      name.className = 'product-name';
      name.textContent = p.name;
      const desc = document.createElement('p');
      desc.className = 'product-desc';
      desc.textContent = p.desc;
      const footer = document.createElement('div');
      footer.className = 'card-footer';
      const left = document.createElement('div');
      const price = document.createElement('div');
      price.className = 'product-price';
      price.textContent = '$' + Number(p.price).toFixed(2);
      const qty = document.createElement('div');
      qty.className = 'product-qty';
      qty.textContent = p.qty > 0 ? (p.qty + ' left') : 'Out of stock';
      left.appendChild(price);
      left.appendChild(qty);

      const right = document.createElement('div');
      const buy = document.createElement('button');
      buy.className = 'btn-buy';
      buy.textContent = 'Buy';
      buy.addEventListener('click', ()=>{
        const url = ORDER_FORM + '?product=' + encodeURIComponent(p.name);
        window.open(url, '_blank');
      });
      right.appendChild(buy);

      footer.appendChild(left);
      footer.appendChild(right);

      body.appendChild(name);
      body.appendChild(desc);
      body.appendChild(footer);

      card.appendChild(imgWrap);
      card.appendChild(body);

      card.style.opacity = 0;
      grid.appendChild(card);
      setTimeout(()=>{ card.style.transition = 'opacity .45s ease, transform .45s ease'; card.style.opacity = 1; card.style.transform = 'translateY(0)'; }, idx * 60);
    });
  }

  render();
})();