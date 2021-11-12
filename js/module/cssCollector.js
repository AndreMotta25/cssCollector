import CssCollector from "./objetoHtml.js";
// import initObjeto from "./objetoHtml.js";
export default function initCssCollector() {
  // vamos pegar todos os filhos de body
  const filhosBody = document.querySelectorAll("body > *");
  var ativo = false;

  function move(e) {
    constroiCssCollector.cssCollector.style.left = e.clientX - 10 + "px";
    constroiCssCollector.cssCollector.style.top = e.clientY - 10 + "px";
  }

  function moveCollector() {
    if (ativo) {
      constroiCssCollector.cssCollector.addEventListener("dblclick", () => {
        constroiCssCollector.cssCollector.classList.toggle("ativo");
        if (constroiCssCollector.cssCollector.classList.contains("ativo")) {
          window.addEventListener("mousemove", move);
        } else {
          window.removeEventListener("mousemove", move);
        }
      });
    }
  }
  // fecha o cssCollector
  function fechar() {
    const btn_close = document.querySelector("#cssCollector #fechar");
    btn_close.addEventListener("click", () => {
      constroiCssCollector.cssCollector.remove();
      ativo = false;
    });
  }
  // faço de um objeto um evento para poder usar o cssCollector em outros lugares
  // como em fechar()
  const constroiCssCollector = {
    handleEvent(e) {
      this.cssCollector = new CssCollector(e.target).collectorBody();
      this.cssCollector.classList.add("ligado");
      ativo = true;
      fechar();
      moveCollector();
      // console.log(this.cssCollector);
    },
  };
  filhosBody.forEach((elem) => {
    elem.addEventListener("dblclick", constroiCssCollector);
  });
}
