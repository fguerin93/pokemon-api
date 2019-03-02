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

//pokeball sprite
const $pokeballSprite = document.querySelector('.game-interface .battle-container .ia-container .sprite-pokeball')

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
let needToChangePokemon = false

let gameIsFinish = false

//event to display others container

$attackAction.addEventListener('click', () =>
{
    if ((userTurn)&&(!needToChangePokemon)&&(!gameIsFinish))
    {
        $battleActions.style.display="none"
        $attackContainer.style.display="block"
    }
})

$captureAction.addEventListener('click', () =>
{
    if ((userTurn)&&(!needToChangePokemon)&&(!gameIsFinish))
    {
        $descriptionContainer.textContent="Bruno simon throw a pokeball"

        $lugiaSprite.style.display="none"
        $pokeballSprite.style.display="flex"
        $pokeballSprite.classList.add('lugiaEscaped')

        const stopPokeballAnimation = () =>
        {
            $lugiaSprite.style.display="block"
            $pokeballSprite.style.display="none"
        }

        //capture algorythms
        let mathRandomValueForLugiaCapture = Math.random()

        if ((lugiaHpAfter<=lugiaHpBase*70/100)&&(mathRandomValueForLugiaCapture<=0.01)) lugiaCaptured()
        else if ((lugiaHpAfter<=lugiaHpBase*50/100)&&(mathRandomValueForLugiaCapture<=0.04)) lugiaCaptured()
        else if ((lugiaHpAfter<=lugiaHpBase*20/100)&&(mathRandomValueForLugiaCapture<=0.1)) lugiaCaptured()
        else if ((lugiaHpAfter<=lugiaHpBase*5/100)&&(mathRandomValueForLugiaCapture<=0.2)) lugiaCaptured()
        else if ((lugiaHpAfter>=lugiaHpBase*53/100)&&(lugiaHpAfter<=lugiaHpBase*55/100)) lugiaCaptured()
        else
        {
            userTurn = false
            setTimeout(stopPokeballAnimation, 3000)
            setTimeout(iaTurn, 4000)
        }
    }
    console.log(lugiaHpAfter, lugiaHpBase)
})

$pokemonAction.addEventListener('click', () =>
{
    if ((userTurn)&&(!gameIsFinish))
    {
        $battleActions.style.display="none"
        $changeContainer.style.display="block"
    }
})

$escapeAction.addEventListener('click', () =>
{
    if ((userTurn)&&(!gameIsFinish))
    {
        $descriptionContainer.textContent="Sorry Bruno Simon, you can't leave"
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
                $descriptionContainer.textContent=`${pokemonAttacking} used ${$attackChoosed[i].innerText}`; //description with attack choosed name
                $attackChoosedPP[i].textContent = `${Number($attackChoosedPP[i].innerText)-1}` //PP number decrease
    
                lugiaHpAfter = lugiaHpAfter - Number($attackChoosedPower[i].innerText) //change lugia hp
                $lugiaHpBar.style.transform=`scaleX(${lugiaHpAfter/lugiaHpBase})` //change lugia hp bar in interface

                //lugia pv if inferior to 0
                if (lugiaHpAfter<=0)
                {
                    $lugiaHpBar.style.transform=`scaleX(0)`
                    $descriptionContainer.textContent="Congratulations, you defeated lugia"
                    endGame()
                }

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
let pokemonChoosedIsDead = [false, false, false, false]

for (let i=0; i<$pokemonChange.length; i++)
{
    $pokemonChange[i].addEventListener('click', () =>
    {
        if ((userTurn)&&(pokemonChoosedIsDead[i]==false))
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
    
            $descriptionContainer.textContent=`Bruno simon choose ${$pokemonChoosed[i].innerText}`;
            if (!needToChangePokemon)
            {
                userTurn = false
                setTimeout(iaTurn, 2000)
            }
            else 
            {
                userTurn = true
                needToChangePokemon = false
            }
        }
    })
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
    
    while ((userTurn == false)&&(!gameIsFinish))
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
                $descriptionContainer.textContent=`Moltres is dead, choose another pokemon`
                $userPokemonHpBar[0].style.transform=`scaleX(0)` 
                $pokemonChange[0].style.opacity='0.3'
                $pokemonChange[1].style.opacity='0.3'
                $pokemonChange[0].style.cursor='initial'
                $pokemonChange[1].style.cursor='initial'
                $userPokemonHpValues[0].textContent = 0
                $userPokemonPvToUpdate[0].textContent = 0
                $userPokemonPvToUpdate[1].textContent = 0
                pokemonChoosedIsDead[0] = true
                pokemonChoosedIsDead[1] = true
                needToChangePokemon = true
            }

        }

        else if (pokemonChoosed.artikodin)
        {
            userPokemonHpAfter[1] = userPokemonHpAfter[1] - lugiaAttackPowerChoosed
            $userPokemonHpBar[1].style.transform=`scaleX(${userPokemonHpAfter[1]/userPokemonHpBase[1]})` 
            $userPokemonHpValues[1].textContent = userPokemonHpAfter[1]
            $userPokemonPvToUpdate[2].textContent = userPokemonHpAfter[1]

            if (userPokemonHpAfter[1]<=0)
            {
                $descriptionContainer.textContent=`Articuno is dead, choose another pokemon`
                $userPokemonHpBar[1].style.transform=`scaleX(0)` 
                $pokemonChange[2].style.opacity='0.3'
                $pokemonChange[2].style.cursor='initial'
                $userPokemonHpValues[1].textContent = 0
                $userPokemonPvToUpdate[2].textContent = 0
                pokemonChoosedIsDead[2] = true
                needToChangePokemon = true
            }
        }

        if (pokemonChoosed.elekthor)
        {
            userPokemonHpAfter[2] = userPokemonHpAfter[2] - lugiaAttackPowerChoosed
            $userPokemonHpBar[2].style.transform=`scaleX(${userPokemonHpAfter[2]/userPokemonHpBase[2]})` 
            $userPokemonHpValues[2].textContent = userPokemonHpAfter[2]
            $userPokemonPvToUpdate[3].textContent = userPokemonHpAfter[2]

            if (userPokemonHpAfter[2]<=0)
            {
                $descriptionContainer.textContent=`Elekthor is dead, choose another pokemon`
                $userPokemonHpBar[2].style.transform=`scaleX(0)` 
                $pokemonChange[3].style.opacity='0.3'
                $pokemonChange[3].style.cursor='initial'
                $userPokemonHpValues[2].textContent = 0
                $userPokemonPvToUpdate[3].textContent = 0
                pokemonChoosedIsDead[3] = true
                needToChangePokemon = true
            }
        }

        if ((userPokemonHpAfter[0]<=0)&&(userPokemonHpAfter[1]<=0)&&(userPokemonHpAfter[2]<=0))
        {
            $descriptionContainer.textContent="Sorry, you lose. Refresh to restart"
            endGame()
        }

        const updateDescriptionAndSpriteMoving = () =>
        {
            $descriptionContainer.textContent=`lugia used ${lugiaAttackChoosed}`
            $lugiaSprite.classList.add('spriteAnim')  
            setTimeout(() => {$lugiaSprite.classList.remove('spriteAnim')}, 1000)
        }
        userTurn = true
        updateDescriptionAndSpriteMoving()
    }
}


const lugiaCaptured = () =>
{
    setTimeout(() =>
    {
        $pokeballSprite.style.filter='grayscale(100%)'
        $descriptionContainer.textContent="Congratulations, lugia is captured"
    },3000)
    gameIsFinish = true
}

const endGame = () =>
{
    gameIsFinish = true
}