class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <a class="no-hover" href="/index.html">
          <img src="/images/caz-logo-2.png" alt="">
          <h2>CAZ DAY THERAPY</h2>
        </a>
        <nav>
          <ul class="menu" id="myTopnav">
            <li class="menu-item"><a href="/index.html">Home</a></li>
            <li class="menu-item"><a href="/pages/testimonials.html">Testimonials</a></li>
            <li class="menu-item"><a href="/pages/articles.html">Articles, Books and Blogs</a></li>
            <li class="menu-item"><a href="/pages/appointments.html">Appointments, Fees, Location etc.</a></li>
            <li class="menu-icon">
              <button type="button" class="icon" aria-label="Menu" aria-expanded="false" aria-controls="myTopnav">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    `;

    // Toggle the mobile menu
    const menu = this.querySelector('#myTopnav');
    const button = this.querySelector('.icon');
    button.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('responsive');
      button.setAttribute('aria-expanded', isOpen);
    });
  }
}

customElements.define('header-component', Header);
