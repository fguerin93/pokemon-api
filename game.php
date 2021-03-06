<?php
    include 'database.php';

    /**
     * DATABASE PHP
     */

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

    $query = $pdo->query('SELECT pseudo, pokeball, lugiaHp, score FROM users ORDER BY score DESC LIMIT 5');
    $winners = $query->fetchAll();

    $query2 = $pdo->query('SELECT pseudo, pokeball, lugiaHp, score FROM users WHERE id=(SELECT max(id) FROM users)');
    $userScore = $query2->fetchAll();



    /**
     * API PHP 
     */


    //Define principal url
    $url = 'https://pokeapi.co/api/v2/';

    //Define pokemon url and sprites
    $lugiaPhotoUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png';
    $artikodinPhotoUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png';
    $elekthorPhotoUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png';
    $sulfuraPhotoUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png';
    $lugiaUrl = $url . 'pokemon/249/';
    $artikodinUrl = $url . 'pokemon/144/';
    $elekthorUrl = $url . 'pokemon/145/';
    $sulfuraUrl = $url . 'pokemon/146/';


    //define move lugia's url
    $hiddenPowerUrl = $url . 'move/237';
    $thunderUrl = $url . 'move/87';
    $psychicUrl = $url . 'move/94';
    $aeroblastUrl = $url . 'move/177';

    //define artikodin's move url
    $iceBeamUrl = $url . 'move/58';
    $hurricaneUrl = $url . 'move/542';
    $gustUrl = $url . 'move/16';
    $powderSnowUrl = $url . 'move/181';

    //define electhor's moves url 
    $thunderShockUrl = $url . 'move/84';
    $drillPeckUrl = $url . 'move/65';

    //define sulfura's moves url  
    $flamethrowerUrl = $url . 'move/53';
    $wingAttackUrl = $url . 'move/17';
    $emberUrl = $url . 'move/52';
   
    //pokeball url
    $pokeballUrl = $url .'item/4';

        //Pokemon request to Api
        $curl = curl_init($lugiaUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $lugiaUrlExec = curl_exec($curl);
        curl_close($curl);

        //artikodin
        $curl = curl_init($artikodinUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $artikodinUrlExec = curl_exec($curl);
        curl_close($curl);

        //elekthor
        $curl = curl_init($elekthorUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $elekthorUrlExec = curl_exec($curl);
        curl_close($curl);

        //sulfura
        $curl = curl_init($sulfuraUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $sulfuraUrlExec = curl_exec($curl);
        curl_close($curl);

        //decode pokemon to json
        $lugiaJson = json_decode($lugiaUrlExec);
        $artikodinJson = json_decode($artikodinUrlExec);
        $elekthorJson = json_decode($elekthorUrlExec);
        $sulfuraJson = json_decode($sulfuraUrlExec);

        //move request to api
        //lugia move request
        $curl = curl_init($hiddenPowerUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $hiddenPowerUrlExec = curl_exec($curl);
        curl_close($curl);

        $curl = curl_init($thunderUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $thunderUrlExec = curl_exec($curl);
        curl_close($curl);

        $curl = curl_init($psychicUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $psychicUrlExec = curl_exec($curl);
        curl_close($curl);

        $curl = curl_init($aeroblastUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $aeroblastUrlExec = curl_exec($curl);
        curl_close($curl);

        //artikodin moves
        $curl = curl_init($iceBeamUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $iceBeamUrlExec = curl_exec($curl);
        curl_close($curl);

        $curl = curl_init($hurricaneUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $hurricaneUrlExec = curl_exec($curl);
        curl_close($curl);

        $curl = curl_init($gustUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $gustUrlExec = curl_exec($curl);
        curl_close($curl);

        $curl = curl_init($powderSnowUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $powderSnowUrlExec = curl_exec($curl);
        curl_close($curl);

        //electhor's moves
        $curl = curl_init($thunderShockUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $thunderShockUrlExec = curl_exec($curl);
        curl_close($curl);

        $curl = curl_init($drillPeckUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $drillPeckUrlExec = curl_exec($curl);
        curl_close($curl);

        //sulfura's moves
        $curl = curl_init($flamethrowerUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $flamethrowerUrlExec = curl_exec($curl);
        curl_close($curl);

        $curl = curl_init($wingAttackUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $wingAttackUrlExec = curl_exec($curl);
        curl_close($curl);

        $curl = curl_init($emberUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $emberUrlExec = curl_exec($curl);
        curl_close($curl);

        $curl = curl_init($pokeballUrl);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $pokeballUrlExec = curl_exec($curl);
        curl_close($curl);
        

    //decode moves to json
    //lugia's moves
    $hiddenPowerJson = json_decode($hiddenPowerUrlExec);
    $thunderJson = json_decode($thunderUrlExec);
    $psychicJson = json_decode($psychicUrlExec);
    $aeroblastJson = json_decode($aeroblastUrlExec);

    //artikodin's moves
    $iceBeamJson = json_decode($iceBeamUrlExec);
    $hurricaneJson = json_decode($hurricaneUrlExec);
    $gustJson = json_decode($gustUrlExec);
    $powderSnowJson = json_decode($powderSnowUrlExec);

    //electhor's moves
    $thunderShockJson = json_decode($thunderShockUrlExec);
    $drillPeckJson = json_decode($drillPeckUrlExec);

    //electhor's moves
    $flamethrowerJson = json_decode($flamethrowerUrlExec);
    $wingAttackJson = json_decode($wingAttackUrlExec);
    $emberJson = json_decode($emberUrlExec);

    //pokeball decode to json
    $pokeballJson = json_decode($pokeballUrlExec);

    $userPokemon = (object)[]; 
    $userPokemon->pokemons = [json_decode($sulfuraUrlExec), json_decode($artikodinUrlExec), json_decode($elekthorUrlExec)];
    //up HP
    foreach($userPokemon->pokemons as $pokemon)
    {
        $pokemon->stats[5]->base_stat = $pokemon->stats[5]->base_stat * 6;
    }
    $sulfuraJson->stats[5]->base_stat = $sulfuraJson->stats[5]->base_stat * 6;
    $artikodinJson->stats[5]->base_stat = $artikodinJson->stats[5]->base_stat * 6;
    $elekthorJson->stats[5]->base_stat = $elekthorJson->stats[5]->base_stat * 6;
    $userPokemon->spritesUrl = ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/146.png','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/144.png','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/145.png'];

    $lugiaJson->attacks = [json_decode($hiddenPowerUrlExec), json_decode($thunderUrlExec), json_decode($psychicUrlExec), json_decode($aeroblastUrlExec)];
    $artikodinJson->attacks = [json_decode($iceBeamUrlExec), json_decode($hurricaneUrlExec), json_decode($gustUrlExec), json_decode($powderSnowUrlExec)];
    $elekthorJson->attacks = [json_decode($thunderShockUrlExec), json_decode($thunderUrlExec), json_decode($hiddenPowerUrlExec), json_decode($drillPeckUrlExec)];
    $sulfuraJson->attacks = [json_decode($flamethrowerUrlExec), json_decode($hiddenPowerUrlExec), json_decode($wingAttackUrlExec), json_decode($emberUrlExec)];

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href ="css/game.css?b=<?= rand(0,100) ?>">
    <link rel="stylesheet" href ="css/reset.css?b=<?= rand(0,100) ?>">
    <title>LUGIA's fight</title> 
    <link rel="icon" href="images/favicon.ico" type="image/ico">
</head>
<body>
    
    <!--formulaire-->
    <p class="hidden-values lugia-hp"><?= $lugiaJson->stats[5]->base_stat?></p>
    <p class="hidden-values lugia-attack"><?= $hiddenPowerJson->name?></p> <p class="hidden-values lugia-attack-power"><?= $hiddenPowerJson->power?></p> 
    <p class="hidden-values lugia-attack"><?= $thunderJson->name?></p> <p class="hidden-values lugia-attack-power"><?= $thunderJson->power?></p> 
    <p class="hidden-values lugia-attack"><?= $psychicJson->name?></p> <p class="hidden-values lugia-attack-power"><?= $psychicJson->power?></p>
    <p class="hidden-values lugia-attack"><?= $aeroblastJson->name?></p> <p class="hidden-values lugia-attack-power"><?= $aeroblastJson->power?></p>

    <p class="hidden-values user-pseudo"><?= $pseudo ?></p>
 
    <!-- Game -->

    <div class="game-interface">
        <!-- game container with sprites and stat -->
        <div class="battle-container">
            <div class="ia-container">
                <div class="stats-container">
                    <p class="pokemon-name"><?= $lugiaJson->name?></p>
                    <p class="pokemon-level"> LVL. 70</p>
                    <p class="pokemon-pv"> <?= $lugiaJson->stats[5]->stat->name?></p>
                    <div class="pokemon-pv-seekbar"></div>
                </div>
                <div class="sprite-container"><img src="<?= $lugiaPhotoUrl?>"></div>
                <div class="sprite-pokeball"><img src="<?= $pokeballJson->sprites->default ?>" alt=""></div>
            </div>
            <div class="user-container">
                <?php foreach($userPokemon->pokemons as $pokemon) { ?>
                    <div class="stats-container">
                        <p class="pokemon-name"><?= $pokemon->name?></p>
                        <p class="pokemon-level"> LVL. 50</p>
                        <p class="pokemon-pv"> <?= $pokemon->stats[5]->stat->name?> </p>
                        <p class="pokemon-pv-ratio"> <span class="pokemon-pv-value"><?= $pokemon->stats[5]->base_stat?></span>/<?= $pokemon->stats[5]->base_stat?></p>
                        <div class="pokemon-pv-seekbar"></div>
                    </div>
                <?php } ?>
                <?php foreach($userPokemon->spritesUrl as $spriteUrl) { ?>
                    <div class="sprite-container"><img src="<?= $spriteUrl?>"></div>
                <?php } ?>               
            </div>
        </div>
        <!-- 4 actions possible for user container -->
        <div class="battle-actions">
            <div class="battle-actions-left">
                <p>What will do Moltres ?</p>
            </div>
            <div class="battle-actions-right">
                <div class="attack-action battle-action">ATTACK</div>
                <div class="capture-action battle-action">CAPTURE</div>
                <div class="pokemon-action battle-action">POKEMON</div>
                <div class="escape-action battle-action">ESCAPE</div>
            </div>
        </div>
        <!-- 4 attack container -->
        <div class="attack-container attacks-sulfura">
        <?php foreach($sulfuraJson->attacks as $attack) { ?>
            <div class="attack">
                <p class="name"><?= $attack->name?></p>
                <p><span class="pp"><?= $attack->pp?></span>PP type/<?= $attack->type->name?></p>
                <p class="hidden-values attack-power"><?= $attack->power?></p>
            </div>
        <?php } ?>
        </div>

        <div class="attack-container attacks-artikodin">
        <?php foreach($artikodinJson->attacks as $attack) { ?>
            <div class="attack">
                <p class="name"><?= $attack->name?></p>
                <p><span class="pp"><?= $attack->pp?></span>PP type/<?= $attack->type->name?></p>
                <p class="hidden-values attack-power"><?= $attack->power?></p>
            </div>
        <?php } ?>
        </div>

        <div class="attack-container attacks-elekthor">
        <?php foreach($elekthorJson->attacks as $attack) { ?>
            <div class="attack">
                <p class="name"><?= $attack->name?></p>
                <p><span class="pp"><?= $attack->pp?></span>PP type/<?= $attack->type->name?></p>
                <p class="hidden-values attack-power"><?= $attack->power?></p>
            </div>
        <?php } ?>
        </div>

        <!-- change and choose pokemon container -->
        <div class="change-container">
            <div class="first-pokemon pokemon">
                <img src="<?= $sulfuraPhotoUrl?>">
                <p class="name"><?= $sulfuraJson->name?></p>
                <p><?= $sulfuraJson->stats[5]->stat->name?><span class="pv-to-update"><?= $sulfuraJson->stats[5]->base_stat?></span>/<?= $sulfuraJson->stats[5]->base_stat?></p>
            </div>
            <div class="first-pokemon-2 pokemon">
                <img src="<?= $sulfuraPhotoUrl?>">
                <p class="name"><?= $sulfuraJson->name?></p>
                <p><?= $sulfuraJson->stats[5]->stat->name?><span class="pv-to-update"><?= $sulfuraJson->stats[5]->base_stat?></span>/<?= $sulfuraJson->stats[5]->base_stat?></p>
            </div>
            <div class="second-pokemon pokemon">
                <img src="<?= $artikodinPhotoUrl?>">
                <p class="name"><?= $artikodinJson->name?></p>
                <p><?= $artikodinJson->stats[5]->stat->name?><span class="pv-to-update"><?= $artikodinJson->stats[5]->base_stat?></span>/<?= $artikodinJson->stats[5]->base_stat?></p>
            </div>
            <div class="third-pokemon pokemon">
                <img src="<?= $elekthorPhotoUrl?>">
                <p class="name"><?= $elekthorJson->name?></p>
                <p><?= $elekthorJson->stats[5]->stat->name?><span class="pv-to-update"><?= $elekthorJson->stats[5]->base_stat?></span>/<?= $elekthorJson->stats[5]->base_stat?></p>
            </div>
        </div>
    </div>
    <div class="winners-container">
        <h1 class="title">Past Winners</h1>
        <table class="winner-table">
            <tr>
                <th>Pseudo</th>
                <th>Pokeball</th>
                <th>Lugia's HP</th>
                <th>Score</th>
            </tr>
            <?php foreach($winners as $winner) { ?>
            <tr>
                <td><?= $winner->pseudo?></td>
                <td><?= $winner->pokeball?></td>
                <td><?= $winner->lugiaHp?></td>
                <td><?= $winner->score?></td>
            </tr>
            <?php } ?>
            <tr>
                <td class="user-score"><?= $userScore[0]->pseudo?></td>
                <td class="user-score"><?= $userScore[0]->pokeball?></td>
                <td class="user-score"><?= $userScore[0]->lugiaHp?></td>
                <td class="user-score"><?= $userScore[0]->score?></td>
            </tr>
        </table>
    </div>

    <script src="js/game.js?b=<?= rand(0,100) ?>"></script>

</body>
</html>