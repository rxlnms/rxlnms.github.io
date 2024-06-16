# rxlnms.github.io
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Встречайся со мной</title>
    <link rel="stylesheet" href="styles.css">
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
            <button id="questionButton">Нажми, чтобы узнать :)</button>
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

    <script src="script.js"></script>
</body>
</html>
