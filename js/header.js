class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        CSS goes here
      </style>

      <header>
        HTML goes here
      </header>
    `;
  }
}

customElements.define('header-component', Header);