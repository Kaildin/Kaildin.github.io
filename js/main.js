// Sticky top bar: solid background once scrolled past hero
  (function(){
    var topbar = document.getElementById('topbar');
    var device = document.querySelector('.device');
    var scroller = device; // scroll happens on window; device itself doesn't scroll separately
    function onScroll(){
      var y = window.scrollY || document.documentElement.scrollTop;
      if(y > 260){
        topbar.classList.add('is-solid');
        topbar.classList.remove('on-image');
      } else {
        topbar.classList.remove('is-solid');
        topbar.classList.add('on-image');
      }
    }
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  })();

  // Thumbnail selection in compare table
  (function(){
    var thumbs = document.querySelectorAll('.thumb');
    var table = document.getElementById('compare-table');
    thumbs.forEach(function(t){
      t.addEventListener('click', function(){
        thumbs.forEach(function(o){o.classList.remove('is-selected');});
        t.classList.add('is-selected');
        var col = parseInt(t.getAttribute('data-col'), 10);
        var headerCell = table.querySelectorAll('thead th')[col];
        if(headerCell){
          headerCell.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
        }
      });
    });
  })();

  // Bottom nav active state on click (visual feedback; scroll handled by anchor)
  (function(){
    var items = document.querySelectorAll('.nav-item');
    items.forEach(function(it){
      it.addEventListener('click', function(){
        items.forEach(function(o){o.classList.remove('is-active');});
        it.classList.add('is-active');
      });
    });
  })();

  // Booking form -> WhatsApp deep link using Claudia's real template
  (function(){
    var btn = document.getElementById('wa-submit');
    btn.addEventListener('click', function(){
      var name = document.getElementById('f-name').value || '—';
      var house = document.getElementById('f-house').value;
      var checkin = document.getElementById('f-in').value || '—';
      var checkout = document.getElementById('f-out').value || '—';
      var adults = document.getElementById('f-adults').value || '2';
      var kids = document.getElementById('f-kids').value || '0';
      var kidsText = (parseInt(kids,10) > 0) ? (' e ' + kids + ' bambini') : '';
      var msg = 'Ciao, mi chiamo ' + name + '. Vorrei informazioni per ' + house +
        '. Date: check-in ' + checkin + ', check-out ' + checkout +
        '. Persone: ' + adults + ' adulti' + kidsText + '. Avete disponibilità?';
      var url = 'https://wa.me/393285985445?text=' + encodeURIComponent(msg);
      window.open(url, '_blank');
    });
  })();
