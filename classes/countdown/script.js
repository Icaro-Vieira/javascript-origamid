import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown("24 December 2023 23:59:59 GMT-0300");
const tempoParaOAnoNovo = new Countdown("31 December 2023 23:59:59 GMT-0300");
console.log(tempoParaONatal.total)
setInterval(() => {
    console.log(tempoParaOAnoNovo.total)
}, 1000)
// console.log(tempoParaONatal.days)
// console.log(tempoParaONatal.hours)
// console.log(tempoParaONatal.minutes)
// console.log(tempoParaONatal.seconds)