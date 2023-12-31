
const button = document.querySelector('button.genarate-program');
const inputtedDistance = document.querySelector('input#distance');
const inputtedStroke = document.querySelector('input#stroke');
const pTag = document.querySelector('p.program');
const loadingP = document.querySelector('p.hidden');

function generateProgram() {
    loadingP.classList.remove('hidden')
    getGeneratedText(`Genarate a swimming trainning program. With a distance of: ${inputtedDistance.value} meters. Focus on: ${inputtedStroke.value} stroke. All output should be in meters`)
        .then(generatedText => {
            pTag.innerText = generatedText
            loadingP.classList.add('hidden');
        });
}

button.addEventListener("click", generateProgram);

[inputtedDistance, inputtedStroke].forEach(input => {
    input.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {  // 13 is the key code for Enter
            generateProgram();
        }
    });
});

