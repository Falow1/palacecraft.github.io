document.addEventListener('DOMContentLoaded', function() {
  const mainMenuLinks = document.querySelectorAll('.sidebar-nav > ul > li > a');
  mainMenuLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      const flyoutMenu = this.nextElementSibling;
      if (flyoutMenu && flyoutMenu.classList.contains('nav-flyout')) {
        const isOpen = flyoutMenu.style.transform === 'translateX(0%)';
        closeAllFlyouts();
        if (!isOpen) {
          flyoutMenu.style.transform = 'translateX(0%)';
        }
      }
    });
  });

  function closeAllFlyouts() {
    const flyouts = document.querySelectorAll('.nav-flyout');
    flyouts.forEach(function(flyout) {
      flyout.style.transform = 'translateX(100%)';
    });
  });

  const flyoutLinks = document.querySelectorAll('.nav-flyout a');
  flyoutLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      closeAllFlyouts();
    });
  });
});
