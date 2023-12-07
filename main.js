const form = document.getElementById('decoderForm');
const displayCode = document.getElementById('displayCode')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const code = document.getElementById('code').value;


    displayCode.innerHTML = code;
})