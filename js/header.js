class Header extends HTMLElement {
  constructor() {
    super();
  }

  // Remember the CSS in here is overridden by the CSS in the Footer file!

  connectedCallback() {
    this.innerHTML = `
      <style>
        header {
          text-align: center;
        }

        .no-hover:hover {
          opacity: 1;
        }

        ul.menu {
          list-style: none;
          text-align: left;
        }
        
        li.menu-item {
          display: inline-block;
          padding-right: 10px;
        }
      </style>

      <header>
      <a class="no-hover" href="index.html">
      <img src="../images/caz-logo-2.png" alt="Caz's logo">
      <p>Caz Day Gestalt Therapy</p>
      </a>
      <ul class="menu">
        <li class="menu-item"><a href="index.html">Home</a></li>
        <li class="menu-item"><a href="gallery.html">Gallery</a></li>
        <li class="menu-item"><a href="testimonials.html">Testimonials</a></li>
        <li class="menu-item"><a href="articles.html">Articles, Books and Blogs</a></li>
      </ul>
      </header>
    `;
  }
}

customElements.define('header-component', Header);