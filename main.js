const form = document.getElementById('decoderForm');
const displayCode = document.getElementById('displayCode')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const code = document.getElementById('code').value;
    const capitalLetters = getCapitalLetters(code);

    displayCode.innerHTML = capitalLetters;
})

function getCapitalLetters(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const currentChar = text.charAt(i);
        if (currentChar >= 'A' && currentChar <= 'Z') {
            result += currentChar;
        }
    }
    return result;
}

//sample phrases to try: Here Is a Mystery On a Message, when are yoU going to Stop Using shoelaCes in Karate class