<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div class="pseudo-container">
        <form action="" method="post">
            <div class="field">
                <label for="pseudo">pseudo</label>
                <br>
                <input type="text" name="pseudo" id="pseudo">
            </div>
        </form>
    </div>
</body>
</html>

<?php
    include 'database.php';

    // Get data
    $pseudo = $_POST['pseudo'];

    // Check success
    $prepare = $pdo->prepare('
        INSERT INTO
            users-info (pseudo)
        VALUES
            (:pseudo)
    ');

    $prepare->bindValue('pseudo', $pseudo);

    $execute = $prepare->execute();

 
?>