var skaicius1 = '';
var skaicius2 = '';
var veiksmas = '';



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
    console.log(veiksmas);
}

function lygybe() {
    var atsakymas = 0;
    if (veiksmas == 'sudeti'){
        atsakymas = Number(skaicius1) + Number(skaicius2);
    }else if (veiksmas == 'atimti'){
        atsakymas = Number(skaicius1) - Number(skaicius2);
    }else if (veiksmas == 'dauginti'){
        atsakymas = Number(skaicius1) * Number(skaicius2);
    }else if (veiksmas == 'dalinti'){
        atsakymas = Number(skaicius1) / Number(skaicius2);
    }
    document.getElementById('screen').innerHTML = atsakymas;
    document.getElementById('atsakymas').innerHTML = atsakymas;
}