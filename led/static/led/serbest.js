document.addEventListener('DOMContentLoaded'), () => {
    const kontrol = () => {
        // var csrftoken = Cookies.get('csrftoken');
        // axios.defaults.xsrfCookieName = 'csrftoken'
        // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        // axios.post('/hafiza').then(response => {
        //     for (const pin of context) {
        //         document.getElementById('pin'+pin.pin_numarasi).checked = pin_degeri;
        //         console.log({pin})
        //         // en son hatırlanan değerin geri getirilmesi
        //     }
        // })
        for (const pin of context) {
            document.getElementById('pin'+pin.pin_numarasi).checked = pin_degeri;
            console.log({pin})
            // en son hatırlanan değerin geri getirilmesi
        }
    }
    kontrol();
}
const ac_btn = document.getElementById('hep_ac');
const kapa_btn = document.getElementById('hep_kapa');

const hep_ac = () => {
    var checks = document.getElementsByClassName('ok');
    for (const check of checks) {
        check.checked = true;
    }
}

const hep_kapa = () => {
    var checks1 = document.getElementsByClassName('ok');
    for (const check of checks1) {
        check.checked = false;
    }
}

ac_btn.addEventListener('click', hep_ac);
kapa_btn.addEventListener('click', hep_kapa);

