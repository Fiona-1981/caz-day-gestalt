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
        Footer content for every page goes here. <br>
        I have asked UKCP for permission to use their logo 
        so it can link to your details once you are accredited. <br>
        Obvs only if you want this! I'm just throwing ideas
        out there.
        <p>Website hand made by Fiona Wiggins</p>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);