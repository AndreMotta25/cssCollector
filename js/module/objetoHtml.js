// eu quero passar um objeto aqui, pq assim ao construir o cssCollector as informaçoes do objeto já vão ser pegas
export default function initObjeto(objeto) {
  if (objeto) {
    this.display = window.getComputedStyle(objeto).display;
    this.parent = objeto.parentElement;
    // this.btnAtivo = true;

    this.collectorBody = function () {
      const body = document.querySelector("body");
      body.appendChild(this.corpo());
      return this.corpo();
    };
    this.corpo = function () {
      const corpo = this.criaElemento(
        "div",
        [this.cabecalho(), this.informacoes()],
        "cssCollector",
        true
      );
      return corpo;
    };

    this.cabecalho = function () {
      const titulo = this.criaElemento("h2", `${objeto.tagName}`, "titulo");
      const btn_close = this.criaElemento(
        "button",
        "<img src='fotos/close.png'>",
        "foto"
      );
      const div = this.criaElemento(
        "div",
        [titulo, btn_close],
        "cabecalho",
        true
      );
      return div;
    };
    this.informacoes = function () {
      const listas = Array();
      // as listas ficam com o pai como false, pq as img's e o parent não estão sendo
      // colocado como outros elementos html(sendo construindo pelo document.creatElemente)
      listas[0] = this.criaElemento(
        "li",
        [
          "<img src='fotos/width.png' alt='largura'/>",
          `<span>${window.getComputedStyle(objeto).width}</span>`,
        ],
        "width",
        false
      );
      listas[1] = this.criaElemento(
        "li",
        [
          "<img src='fotos/height.png' alt='largura'/>",
          `<span>${window.getComputedStyle(objeto).height}</span>`,
        ],
        "height",
        false
      );
      listas[2] = this.criaElemento(
        "li",
        [
          "<img src='fotos/position.png' alt='position'/>",
          `<span>${window.getComputedStyle(objeto).position}</span>`,
        ],
        "position",
        false
      );
      listas[4] = this.criaElemento(
        "li",
        [
          "<img src='fotos/display.png' alt='display'/>",
          `<span>${window.getComputedStyle(objeto).display}</span>`,
        ],
        "display",
        false
      );
      listas[5] = this.criaElemento(
        "li",
        [
          "<img src='fotos/parent.png' alt='largura'/>",
          `<span>${this.parent.tagName}</span>`,
        ],
        "parent",
        false
      );
      this.desativaDisplay(listas[4]);
      this.selecionaPai(listas[5]);
      const ul = this.criaElemento("ul", listas, null, true);

      const input_Css = this.inputCss();
      const div = this.criaElemento(
        "div",
        [ul, input_Css],
        "informacoes",
        true
      );
      return div;
    };
    this.inputCss = function () {
      const input = this.criaElemento("input", "", "input_Css", null);
      const btn_enter = this.criaElemento(
        "button",
        "<img src='fotos/enter.png'>"
      );
      const div = this.criaElemento(
        "div",
        [input, btn_enter],
        "inputCss",
        true
      );
      this.setStyle(input, btn_enter);
      return div;
    };
    this.criaElemento = function (tag, conteudo, id = null, parent = null) {
      let elemento = document.createElement(tag);
      elemento.id = id;
      if (parent) {
        conteudo.forEach((elem) => {
          elemento.appendChild(elem);
        });
      } else {
        elemento.innerHTML = conteudo;
      }
      return elemento;
    };
    // coloca uma bordar em torno do elemento pai
    this.selecionaPai = function (item) {
      item.addEventListener("click", () => {
        if (this.parent.style.border == "") {
          this.parent.style.border = "2px solid black";
          console.log(this);
        } else {
          this.parent.style.border = "";
        }
      });
    };
    // desativa e ativa o que foi setado no display
    this.desativaDisplay = function (item) {
      item.addEventListener("click", () => {
        if (!this.btnAtivo) {
          objeto.style.display = this.display;
          item.style.border = "";
          this.btnAtivo = true;
          console.log("desligado");
        } else {
          item.style.border = "2px dotted white";
          objeto.style.display = "inherit";
          this.btnAtivo = false;
          console.log("ativo");
          console.log(objeto.style.display);
        }

        // console.log(window.getComputedStyle(objeto).display);
      });
    };
    this.setStyle = function (item, btn) {
      btn.addEventListener("click", () => {
        let property = item.value.split(":");
        objeto.style[property[0]] = property[1];
        item.value = "";
        // item.value = "";
      });
    };
  } else {
    console.log("passe um objeto");
  }
}
