var zucchine = [
    {
        varieta: "golden",
        peso: 4,
        lunghezza: 15,
    },

    {
        varieta: "fiorentine",
        peso: 3,
        lunghezza: 10,
    },

    {
        varieta: "romanesche",
        peso: 2,
        lunghezza: 8,
    },

    {
        varieta: "golden",
        peso: 5,
        lunghezza: 18,
    },

    {
        varieta: "tonde",
        peso: 6,
        lunghezza: 8,
    },

    {
        varieta: "romanesche",
        peso: 4,
        lunghezza: 16,
    },

    {
        varieta: "fiorentine",
        peso: 5,
        lunghezza: 18,
    },

    {
        varieta: "nere",
        peso: 3,
        lunghezza: 9,
    },

    {
        varieta: "tonde",
        peso: 5,
        lunghezza: 8,
    },

    {
        varieta: "nere",
        peso: 2,
        lunghezza: 8,
    }
]


var somma = 0;

for (var i = 0; i < zucchine.length; i++) {
    somma += zucchine[i].peso;

}

console.log("Tutte le zucchine(" + zucchine.length + ")pesano " + somma);


var zucchineGrandi = [];

var zucchinePiccole = [];

for (var i = 0; i < zucchine.length; i++) {
    var zucchina = zucchine[i];

    if (zucchina.lunghezza >= 15) {
        zucchineGrandi.push(zucchina);
        sommaZucchineGrandi += zucchina.peso;
    } else {
        zucchinePiccole.push(zucchina)
        sommaZucchinePiccole += zucchine.peso;
    }

}

console.log("Zucchine grandi: " + zucchineGrandi.length)
console.log("Le zucchine grandi pesano: " + sommaZucchineGrandi);

console.log("Zucchine piccole: " + zucchinePiccole.length)
console.log("Le zucchine piccole pesano: " + sommaZucchinePiccole);

