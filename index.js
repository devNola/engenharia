console.log(funcaoArtur);
function calcular(n) {
    if (n < 0) {
        return "Não é permitido";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let trap = 1;
        for (let i = 2; i <= n; i++) {
            trap *= i;
        }
        return trap;
    }
}

let  resultado = calcular(5);
console.log((resultado));