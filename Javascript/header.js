// Add event listener to change styling of header on scrolling
window.addEventListener('scroll', changeHeader); 

function changeHeader() {

  const header = document.getElementById('header');
  const logoIcon = document.getElementById('logo-icon');
  const logoText = document.getElementById('logo-text');
  const bookCleanCTA = document.getElementById('book-clean-button');
  const hamburgerMenuIcon = document.getElementById('hamburger-menu-icon');
  const scrollPosition = window.scrollY || window.pageYOffset;
  const triggerPoint = 5;
  
  if(scrollPosition >= triggerPoint) {
    header.classList.add('scrolled-header');
    logoIcon.classList.add('scrolled-logo-icon');
    logoText.classList.add('scrolled-logo-text');
    bookCleanCTA.classList.add('scrolled-book-clean-button');
    hamburgerMenuIcon.classList.add('scrolled-hamburger-menu-icon');

  } else {
    header.classList.remove('scrolled-header');
    logoIcon.classList.remove('scrolled-logo-icon');
    logoText.classList.remove('scrolled-logo-text');
    bookCleanCTA.classList.remove('scrolled-book-clean-button');
    hamburgerMenuIcon.classList.remove('scrolled-hamburger-menu-icon');
  }
}

