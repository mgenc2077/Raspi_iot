document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#ledon').onclick = () => {
        // Initialize new request
        const request = new XMLHttpRequest();
        const pin = document.querySelector('#ledpin').value;
        request.open('POST', '/led_on');
        // Callback function for when request completes
        request.onload = () => {
            if (data.success) {
                const contents = `${data.sonuc}`
                document.querySelector('#sonuc').innerHTML = contents;
            }
            else {
                document.querySelector('#sonuc').innerHTML = 'Galiba bir hata oluştu.';
            }
        }
        // Add data to send with request
        const data = new FormData();
        data.append('pin', pin);
        var csrftoken = Cookies.get('csrftoken');
        console.log(pinData,csrftoken)
        data.append('csrfmiddlewaretoken',csrftoken);
        // Send request
        request.send(data);
        return false;
    };
    document.querySelector('#ledoff').onclick = () => {
        // Initialize new request
        const request = new XMLHttpRequest();
        const pin = document.querySelector('#ledpin').value;
        request.open('POST', '/led_off');
        // Callback function for when request completes
        request.onload = () => {
            if (data.success) {
                const contents = `${data.sonuc}`
                document.querySelector('#sonuc').innerHTML = contents;
            }
            else {
                document.querySelector('#sonuc').innerHTML = 'Galiba bir hata oluştu.';
            }
        }
        // Add data to send with request
        const data = new FormData();
        data.append('pin', pin);
        var csrftoken = Cookies.get('csrftoken');
        console.log(pinData,csrftoken)
        data.append('csrfmiddlewaretoken',csrftoken);
        request.send(data);
        return false;
    };
});