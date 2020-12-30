document.querySelector(".info button").addEventListener('click' , () => {
   var promptValue =  prompt("What is your name?");
    
    if( promptValue == null || promptValue == "" ){
        document.querySelector('.name').innerHTML = " Name : " + " unKnown ";
    } else {
        document.querySelector('.name').innerHTML = " Name : " + promptValue;
    }

    document.querySelector(".info").remove()
});


var arrayBlocks = Array.from(document.querySelectorAll(".game_blocks"));

var keys = Array.from(arrayBlocks.keys());
shufell(keys)

arrayBlocks.forEach( (block , index) => {
    block.style.order = keys[index];

    addflipped(block)
})


function addflipped(block) {
    block.addEventListener('click', () => {

        block.classList.add("is_fliped");

        let filtrationBlocks = arrayBlocks.filter((blocks) => blocks.classList.contains("is_fliped"));

        if(filtrationBlocks.length  == 2){
            stopclicking();
            
            checker(filtrationBlocks[0] ,filtrationBlocks[1]);
        }

    })
}


function checker(el1 , el2) {
 
    var trays = document.querySelector('.tryes span');    

    if(el1.dataset.tecnolegy === el2.dataset.tecnolegy){
        el1.classList.remove("is_fliped");
        el2.classList.remove("is_fliped");

        el1.classList.add("has_fliped");
        el2.classList.add("has_fliped");
        document.querySelector(".succ").play();
    }else{
        el1.classList.add("is_fliped");
        el2.classList.add("is_fliped");
        document.querySelector(".fail").play();

        trays.innerHTML = parseInt(trays.innerHTML) + 1

    }

}

function stopclicking() {
    document.querySelector(".pair_game").classList.add("no_clicking");

    setTimeout( () => {
        arrayBlocks.forEach((blo) => {
            blo.classList.remove("is_fliped")
        })
        document.querySelector(".pair_game").classList.remove("no_clicking");
    } ,1000)

}

function shufell(array) {
    var keysLength = array.length;
    var random;
    var temp; 

    while( keysLength > 0 ){

        random = Math.floor(Math.random() * keysLength);

        keysLength--

        temp = array[keysLength]; //28

        array[keysLength] = array[random] // 7

        array[random] = temp

    }

    return array;


}

