document.addEventListener('DOMContentLoaded', () => {
    const ledon = document.getElementById('ledon');
    const ledoff = document.getElementById('ledoff');

    const sendData = () => {
        pinData = document.querySelector('#ledpin').value;
        var csrftoken = Cookies.get('csrftoken');
        console.log(pinData,csrftoken)
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        var data = {
            'X-CSRFTOKEN': csrftoken,
            'pin': pinData,
        }
        console.log({data})
        axios.post('/led_on', {
            'X-CSRFTOKEN': csrftoken,
            'pin': pinData,
        })
        .then(response => {
            console.log({response});
            sonuc = response.data.sonuc
            console.log({sonuc})
            const animation = document.getElementById('test1');
            if (!(animation.classList.contains('sari-hal'))){
                animation.classList.add('sari-hal');
            }
            document.querySelector('#sonuc').innerHTML = response.data.sonuc;
        })
    }
    const sendData1 = () =>{
        var csrftoken1 = Cookies.get('csrftoken');
        pinData1 = document.querySelector('#ledpin').value;
        console.log(pinData1,csrftoken1)
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        axios.post('/led_off', {
            'X-CSRFTOKEN': csrftoken1,
            'pin': pinData1,
        })
        .then(response => {
            console.log({response});
            sonuc = response.data.sonuc
            console.log({sonuc})
            const animation1 = document.getElementById('test1');
            if (animation1.classList.contains('sari-hal')){
                animation1.classList.remove('sari-hal');
            }
            document.querySelector('#sonuc').innerHTML = response.data.sonuc;
        })
    }
    ledon.addEventListener('click', sendData)
    ledoff.addEventListener('click', sendData1)
});