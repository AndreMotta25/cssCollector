// eu quero passar um objeto aqui, pq assim ao construir o cssCollector as informaçoes do objeto já vão ser pegas
export default function CssCollector(objeto) {
  if (objeto) {
    this.width = window.getComputedStyle(objeto).width;
    this.height = window.getComputedStyle(objeto).height;
    this.parent = objeto.parentElement;
    this.position = window.getComputedStyle(objeto).position;
    this.display = window.getComputedStyle(objeto).display;

    // é quem vai adicionar o CssCollector a pagina
    this.collectorBody = function () {
      const body = document.querySelector("body");
      body.appendChild(this.corpo());
    };
    // é o corpo do objeto contendo suas informaçoes(monta o corpo)
    this.corpo = function () {
      const corpo = document.createElement("div");
      corpo.id = "cssCollector";
      corpo.innerHTML = `<div id='cabecalho'>
                            <h2>${objeto.tagName + "." + objeto.classList}</h2>
                            <button><img src='fotos/close.png'/></button>
                        </div>
                        <div id="informacoes">
                            <ul>
                                <li id="width">
                                    <img src="fotos/width.png" alt="largura" />
                                    <span>${this.width}</span>
                                </li>
                                <li id="height">
                                    <img src="../fotos/height.png" alt="altura" />
                                    <span>${this.height}</span>
                                </li>
                                <li id="position">
                                    <img src="fotos/position.png" alt="posicao" />
                                    <span>${this.position}</span>
                                </li>
                                <li id="display">
                                    <img src="fotos/display.png" alt="display" />
                                    <span>${this.display}</span>
                                </li>
                                <li id="parent">
                                    <img src="fotos/parent.png" alt="elemento-pai" />
                                    <span>${this.parent}</span>
                                </li>
                            </ul>
                            <div id="inputCss">
                                <input type="text" placeholder="Estilo..." />
                                <button>
                                    <img src="fotos/enter.png" alt="" />
                                </button>
                            </div>
                        </div>`;
      return corpo;
    };

    // vamos executar o collectorBody(vai adicionar no body)
    this.collectorBody();
  } else {
    console.log("passe um objeto");
  }
}
