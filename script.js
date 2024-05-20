const randomColor = ["green", "blue", "red"]


const h5_element = document.querySelectorAll(".the_h5");


function randomness() {
    let randomNumber = Math.floor(Math.random() * 3 ) ; 
    let theColor =  randomColor[randomNumber]
    return theColor
}

function timer(element, color_, duration) {
    setTimeout(function () {
        element.style.color = color_
    }, duration)
}


h5_element.forEach((h5_e) => {
    h5_e.addEventListener('click', () => {
        
        for(let i = 0; i < randomColor.length; i++) {
           
            timer(h5_e,randomness(),1000)
            timer(h5_e,randomness(),3000)
            timer(h5_e,randomness(),5000)

        }
        
    });
})

