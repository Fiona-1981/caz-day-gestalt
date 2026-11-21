class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <a class="no-hover" href="/index.html">
          <img src="/images/caz-logo-2.png" alt="">
          <h2>CAZ DAY THERAPY</h2>
        </a>
        <ul class="menu" id="myTopnav">
          <li class="menu-item"><a href="/index.html">Home</a></li>
          <li class="menu-item"><a href="/pages/testimonials.html">Testimonials</a></li>
          <li class="menu-item"><a href="/pages/articles.html">Articles, Books and Blogs</a></li>
          <li class="menu-item"><a href="/pages/appointments.html">Appointments, Fees, Location etc.</a></li>
          <li class="menu-icon">
            <a href="javascript:void(0);" class="icon" aria-label="Menu">
              <i class="fa fa-bars"></i>
            </a>
          </li>
        </ul>
      </header>
    `;

    // Toggle the mobile menu
    const menu = this.querySelector('#myTopnav');
    this.querySelector('.icon').addEventListener('click', () => {
      menu.classList.toggle('responsive');
    });
  }
}

customElements.define('header-component', Header);
