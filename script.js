const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    //console.log(button)
    button.addEventListener('click' , function(event1){
        //console.log(event1);
        //console.log(event1.target);
        
        switch (event1.target.id) {
            case "grey":
                body.style.backgroundColor = event1.target.id;
                break;
            case "white":
                body.style.backgroundColor = event1.target.id;
                break;
            case "blue":
                body.style.backgroundColor = event1.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = event1.target.id;
                break;
            case "pink":
                body.style.backgroundColor = event1.target.id;
                break;
            case "greenyellow":
                body.style.backgroundColor = event1.target.id;
                break;        
            default:
                body.style.backgroundColor = event1.target.id;
                break;
        }
    })
    
})