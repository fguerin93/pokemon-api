<?php
    include 'database.php';

        $pokeball = $_GET['pokeball'];
        $lugiaHp = $_GET['lugiaHp'];
        $score = $_GET['score'];
        $query = $pdo->query('SELECT max(id) FROM users');
        $id = $query->fetch();
        $maxId = 'max(id)';
        $id = $id->$maxId;

        echo '<pre>';
        print_r($id);
        echo '</pre>';

        
        // Check success
        $prepare = $pdo->prepare('
            UPDATE
                users
            SET
                pokeball = :pokeball,
                lugiaHp = :lugiaHp,
                score = :score
            WHERE
                id=:id
        ');

        $prepare->bindValue('pokeball', $pokeball);
        $prepare->bindValue('lugiaHp', $lugiaHp);
        $prepare->bindValue('score', $score);
        $prepare->bindValue('id', $id);

        $execute = $prepare->execute();
?>