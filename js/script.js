const $launchingContainer = document.querySelector('.launching-container')
const $pokeballLaunching = document.querySelector('.launching-container img')
const $circleOnPokeball = document.querySelector('.launching-container .circle')

const $skipButton = document.querySelector('.intro-container .skip-button')
const $loadBar = document.querySelector('.intro-container .load-bar')
const $introContainer = document.querySelector('.intro-container')

const $pseudoContainer = document.querySelector('.pseudo-container')
const $audio = document.querySelector('.intro-container audio')
const $subtitle = document.querySelector('.intro-container .subtitle')

$pokeballLaunching.addEventListener('mouseover', () =>
{
    $circleOnPokeball.style.opacity='0.7';
})

$pokeballLaunching.addEventListener('mouseleave', () =>
{
    $circleOnPokeball.style.opacity='0';
})

$pokeballLaunching.addEventListener('click', () =>
{
    $launchingContainer.style.display='none'
    $introContainer.style.display='flex'
    $audio.play()
    subtitleFunction()
    $loadBar.classList.add('startScaling')
})

const subtitleFunction = () =>
{
    setTimeout(() => {
        $subtitle.classList.add('subtitleAppear')
        console.log('start')
    }, 20000);
    
    setTimeout(() => {
        $subtitle.innerHTML=`De crainte que ces titans n'anéantissent le monde dans </br> lequel ils s'affrontent`
    }, 20500);
    
    setTimeout(() => {
        $subtitle.classList.remove('subtitleAppear')
        console.log('stop')
    }, 21000);
    
    setTimeout(() => {
        $subtitle.classList.add('subtitleAppear')
    }, 26000);
    
    setTimeout(() => {
        $subtitle.innerHTML=`Même quand le légendaire gardien des abysses s'élèvera</br> pour reprimer la querelle`
    }, 26500);
    
    setTimeout(() => {
        $subtitle.classList.remove('subtitleAppear')
    }, 27000);
    
    setTimeout(() => {
        $subtitle.classList.add('subtitleAppear')
    }, 31000);
    
    setTimeout(() => {
        $subtitle.innerHTML=`Si il est seul, son chant échouera`
    }, 31500);
    
    setTimeout(() => {
        $subtitle.classList.remove('subtitleAppear')
    }, 32000);
    
    setTimeout(() => {
        $subtitle.classList.add('subtitleAppear')
    }, 33000);
    
    setTimeout(() => {
        $subtitle.innerHTML=`Et le sort du monde sera entre les mains de l'élu`
    }, 33500);
    
    setTimeout(() => {
        $subtitle.classList.remove('subtitleAppear')
    }, 34000);
    
    setTimeout(() => {
        $subtitle.classList.add('subtitleAppear')
    }, 38000);
    
    setTimeout(() => {
        $subtitle.innerHTML=`Oh toi l'élu, rassemble dans tes mains les trésors </br> de cette trinité`
    }, 38500);
    
    setTimeout(() => {
        $subtitle.classList.remove('subtitleAppear')
    }, 39000);
    
    setTimeout(() => {
        $subtitle.classList.add('subtitleAppear')
    }, 45000);
    
    setTimeout(() => {
        $subtitle.innerHTML=`Combinés, ils feront apparaître le gardien des abysses`
    }, 45500);
    
    setTimeout(() => {
        $subtitle.classList.remove('subtitleAppear')
    }, 46000);
    
    setTimeout(() => {
        $subtitle.classList.add('subtitleAppear')
    }, 52000);
    
    setTimeout(() => {
        $subtitle.innerHTML=`Le temps, est venu`
    }, 52500);
    
    setTimeout(() => {
        $subtitle.classList.remove('subtitleAppear')
    }, 53000);   
    
    setTimeout(() => {
        $introContainer.style.display='none'
        $pseudoContainer.style.display='flex'
    }, 56000);  
}

$skipButton.addEventListener('click', () =>
{
    $introContainer.style.display='none'
    $pseudoContainer.style.display='flex'
    $audio.pause()
})