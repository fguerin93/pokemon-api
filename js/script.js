console.log('ok')

//DOM ELEMENTS

//three container to display on click on attack
const $battleActions = document.querySelector('.game-interface .battle-actions')
let $attackContainer = document.querySelector('.game-interface .attack-container.attacks-sulfura')
const $changeContainer = document.querySelector('.game-interface .change-container')

//actions container to event on click
const $attackAction = document.querySelector('.game-interface .battle-actions-right .attack-action')
const $pokemonAction = document.querySelector('.game-interface .battle-actions-right .pokemon-action')
const $captureAction = document.querySelector('.game-interface .battle-actions-right .capture-action')
const $escapeAction = document.querySelector('.game-interface .battle-actions-right .escape-action')

//three pokemons sprite back container
const $spriteContainers = document.querySelectorAll('.game-interface .battle-container .user-container .sprite-container ')

//three pokemons stats container
const $statsContainers = document.querySelectorAll('.game-interface .battle-container .user-container .stats-container ')

//each attack to click on
const $attack = document.querySelectorAll('.game-interface .attack-container .attack')

// LUGIA DOM ELEMENTS
const $lugiaSprite = document.querySelector('.game-interface .battle-container .ia-container .sprite-container ')
const $lugiaHpBar = document.querySelector('.game-interface .battle-container .ia-container .stats-container .pokemon-pv-seekbar')
const $lugiaHpValue = document.querySelector('.lugia-hp')
const lugiaHpBase = Number($lugiaHpValue.textContent) * 10
let lugiaHpAfter = Number($lugiaHpValue.textContent) * 10

//BARRE DE HP OF USER POKEMONS
const $userPokemonHpBar = document.querySelectorAll('.game-interface .battle-container .user-container .stats-container .pokemon-pv-seekbar')
const $userPokemonHpValues = document.querySelectorAll('.game-interface .battle-container .user-container .stats-container .pokemon-pv-ratio .pokemon-pv-value')
const userPokemonHpBase = [Number($userPokemonHpValues[0].textContent), Number($userPokemonHpValues[1].textContent), Number($userPokemonHpValues[2].textContent)]
const userPokemonHpAfter = [Number($userPokemonHpValues[0].textContent), Number($userPokemonHpValues[1].textContent), Number($userPokemonHpValues[2].textContent)]
const $userPokemonPvToUpdate = document.querySelectorAll('.game-interface .change-container .pokemon .pv-to-update')

//two pokemon to click on
const $pokemonChange = document.querySelectorAll('.game-interface .change-container .pokemon')


//description container
const $descriptionContainer = document.querySelector('.game-interface .battle-actions-left p')


const pokemonChoosed = {}
pokemonChoosed.sulfura = true
pokemonChoosed.artikodin = false
pokemonChoosed.elekthor = false

let userTurn = true


//event to display others container

$attackAction.addEventListener('click', () =>
{
    if (userTurn)
    {
        $battleActions.style.display="none"
        $attackContainer.style.display="block"
    }
})

$captureAction.addEventListener('click', () =>
{
    if (userTurn)
    {
        $descriptionContainer.textContent="Bruno simon lance une pokéball"
        userTurn = false
        setTimeout(iaTurn, 2000)
    }
})

$pokemonAction.addEventListener('click', () =>
{
    if (userTurn)
    {
        $battleActions.style.display="none"
        $changeContainer.style.display="block"
    }
})

$escapeAction.addEventListener('click', () =>
{
    if (userTurn)
    {
        $descriptionContainer.textContent="Désolé Bruno Simon, vous ne pouvez pas partir"
    }
})

//event to display others container and change description
const $attackChoosed = document.querySelectorAll('.attack-container .attack .name')
const $attackChoosedPP = document.querySelectorAll('.attack-container .attack p .pp')
const $attackChoosedPower = document.querySelectorAll('.attack-container .attack .attack-power')

