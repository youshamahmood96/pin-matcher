// Hide the messages
document.getElementById('error-message').style.display='none'
document.getElementById('correct-match-message').style.display='none'

//Random Pin Generator Function

function pinGenerator(id1,id2){
    const pinGeneratorButton = document.getElementById(id2)
    pinGeneratorButton.addEventListener('click',function(){
        let max = 9998;
        let min = 1001;
        let result = Math.random() * (max - min) + min;
        let pin = Math.round(result);
        document.getElementById(id1).value = pin
        document.getElementById('typed-pin').value = '';
    })
}
pinGenerator('pin-display','pin-generator-button')

// Function for typing on number pad

function typeOnNumberPad(num,id){
    const typedPin = document.getElementById(id)
    typedPin.value+= num;
}
function backSpace(id){
    const display = document.getElementById(id).value;
    const backSpace = display.slice(0, display.length - 1);
    document.getElementById(id).value = backSpace;
}
function clearDisplay(id){
    document.getElementById(id).value = '';
}

//Function for checking the pin in display with the generated pin

function checkPin(id1,id2,id3,id4,id5){
    
    const submitButton = document.getElementById(id3)
    submitButton.addEventListener('click', function(){

    const triesLeft = document.getElementById(id5)
    const pinDisplay = document.getElementById(id1).value
    const typedPin = document.getElementById(id2).value
    const pinGenerated = parseInt(pinDisplay)
    const pinTyped = parseInt(typedPin)
    const errorMessage = document.getElementById('error-message')
    const correctMatchMessage = document.getElementById('correct-match-message')
    var numberOfTries = document.getElementById(id4).innerText
    var tryNumber = parseInt(numberOfTries)
    if(pinDisplay.length<=0 || typedPin.length<=0){
        alert('No Pin Generated / No Input Typed')
    }
    else{
        if(pinTyped === pinGenerated){
            errorMessage.style.display = 'none'
            correctMatchMessage.style.display = 'block'
            submitButton.style.display = 'none'
            triesLeft.style.display = 'none'
            }
        else{
            tryNumber--
            document.getElementById(id4).innerText = tryNumber
            if(tryNumber>0){
                errorMessage.style.display = 'block'
                correctMatchMessage.style.display = 'none'
            }
            else{
                errorMessage.style.display = 'block'
                correctMatchMessage.style.display = 'none'
                submitButton.disabled = true
            }
        }
    }
    })
}
checkPin('pin-display','typed-pin','submit-button','number-of-tries','tries-left')