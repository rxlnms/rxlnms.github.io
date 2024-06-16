document.getElementById('questionButton').addEventListener('click', function() {
    document.getElementById('questionSection').style.display = 'block';
    document.getElementById('questionButton').style.display = 'none';
});

function showResponse(answer) {
    const responseSection = document.getElementById('responseSection');
    const responseMessage = document.getElementById('responseMessage');
    const loveImage = document.getElementById('loveImage');

    if (answer === 'yes') {
        responseMessage.textContent = 'Я рада, что ты согласилась';
        
        
    } else {
        responseMessage.textContent = 'Мне жаль, но я уважаю твоё решение.';
    }

    responseSection.style.display = 'block';
    document.getElementById('questionSection').style.display = 'none';
}

function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
