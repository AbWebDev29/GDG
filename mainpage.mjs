document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');

  // Adjust header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Add any other functionality you need here
  // For example, you could add event listeners for the navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(`Clicked on ${link.textContent}`);
      // Add your navigation logic here
    });
  });
});
