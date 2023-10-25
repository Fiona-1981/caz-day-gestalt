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

        .menu .icon {
          display: none;
        }
        
        @media screen and (max-width: 600px) {
          .menu a {
            display: none;
          }
          .menu a.icon {
            float: right;
            display: block;
          }
        }
        
        @media screen and (max-width: 600px) {
          .menu.responsive {position: relative;}
          .menu.responsive a.icon {
            position: absolute;
            right: 0;
            top: 0;
          }
        
          .menu.responsive a {
            float: none;
            display: block;
            text-align: left;
          }
        }
        
        li.menu-item {
          display: inline-block;
          padding-right: 10px;
        }
      </style>

      <header>
        
        
        <a class="no-hover" href="../index.html">
          <img src="../images/caz-logo-2.png" alt="Caz's logo">
          <h2>CAZ DAY THERAPY</h2>
        </a>
        <ul class="menu" id="myTopnav">
          <li class="menu-item"><a href="../index.html">Home</a></li>
          <li class="menu-item"><a href="gallery.html">Gallery</a></li>
          <li class="menu-item"><a href="testimonials.html">Testimonials</a></li>
          <li class="menu-item"><a href="articles.html">Articles, Books and Blogs</a></li>
          <li class="menu-item"><a href="appointments.html">Appointments, Fees, Location etc.</a></li>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
        </ul>

      </header>
    `;
  }
}

customElements.define('header-component', Header);