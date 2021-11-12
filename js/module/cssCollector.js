import initObjeto from "./objetoHtml.js";
export default function initCssCollector() {
  // vamos pegar todos os filhos de body
  const filhosBody = document.querySelectorAll("body > *");
  var container;
  var ativo = false;

  function move(e) {
    container.style.left = e.clientX - 10 + "px";
    container.style.top = e.clientY - 10 + "px";
  }

  function moveCollector() {
    if (ativo) {
      container.addEventListener("dblclick", () => {
        container.classList.toggle("ativo");
        if (container.classList.contains("ativo")) {
          window.addEventListener("mousemove", move);
        } else {
          window.removeEventListener("mousemove", move);
        }
      });
    }
  }
  // fecha o cssCollector
  function fechar() {
    const btn_close = document.querySelector("#cssCollector #foto");
    btn_close.addEventListener("click", () => {
      container.remove();
      ativo = false;
    });
  }
  const constroiCssCollector = {
    cssCollector: "",
    handleEvent(e) {
      this.cssCollector = new initObjeto(e.target);
      // constroi o corpo de coletor
      this.cssCollector.collectorBody();
      fechar();
      container = document.querySelector("#cssCollector");
      container.classList.add("ligado");
      ativo = true;
      moveCollector();
    },
  };
  filhosBody.forEach((elem) => {
    elem.addEventListener("dblclick", constroiCssCollector);
  });
}
