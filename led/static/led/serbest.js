document.addEventListener('DOMContentLoaded', (event) => {
    kontrol();
});

const ac_btn = document.getElementById('hep_ac_btn');
const kapa_btn = document.getElementById('hep_kapa_btn');

const hep_kapa = () => {
    var checks = document.getElementsByClassName('ok');
    axios.get('/temizle').then(response => {
        console.log({response})
    })
    for (const check of checks) {
        check.checked = false;
    }
}

const hep_ac = () => {
    var checks1 = document.getElementsByClassName('ok');
    axios.get('/full_on').then(response => {
        console.log({response})
    })
    for (const check1 of checks1) {
        check1.checked = true;
    }
}
ac_btn.addEventListener('click', hep_ac);
kapa_btn.addEventListener('click', hep_kapa);

