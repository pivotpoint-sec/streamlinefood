/* Streamline Food & Beverages Ltd. — site scripts */
(function () {
  var WHATSAPP = '2349030578141';

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Product filter
  var filterBtns = document.querySelectorAll('.filters button');
  var products = document.querySelectorAll('.product[data-cat]');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cat = btn.getAttribute('data-filter');
      filterBtns.forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
      products.forEach(function (p) {
        p.hidden = !(cat === 'all' || p.getAttribute('data-cat') === cat);
      });
    });
  });

  // "Ask for a price" links pre-select the product in the quote form
  document.querySelectorAll('[data-product]').forEach(function (link) {
    link.addEventListener('click', function () {
      try { sessionStorage.setItem('sf-product', link.getAttribute('data-product')); } catch (e) {}
    });
  });

  // Quote form → opens WhatsApp with the request pre-written
  var form = document.getElementById('quote-form');
  if (form) {
    var select = form.querySelector('#q-product');
    var preset = null;
    try { preset = sessionStorage.getItem('sf-product'); } catch (e) {}
    var fromUrl = new URLSearchParams(window.location.search).get('product');
    preset = fromUrl || preset;
    if (preset && select) {
      Array.prototype.forEach.call(select.options, function (o) { if (o.value === preset) select.value = preset; });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      ['q-name', 'q-phone', 'q-dest'].forEach(function (id) {
        var input = document.getElementById(id);
        var err = document.getElementById(id + '-err');
        if (!input.value.trim()) {
          ok = false;
          input.setAttribute('aria-invalid', 'true');
          if (err) err.textContent = 'Enter this so we can prepare your quote.';
        } else {
          input.removeAttribute('aria-invalid');
          if (err) err.textContent = '';
        }
      });
      if (!ok) { form.querySelector('[aria-invalid="true"]').focus(); return; }

      var v = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
      var lines = [
        'Hello Streamline Food & Beverages, I would like a quote.',
        '',
        'Name: ' + v('q-name'),
        v('q-company') ? 'Company: ' + v('q-company') : null,
        'Phone: ' + v('q-phone'),
        v('q-email') ? 'Email: ' + v('q-email') : null,
        'Product: ' + v('q-product'),
        'Deliver to: ' + v('q-dest'),
        v('q-msg') ? 'Details: ' + v('q-msg') : null
      ].filter(function (l) { return l !== null; });

      var url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank', 'noopener');
      var status = document.getElementById('form-status');
      if (status) status.textContent = 'WhatsApp opened with your request. Press send in WhatsApp to deliver it to us.';
    });
  }
})();
