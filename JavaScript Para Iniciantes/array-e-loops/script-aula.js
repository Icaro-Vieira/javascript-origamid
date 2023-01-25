// var removerUltimo = videogames.pop()
// var inserirUltimo = videogames.push("PSP")

for (let i = 0; i <= 4; i++) {
    console.log(i)
}

// Um loop posui 3 partes: inicio, condição e incremento
console.log("---------------------------")
// Também é possivel fazer loop utilizando o While, porém o loop com for é o mais comum
var i = 0
while (i <= 4) {
    console.log(i)
    i++
}

var videoGames = ["PS1", "PS2", "PS3", "PS4", "PS5"]

for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i])
    if (videoGames[i] === "PS4") {
        break
    }
}

var frutas = ["Maçã", "Banana", "Pitaya", "Melão", "Uva", "Lixia", "Pêssego", "Goiaba", "Mamão", "Carambola", "Jabuticaba", "Gauraná"]

frutas.forEach(function(fruta, index, array) {
    console.log(fruta, index, array)
})

