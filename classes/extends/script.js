class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log("Vrum Vrum");
  }
}


class Moto extends Veiculo {
  constructor(capacete, rodas, combustivel) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  acelerar() {
    super.acelerar();
    console.log("Acelerou demais que até fez ran dan dan dan pa")
  }
  empinar() {
    console.log("A moto empinou com " + this.rodas + " rodas");
  }
}

const honda = new Moto(true, 2, "5 litros");
const civic = new Veiculo(4);