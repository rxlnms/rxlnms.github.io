<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Встречайся со мной</title>
    <style>
        body {
    font-family: Arial, sans-serif;
    background: #f5f5f5;
    text-align: center;
    padding: 50px;
}

header {
    background: #ff4081;
    color: white;
    padding: 20px;
    border-radius: 10px;
}

main {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
}

section {
    margin-bottom: 20px;
}

button {
    background: #ff4081;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    position: relative;
}

button:hover {
    background: #e91e63;
}

footer {
    margin-top: 20px;
}
    </style>
</head>
<body>
    <header>
        <h1>Привет, Арна</h1>
    </header>
    <main>
        <section>
            <h2>У меня есть один вопрос</h2>
            <p>Ты знаешь, я уже долгое время пытаюсь завоевать твое сердце.</p>
            <p>Я подумала, что этот жест поможет хоть капельку сдвинуться с мертвой точки.</p>
            <p>Итак, мой вопрос...</p>
            <button id="questionButton" onclick="showQuestion()">Нажми, чтобы узнать :)</button>
        </section>
        <section id="questionSection" style="display: none;">
            <h2>Пойдешь гулять со мной?</h2>
            <button onclick="showResponse('yes')">Да</button>
            <button id="noButton" onclick="moveNoButton()">Нет</button>
        </section>
        <section id="responseSection" style="display: none;">
            <h2 id="responseMessage"></h2>
            <img id="loveImage" src="heart.gif" alt="Love">
        </section>
    </main>
    <footer>
        <p>С любовью, Тока</p>
    </footer>

    <script>
        function showQuestion() {
            document.getElementById('questionSection').style.display = 'block';
            document.getElementById('questionButton').style.display = 'none';
        }

        function showResponse(answer) {
            const responseSection = document.getElementById('responseSection');
            const responseMessage = document.getElementById('responseMessage');
            const loveImage = document.getElementById('loveImage');

            if (answer === 'yes') {
                responseMessage.textContent = 'Я рада, что ты согласилась';
                loveImage.style.display = 'block';
            } else {
                responseMessage.textContent = 'Очень жаль, но я понимаю.';
                loveImage.style.display = 'none';
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
    </script>
</body>
</html>
