class Footer extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const footer = document.createElement("div");
    footer.setAttribute("class", "info");

    const copyright = document.createElement("div");
    copyright.setAttribute("class", "copyright");
    copyright.textContent = this.getAttribute("author");

    const lineDivision = document.createElement("div");
    lineDivision.setAttribute("class", "lineDivision");
    lineDivision.textContent = "|";

    const bootcamp = document.createElement("div");
    bootcamp.setAttribute("class", "bootcamp");
    bootcamp.textContent = this.getAttribute("name");

    footer.appendChild(copyright);
    footer.appendChild(lineDivision);
    footer.appendChild(bootcamp);

    return footer;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
      .info {
        display: flex;
        justify-content: center;
        gap: 2rem;
        background-color: #88C3FB;
        color: white;
        height: 2rem;
        padding-top: 200px;
      }
    `;

    return style;
  }
}

customElements.define("footer-component", Footer);