class Footer extends HTMLElement {
  constructor() {
    super();
  }

// Remember the CSS in here overrides the CSS in the Header file!

  connectedCallback() {
    this.innerHTML = `
      <style>
        footer {
          text-align: center;
        }
      </style>

      <footer>
        Footer content for every page goes here.
        <p>Website hand made by Fiona Wiggins</p>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);