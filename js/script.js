// fase 1
const gatti = [
    {
        nome: 'minu',
        eta: 1.3,
        colore: '#f0f0f0',
        sesso: 'femmina'
    },
    {
        nome: 'bise',
        eta: 1.3,
        colore: '#e97801',
        sesso: 'maschio'
    },
    {
        nome: 'matis',
        eta: 1.3,
        colore: '#000000',
        sesso: 'maschio'
    },
    {
        nome: 'principessa',
        eta: 3.0,
        colore: '#f0f0f0',
        sesso: 'femmina'
    },
    {
        nome: 'gigetta',
        eta: 7.3,
        colore: '#fff000',
        sesso: 'femmina'
    },
    {
        nome: 'romeo',
        eta: 5.3,
        colore: '#e97801',
        sesso: 'maschio'
    }
];

gatti.forEach((elemento) => {
    document.getElementById("gatti").innerHTML += `<i style="color:${elemento.colore}" class="fas fa-cat"></i>  ${elemento.nome}`
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
    let opacita = (gat.eta / 7.3)
    document.getElementById('maschi').innerHTML += `<br>${gat.nome} : <i style="color:${gat.colore}" class="fas fa-cat"></i>  <i style="color: blue; height: 60px; opacity:${opacita}" class="fas fa-ribbon"></i> `
});

femmine.forEach((gat) => {
    let opacita = (gat.eta / 7.3)
    document.getElementById('femmine').innerHTML += `<br>${gat.nome} : <i style="color:${gat.colore}" class="fas fa-cat"></i>  <i style="color: pink; height: 60px; opacity:${opacita}" class="fas fa-ribbon"></i> `
});

const ladyFirst = [...femmine, ...maschi];
console.log(ladyFirst);

// document.getElementById('ladyfirst').innerHTML = ladyFirst

ladyFirst.forEach((gat) => {
    let opacita = (gat.eta / 7.3)
    document.getElementById('ladyfirst').innerHTML += `<br>${gat.nome} : <i style="color:${gat.colore}" class="fas fa-cat"></i>  <i style="color: pink; height: 60px; opacity:${opacita}" class="fas fa-ribbon"></i> `
});

