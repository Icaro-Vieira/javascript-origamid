// variavel 
const button = {
  get tamanho() {
    return this._numero || 100;
  },
  set tamanho(numero) {
    this._numero = numero * 250;
  },
};

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

frutas.nova = "Banana";
frutas.nova = "Laranja";

// Classe Button com um construtor com atributos de text e color.
class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  // Permite obter as informações da classe
  get element() {
    const type = this._elementType || "button";
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  // Permite modificar a classe
  set element(type) {
    this._elementType = type;
  }
}

const blueButton = new Button("Comprar", "blue");
