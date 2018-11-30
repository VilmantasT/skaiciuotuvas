var skaicius1 = '';
var skaicius2 = '';
var veiksmas = '';
var lentele = '';
var atsakymai = [];
var sortedOrNot = false;



function addNumber(n) {
    if (veiksmas.length == 0){
        skaicius1 += n;
        document.getElementById('screen').innerText = skaicius1;
    } else {
        skaicius2 += n;
        document.getElementById('screen').innerHTML = skaicius2;
    }
}

function procedura(zodis) {
    veiksmas += zodis;
}

function lygybe() {
    var atsakymas = 0;
    if (veiksmas == '+'){
        atsakymas = Number(skaicius1) + Number(skaicius2);
    }else if (veiksmas == '-'){
        atsakymas = Number(skaicius1) - Number(skaicius2);
    }else if (veiksmas == '*'){
        atsakymas = Number(skaicius1) * Number(skaicius2);
    }else if (veiksmas == '/'){
        atsakymas = Number(skaicius1) / Number(skaicius2);
    }
    document.getElementById('screen').innerHTML = atsakymas;

    piestiLentele(veiksmas, skaicius1, skaicius2, atsakymas);
    atsakymai.push([atsakymas, veiksmas, skaicius1, skaicius2]);
    console.log(atsakymai);

    skaicius1 = '';
    skaicius2 = '';
    atsakymas = 0;
    veiksmas = '';
}

function piestiLentele(v, sk1, sk2, ats) {
    if (lentele.length == 0) {
        lentele += '<tr><th>A</th><th>Veiksmas</th><th>B</th><th id="sort" onclick="sorting()">=↑↓</th></tr>';
        lentele += '<tr><td>' + sk1 + '</td><td>' + v + '</td><td>' + sk2 + '</td><td>' + ats + '</td></tr>';
    }else{
        lentele += '<tr><td>' +skaicius1 + '</td><td>' + veiksmas + '</td><td>' + skaicius2 + '</td><td>' + ats + '</td></tr>';
    }
    document.getElementById('atsakymas').innerHTML = lentele;

}
function sorting() {

    var skaiciai = [];

    for (var i in atsakymai){
        skaiciai.push(atsakymai[i][0])
    }

    if (sortedOrNot) {
        skaiciai.sort(function (a, b) {
            return a - b
        });
        sortedOrNot = false
    }else{
        skaiciai.sort(function (a, b) {
            return b - a
        });
        sortedOrNot = true
    }

    naujaLentele(skaiciai);
}

function naujaLentele(array) {

    newlentele = '<tr><th>A</th><th>Veiksmas</th><th>B</th><th id="sort" onclick="sorting()">=↑↓</th></tr>';


    for (var i in array) {
        for (var j in atsakymai){
            if (array[i] == atsakymai[j][0]) {
                newlentele += '<tr><td>' + atsakymai[j][2] + '</td><td>' + atsakymai[j][1] + '</td><td>' + atsakymai[j][3] + '</td><td>' + atsakymai[j][0] + '</td></tr>';
            }
        }
    }
    lentele = newlentele;

    document.getElementById('atsakymas').innerHTML = lentele;
}