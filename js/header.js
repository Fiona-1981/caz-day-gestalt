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
      </style>

      <header>
      <img src="../images/caz-logo-2.png" alt="Caz's logo">
      <p>Caz Day Gestalt Therapy</p>
      </header>
    `;
  }
}

customElements.define('header-component', Header);