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

const tiktest = () => {
    var butun_tics = Array.from(document.getElementsByClassName('ok')).filter(x=>x.checked).map(x=>x.value);
    var butun_not_tics = Array.from(document.getElementsByClassName('ok')).filter(x=>!(x.checked)).map(x=>x.value);

    for (const jk2 of butun_not_tics) {
        var csrftoken = Cookies.get('csrftoken');
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        //console.log(jk2)
        axios.post('/led_off', {
            pin: jk2,
        })
        .then(response =>{
            //console.log({response});
            //sonuc = response.data.sonuc
            //console.log({sonuc})
        })
    }

    for (const jk1 of butun_tics) {
        var csrftoken = Cookies.get('csrftoken');
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        //console.log(jk1)
        axios.post('/led_on', {
            pin: jk1,
        })
        .then(response =>{
            //console.log({response});
            //sonuc = response.data.sonuc
            //console.log({sonuc})
        })
    }
}
var klcv = document.getElementsByClassName('ok');
console.log(klcv[0])
for (let k=0;k<28;k++) {
   var ac_btn1 = document.getElementById(klcv[k].id);
   ac_btn1.addEventListener('click', tiktest);
}





