
const button = document.querySelector('button.genarate-program');
const inputtedDistance = document.querySelector('input#distance');
const inputtedStroke = document.querySelector('input#stroke');
const pTag = document.querySelector('p.program');
const loadingP = document.querySelector('p.hidden');

button.addEventListener("click", () => {
    loadingP.classList.remove('hidden')
    getGeneratedText(`Genarate a swimming trainning program. With a distance of: ${inputtedDistance.value} meters. Focus on: ${inputtedStroke.value} stroke.`)
        .then(generatedText => {
            pTag.innerText = generatedText
            loadingP.classList.add('hidden');
        });
});

