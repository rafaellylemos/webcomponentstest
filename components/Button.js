class Button extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const button = document.createElement("div");
    button.setAttribute("class", "botao");
    const buttonContent = document.createElement("button");
    buttonContent.textContent = this.getAttribute("conteudo") || "Test";
    button.appendChild(buttonContent);

    return button;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
      .botao {
        display: flex;
        justify-content: center;
        margin: 5rem 0;
      }

      .botao button {
        background-color: skyblue;
        border: none;
        color: white;
        padding: 5px 15px;
        border-radius: 8px;
        width: 140px;
        height: 40px;
      }

      .botao button:hover {
        transform: scale(0.8);
        text-transform: uppercase;
        cursor: pointer;
      }
    `; 

    return style;
  }
}

customElements.define("button-component", Button);