for (let i=0; i<$attack.length; i++)
{
    if(userTurn)
    {
        $attack[i].addEventListener('click', () =>
        {
            //change name for description container
            if (pokemonChoosed.sulfura) pokemonAttacking="moltres"
            else if (pokemonChoosed.artikodin) pokemonAttacking="articuno"
            else if (pokemonChoosed.elekthor) pokemonAttacking="zapdos"
    
            if (Number($attackChoosedPP[i].textContent)>0) //if PP = 0, stop click
            {
                $attackContainer.style.display="none";
                $battleActions.style.display="block";
                $descriptionContainer.textContent=`${pokemonAttacking} lance l'attaque ${$attackChoosed[i].innerText}`; //description with attack choosed name
                $attackChoosedPP[i].textContent = `${Number($attackChoosedPP[i].innerText)-1}` //PP number decrease
    
                lugiaHpAfter = lugiaHpAfter - Number($attackChoosedPower[i].innerText) //change lugia hp
                $lugiaHpBar.style.transform=`scaleX(${lugiaHpAfter/lugiaHpBase})` //change lugia hp bar in interface

                $spriteContainers.forEach($spriteContainer => {
                    $spriteContainer.classList.add('spriteAnim')  
                    setTimeout(() => {
                        $spriteContainer.classList.remove('spriteAnim') 
                    }, 1000);
                })
            }
            userTurn = false
            setTimeout(iaTurn, 2000)
        })
    }
}

//FUNCTION WHEN POKEMON IS ATTACKED

const $pokemonChoosed = document.querySelectorAll('.change-container .pokemon .name')
const pokemonChoosedIsDead = {}
pokemonChoosedIsDead.sulfura = false
pokemonChoosedIsDead.artikodin = false
pokemonChoosedIsDead.elekthor = false

for (let i=0; i<$pokemonChange.length; i++)
{
    if(userTurn)
    {
        $pokemonChange[i].addEventListener('click', () =>
        {
            $changeContainer.style.display="none";
            $battleActions.style.display="block";
    
            switch (i)
            {
                case 0:
                    $attackContainer = document.querySelector('.game-interface .attack-container.attacks-sulfura')
    
                    //to display photos in pokemon change choose
                    $pokemonChange[2].style.display='flex'
    
                    //to display back sprites 
                    $spriteContainers[0].style.display='block'
                    $spriteContainers[1].style.display='none'
                    $spriteContainers[2].style.display='none'
    
                    //to display stats containers
                    $statsContainers[0].style.display='block'
                    $statsContainers[1].style.display='none'
                    $statsContainers[2].style.display='none'
    
                    //change boolean varible
                    pokemonChoosed.sulfura=true
                    pokemonChoosed.artikodin=false
                    pokemonChoosed.elekthor=false
    
                  break;
                case 1:
                    $attackContainer = document.querySelector('.game-interface .attack-container.attacks-sulfura')
    
                    //to display photos in pokemon change choose
                    $pokemonChange[3].style.display='flex'
    
                    //to display back sprites 
                    $spriteContainers[0].style.display='block'
                    $spriteContainers[1].style.display='none'
                    $spriteContainers[2].style.display='none'
    
                    //to display stats containers
                    $statsContainers[0].style.display='block'
                    $statsContainers[1].style.display='none'
                    $statsContainers[2].style.display='none'
    
                    //change boolean varible
                    pokemonChoosed.sulfura=true
                    pokemonChoosed.artikodin=false
                    pokemonChoosed.elekthor=false
    
                    break;
                case 2:
                    $attackContainer = document.querySelector('.game-interface .attack-container.attacks-artikodin')
    
                    //to display photos in pokemon change choose
                    $pokemonChange[0].style.display='flex'
                    $pokemonChange[3].style.display='flex'
    
                    //to display back sprites 
                    $spriteContainers[0].style.display='none'
                    $spriteContainers[1].style.display='block'
                    $spriteContainers[2].style.display='none'
    
                    //to display stats containers
                    $statsContainers[0].style.display='none'
                    $statsContainers[1].style.display='block'
                    $statsContainers[2].style.display='none'
    
                    //change boolean varible
                    pokemonChoosed.sulfura=false
                    pokemonChoosed.artikodin=true
                    pokemonChoosed.elekthor=false
    
                  break;
                case 3:
                    $attackContainer = document.querySelector('.game-interface .attack-container.attacks-elekthor')
    
                    //to display photos in pokemon change choose
                    $pokemonChange[1].style.display='flex'
                    $pokemonChange[2].style.display='flex'
    
                    //to display back sprites 
                    $spriteContainers[0].style.display='none'
                    $spriteContainers[1].style.display='none'
                    $spriteContainers[2].style.display='block'
    
                    //to display stats containers
                    $statsContainers[0].style.display='none'
                    $statsContainers[1].style.display='none'
                    $statsContainers[2].style.display='block'
    
                    //change boolean varible
                    pokemonChoosed.sulfura=false
                    pokemonChoosed.artikodin=false
                    pokemonChoosed.elekthor=true
      
                    break;
            }
            $pokemonChange[i].style.display='none'
    
            $descriptionContainer.textContent=`Bruno simon choisit ${$pokemonChoosed[i].innerText}`;
            userTurn = false
            setTimeout(iaTurn, 2000)
        })
    }
}

