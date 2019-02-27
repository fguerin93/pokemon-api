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

//BAR DE HP LUGIA
const $lugiaHpBar = document.querySelector('.game-interface .battle-container .ia-container .stats-container .pokemon-pv-seekbar')
const $lugiaHpValue = document.querySelector('.lugia-hp')
const lugiaHpBase = Number($lugiaHpValue.textContent) * 10
let lugiaHpAfter = Number($lugiaHpValue.textContent) * 10

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
        $descriptionContainer.textContent="Bruno simon lance une pokéball";
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
    let lugiaAttacksArray = []
    
    $lugiaAttacks.forEach($attack => {
        lugiaAttacksArray.push($attack.innerText)
    });
    
    let lugiaAttackChoosed = ""
    
    while (userTurn == false)
    {
        console.log('tour de lugia')
        let mathRandomValueForLugiaAttack = Math.random()
        if (pokemonChoosed.sulfura)
        {
            if (mathRandomValueForLugiaAttack<=0.7) lugiaAttackChoosed = lugiaAttacksArray[0]
            else if ((mathRandomValueForLugiaAttack>0.7)&&(mathRandomValueForLugiaAttack<=0.8)) lugiaAttackChoosed = lugiaAttacksArray[1]     
            else if ((mathRandomValueForLugiaAttack>0.8)&&(mathRandomValueForLugiaAttack<=0.9)) lugiaAttackChoosed = lugiaAttacksArray[2]  
            else if ((mathRandomValueForLugiaAttack>0.9)&&(mathRandomValueForLugiaAttack<=1)) lugiaAttackChoosed = lugiaAttacksArray[3]  
        }
        else if (pokemonChoosed.artikodin)
        {
            if (mathRandomValueForLugiaAttack<=0.7) lugiaAttackChoosed = lugiaAttacksArray[0]
            else if ((mathRandomValueForLugiaAttack>0.7)&&(mathRandomValueForLugiaAttack<=0.8)) lugiaAttackChoosed = lugiaAttacksArray[1]     
            else if ((mathRandomValueForLugiaAttack>0.8)&&(mathRandomValueForLugiaAttack<=0.9)) lugiaAttackChoosed = lugiaAttacksArray[2]  
            else if ((mathRandomValueForLugiaAttack>0.9)&&(mathRandomValueForLugiaAttack<=1)) lugiaAttackChoosed = lugiaAttacksArray[3]  
        }
        if (pokemonChoosed.elekthor)
        {
            if (mathRandomValueForLugiaAttack<=0.7) lugiaAttackChoosed = lugiaAttacksArray[0]
            else if ((mathRandomValueForLugiaAttack>0.7)&&(mathRandomValueForLugiaAttack<=0.8)) lugiaAttackChoosed = lugiaAttacksArray[1]     
            else if ((mathRandomValueForLugiaAttack>0.8)&&(mathRandomValueForLugiaAttack<=0.9)) lugiaAttackChoosed = lugiaAttacksArray[2]  
            else if ((mathRandomValueForLugiaAttack>0.9)&&(mathRandomValueForLugiaAttack<=1)) lugiaAttackChoosed = lugiaAttacksArray[3]  
        }

        const updateDescriptionAndUserTurn = () =>
        {
            $descriptionContainer.textContent=`lugia lance l'attaque ${lugiaAttackChoosed}`
        }
        userTurn = true
        updateDescriptionAndUserTurn()
    }
}
