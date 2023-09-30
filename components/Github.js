class Github extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const github = document.createElement("div");
    github.setAttribute("class", "github-component");
    const linkTitle = document.createElement("a");
      linkTitle.textContent = this.getAttribute("title");
      linkTitle.href = this.getAttribute("link-url");
    github.appendChild(linkTitle);

    return github; // Corrigido o retorno aqui
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
      .github-component a {
        color: black;
        text-decoration: none;
      }

      .github-component a:hover {
        text-transform: uppercase;
        border-top: 1px solid skyblue;
        border-bottom: 1px solid skyblue;
      }
    `; // Corrigido a sintaxe aqui

    return style; // Corrigido o retorno aqui
  }
}

customElements.define("github-component", Github); // Alterei o nome do componente para evitar conflito com o nome da classe