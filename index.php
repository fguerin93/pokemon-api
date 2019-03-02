<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href ="css/style.css?b=<?= rand(0,100) ?>">
    <link rel="stylesheet" href ="css/reset.css?b=<?= rand(0,100) ?>">
    <title>POKEMON</title>
    <link rel="icon" href="images/favicon.ico" type="image/ico">
</head>
<body>
    <div class="launching-container">
        <img src="images/pokeball-launching.png">
        <div class="circle"></div>
        <p class="cta">Cliquez sur la ball pour découvrir l'histoire de lugia</p>
    </div>
    <div class="intro-container">
        <p class="subtitle">Ne perturbez pas l'harmonie qui règne entre </br> le feu, la glace et la foudre</p>
        <audio autoplay="autoplay" src="audio/lugiamytho.mp3"></audio>
        <button class="skip-button">Passer l'introduction</button>
        <div class="load-bar"></div>
    </div>
    <div class="pseudo-container">
        <form action="" method="post">
            <div class="field">
                <label for="pseudo">Entrez votre nom d'élu</label>
                <input type="text" name="pseudo" id="pseudo">
            </div>
        </form>
    </div>
    <script src="js/script.js"></script>
</body>
</html>

<?php
    include 'database.php';

    // Get data
    $pseudo = $_POST['pseudo'];

    // Check success
    $prepare = $pdo->prepare('
        INSERT INTO
            users (pseudo)
        VALUES
            (:pseudo)
    ');

    $prepare->bindValue('pseudo', $pseudo);

    $execute = $prepare->execute();

 
?>