<?php
    include 'database.php';

        $pokeball = $_GET['pokeball'];
        $lugiaHp = $_GET['lugiaHp'];
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
                lugiaHp = :lugiaHp
            WHERE
                id=:id
        ');

        $prepare->bindValue('pokeball', $pokeball);
        $prepare->bindValue('lugiaHp', $lugiaHp);
        $prepare->bindValue('id', $id);

        $execute = $prepare->execute();
?>