// IA ATTACK SCRIPT

const iaTurn = () =>
{
    const $lugiaAttacks = document.querySelectorAll('.lugia-attack')
    const $lugiaAttacksPowers = document.querySelectorAll('.lugia-attack-power')
    let lugiaAttacksArray = []
    let lugiaAttacksPowersArray = []
    
    $lugiaAttacks.forEach($attack => {
        lugiaAttacksArray.push($attack.innerText)
    });

    $lugiaAttacksPowers.forEach($power => {
        lugiaAttacksPowersArray.push(Number($power.innerText))
    });
    
    let lugiaAttackChoosed = ""
    let lugiaAttackPowerChoosed = ""
    
    while (userTurn == false)
    {
        console.log('tour de lugia')
        let mathRandomValueForLugiaAttack = Math.random()

        //lugia choose his attack script
        if (mathRandomValueForLugiaAttack<=0.4) lugiaAttackChoosed = lugiaAttacksArray[1], lugiaAttackPowerChoosed = lugiaAttacksPowersArray[1]
        else if ((mathRandomValueForLugiaAttack>0.3)&&(mathRandomValueForLugiaAttack<=0.8)) lugiaAttackChoosed = lugiaAttacksArray[3], lugiaAttackPowerChoosed = lugiaAttacksPowersArray[3]   
        else if ((mathRandomValueForLugiaAttack>0.2)&&(mathRandomValueForLugiaAttack<=0.9)) lugiaAttackChoosed = lugiaAttacksArray[2], lugiaAttackPowerChoosed = lugiaAttacksPowersArray[2]  
        else if ((mathRandomValueForLugiaAttack>0.1)&&(mathRandomValueForLugiaAttack<=1)) lugiaAttackChoosed = lugiaAttacksArray[0], lugiaAttackPowerChoosed = lugiaAttacksPowersArray[0] 


        if (pokemonChoosed.sulfura)
        {
            userPokemonHpAfter[0] = userPokemonHpAfter[0] - lugiaAttackPowerChoosed
            $userPokemonHpBar[0].style.transform=`scaleX(${userPokemonHpAfter[0]/userPokemonHpBase[0]})` 
            $userPokemonHpValues[0].textContent = userPokemonHpAfter[0]
            $userPokemonPvToUpdate[0].textContent = userPokemonHpAfter[0]
            $userPokemonPvToUpdate[1].textContent = userPokemonHpAfter[0]

            if (userPokemonHpAfter[0]<=0)
            {
                $userPokemonHpBar[0].style.transform=`scaleX(0)` 
                $userPokemonHpValues[0].textContent = 0
                $userPokemonPvToUpdate[0].textContent = 0
                $userPokemonPvToUpdate[1].textContent = 0
            }

        }
        else if (pokemonChoosed.artikodin)
        {
            userPokemonHpAfter[1] = userPokemonHpAfter[1] - lugiaAttackPowerChoosed
            $userPokemonHpBar[1].style.transform=`scaleX(${userPokemonHpAfter[1]/userPokemonHpBase[1]})` 
            $userPokemonHpValues[1].textContent = userPokemonHpAfter[1]
            $userPokemonPvToUpdate[2].textContent = userPokemonHpAfter[1]
        }
        if (pokemonChoosed.elekthor)
        {
            userPokemonHpAfter[2] = userPokemonHpAfter[2] - lugiaAttackPowerChoosed
            $userPokemonHpBar[2].style.transform=`scaleX(${userPokemonHpAfter[2]/userPokemonHpBase[2]})` 
            $userPokemonHpValues[2].textContent = userPokemonHpAfter[2]
            $userPokemonPvToUpdate[3].textContent = userPokemonHpAfter[2]
        }

        const updateDescriptionAndSpriteMoving = () =>
        {
            $descriptionContainer.textContent=`lugia lance l'attaque ${lugiaAttackChoosed}`
            $lugiaSprite.classList.add('spriteAnim')  
            setTimeout(() => {$lugiaSprite.classList.remove('spriteAnim')}, 1000)
        }
        userTurn = true
        updateDescriptionAndSpriteMoving()
    }
}
