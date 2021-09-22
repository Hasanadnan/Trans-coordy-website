window.onload = () => {
  // ------------- Responsive Menu Toggler
  const menuToggle = document.querySelector('.toggle-button')
  const mainMenu = document.querySelector('.nav-item')

  menuToggle.addEventListener('click', function () {
    mainMenu.classList.toggle('responsive-menu')
    this.classList.toggle('start')
  })
}
