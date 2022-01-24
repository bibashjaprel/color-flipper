const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener('click',  function(){
    const randomNuber=getRandomNuumber(); //get random number betweeen 0-3
    console.log(randomNuber);
    document.body.style.backgroundColor=colors[randomNuber];
    color.textContent = colors[randomNuber];
})
function getRandomNuumber(){
    return Math.floor(Math.random()*colors.length);
}