//DOM ELEMENTS

//three container to display on click on attack
const $battleActions = document.querySelector('.game-interface .battle-actions')
const $attackContainer = document.querySelector('.game-interface .attack-container')
const $changeContainer = document.querySelector('.game-interface .change-container')

//actions container to event on click
const $attackAction = document.querySelector('.game-interface .battle-actions-right .attack-action')
const $pokemonAction = document.querySelector('.game-interface .battle-actions-right .pokemon-action')

//each attack to click on
const $attack = document.querySelectorAll('.game-interface .attack-container .attack')

//two pokemon to click on
const $pokemonChange = document.querySelectorAll('.game-interface .change-container .pokemon')


//event to display others container
$attackAction.addEventListener('click', () =>
{
    $battleActions.style.display="none";
    $attackContainer.style.display="block";
})

$pokemonAction.addEventListener('click', () =>
{
    $battleActions.style.display="none";
    $changeContainer.style.display="block";
})

//event to display others container
for (let i=0; i<$attack.length; i++)
{
    $attack[i].addEventListener('click', () =>
    {
        $attackContainer.style.display="none";
        $battleActions.style.display="block";
        console.log('hey')
    })
}

for (let i=0; i<$pokemonChange.length; i++)
{
    $pokemonChange[i].addEventListener('click', () =>
    {
        $changeContainer.style.display="none";
        $battleActions.style.display="block";
        console.log('hey')
    })
}

