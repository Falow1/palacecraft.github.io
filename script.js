document.addEventListener('DOMContentLoaded', function() {
    var navItems = document.querySelectorAll('.sidebar-nav > ul > li');
  
    navItems.forEach(function(item) {
      var touchTimeout;
      
      function handleClick(e) {
        var isOpen = this.classList.contains('open');
        navItems.forEach(function(i) {
          i.classList.remove('open');
        });
        if (!isOpen) {
          this.classList.add('open');
        }
      }
  
      item.addEventListener('click', handleClick);
      
      item.addEventListener('touchstart', function(e) {
        touchTimeout = setTimeout(function() {
          handleClick.call(item, e);
        }, 500); // Tempo para toque longo
      });
  
      item.addEventListener('touchend', function(e) {
        if (touchTimeout) {
          clearTimeout(touchTimeout);
          handleClick.call(item, e);
        }
      });
  
      item.addEventListener('touchmove', function(e) {
        if (touchTimeout) {
          clearTimeout(touchTimeout);
        }
      });
    });
  });
  