var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado
    },
    perimetro: function(lado) {
        return this.lados * lado
    }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(8))

let pi = Math.PI
console.log(pi * pi)

console.log(Math.random())

var menu = {
    width: 800,
    height: 50,
    backgroundColor: "#84E",
    divideHeight() {
        return this.height / 2
    }
}

menu.backgroundColor = "#000"
menu.color = "brown"

let bg = menu.backgroundColor
console.log(bg)

menu.esconder = function() {
    console.log("Escondi")
}

