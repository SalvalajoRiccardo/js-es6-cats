// fase 1
const gatti = [
    {
        nome: 'minu',
        eta: 0.3,
        colore: '#a432a8',
        sesso: 'femmina'
    },
    {
        nome: 'bise',
        eta: 0.3,
        colore: '#fff000',
        sesso: 'maschio'
    },
    {
        nome: 'principessa',
        eta: 2.0,
        colore: '#a472a9',
        sesso: 'femmina'
    },
    {
        nome: 'romeo',
        eta: 3.3,
        colore: '#f0f0f0',
        sesso: 'maschio'
    }
];

gatti.forEach((elemento) => {
    console.log(elemento.colore, elemento.nome);
});


// fase 2
let maschi = gatti.filter((gat) => {
    if(gat.sesso == 'maschio') {
        return true
    } 
});
let femmine = gatti.filter((gat) => {
    if(gat.sesso == 'femmina') {
        return true
    } 
});

console.log(maschi);
console.log(femmine);



maschi.forEach((gat) => {
    document.getElementById('maschi').innerHTML += `${gat.nome} : ${gat.sesso} <i style="color: blue; height: 60px;;opacity:${gat.eta}%" class="fas fa-ribbon"></i> <br>`
});

femmine.forEach((gat) => {
    document.getElementById('femmine').innerHTML += `${gat.nome} : ${gat.sesso} <i style="color: pink; height: 60px;opacity:${gat.eta};" class="fas fa-ribbon"></i> <br>`
});

