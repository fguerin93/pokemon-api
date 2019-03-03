# Devoir - POKEAPI: 

## Lugia's fight:

J'ai choisi pour ce projet de ne pas réaliser de pokédex, mais un combat afin de continuer à améliorer
mes compétences en js tout en apprenant l'utilisation d'une API via php.
Ce projet est en rapport avec le deuxième film pokemon, le pouvoir est en toi de 2000. Ce film parle 
de 3 oiseaux légendaires se battant et faisant apparaitre un tout autre pokémon légendaire lorsque les 3 sont réunies.
L'élu a pour but de capturer Lugia.

Le but du jeu est seulement de CAPTURER Lugia (car c'est ce que l'élu doit faire haha) et non pas de le battre.

## Je suis :
- Félix Guérin
- H2 P2022 G1

## Configuration :

Use MAMP to make a local server. Go to préférences in Mamp and select the folder, add the database and run Mamp.

## Navigateur recommandé :
- Google Chrome

## Tech :

- Animations css
- Algorithme JS
- PHP et base de données
- PokéAPI

## Fonctionnalités :

- Intro et clique sur pokeball:
. J'ai choisi de rajouter cette petite division d'intro absolument inutile si ce n'est 
qu'elle permet à chrome d'activer l'autoplay de l'audio.

- Audio et sous-titres :
. Audio enregistré du film POKEMON 2, le pouvoir est en toi
. Sous-titres réalisés avec une balise p qui modifie son textContent au fur et à mesure du temps.

- Entrée du pseudo
. J'ai n'ai mis aucune condition sur le pseudo, laissez aller votre imagination.
. Appuie sur entrée pour envoyer le formulaire

- Combat pokémon 
. Vous pouvez attaquer avec 4 attaques différentes pour chaque pokémon, que j'ai moi même choisi si au futur j'améliorerai en ajoutant l'efficacité en fonction du type. Vous n'aurez surement pas le temps (vous allez mourir avant haha), mais ne gaspillez pas tout vos points d'attaques (PP).
. Vous pouvez également choisir deux autres pokémons, electhor et artikodin (attention changer de pokémon prend du temps et lugia risque de vous attaquer après). 
. Vous pouvez choisir de lancer une pokéball.
. Vous ne pouvez malheuresement pas vous échapper et abandonner vos pokémons.

Les pv diminuent et les barres de pv se scale en fonction de la puissance de l'attaque.

- Tableaux des anciens gagnants
. Les 5 personnes avec le meilleur score (PV de lugia à la capture / nombre de pokéball utilisée) sont affichés dans le tableau
. la ligne verte correspond au score de l'utilisateur lors de sa partie

- Données de l'api utilisées
. Sprites (back et front)
. nom et pv au niveau 1 des pokemons
. Attaques (nom, pp, power, type)

- Données récupérées dans la base de données puis affichez
. pseudo
. nombre de pokeball utilisées
. pv de lugia lors de la capture
. score

## Problèmes rencontrés :

- Liaison JS-PHP-API-DATABASE

## Futures améliorations :

- Améliorer de mieux en mieux le combat pokemon avec des bonnes valeurs en fonction des résultats des gens
- Utiliser les valeurs de précision, et d'éfficacité en fonction du type
- Corriger le problèmes du tableau de fin (où le score de l'utilisateur ne s'affiche pas si il est dans les 5 premiers)
