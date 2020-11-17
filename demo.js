var array = [];
var randomPick = (numero, min, max) => {
    var rango = max - min + 1;
    for (var i = 0; i < numero; i++) {
        var valor = Math.floor(Math.random() * rango) + min
        if (array.indexOf(valor) === -1) {
            array.push(valor)
        }
        else {
            i--;
        }

    }

    console.log("GENERADOR ALEATORIO: "+ array)

}



randomPick(10, 1, 100)