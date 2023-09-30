class Linkedin extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const linkedin = document.createElement("div");
    linkedin.setAttribute("class", "linkedin-component");
    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");
    linkedin.appendChild(linkTitle);

    return linkedin; // Corrigido o retorno aqui
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
      .linkedin-component a {
        color: black;
        text-decoration: none;
      }

      .linkedin-component a:hover {
        text-transform: uppercase;
        border-top: 1px solid skyblue;
        border-bottom: 1px solid skyblue;
      }
    `;

    return style;
  }
}

customElements.define("linkedin-component", Linkedin);
