document.addEventListener('DOMContentLoaded', function() {
    var navItems = document.querySelectorAll('.sidebar-nav > ul > li');
  
    navItems.forEach(function(item) {
      item.addEventListener('click', function(e) {
        var isOpen = this.classList.contains('open');

        navItems.forEach(function(i) {
          i.classList.remove('open');
        });

        if (!isOpen) {
          this.classList.add('open');
        }
      });
  
      item.addEventListener('touchend', function(e) {
        e.preventDefault();
        var isOpen = this.classList.contains('open');
  
        navItems.forEach(function(i) {
          i.classList.remove('open');
        });
  
        if (!isOpen) {
          this.classList.add('open');
        }
      });
    });
  });
document.addEventListener('DOMContentLoaded', function() {
  var navItems = document.querySelectorAll('.sidebar-nav > ul > li');

  navItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      var isOpen = this.classList.contains('open');

      navItems.forEach(function(i) {
        i.classList.remove('open');
      });

      if (!isOpen) {
        this.classList.add('open');
      }
    });

    item.addEventListener('touchend', function(e) {
      e.preventDefault();
      var isOpen = this.classList.contains('open');

      navItems.forEach(function(i) {
        i.classList.remove('open');
      });

      if (!isOpen) {
        this.classList.add('open');
      }
    });
  });
});
  