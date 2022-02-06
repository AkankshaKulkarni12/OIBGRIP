let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let inputValue = '';


for(item of buttons){
    item.addEventListener('click', (e)=>{
        btntxt = e.target.innerText;
        console.log('Button text is ', btntxt);

        if (btntxt == 'X'){
            btntxt = '*'; 
            inputValue += btntxt;
            screen.value = inputValue;
        }

        else if(btntxt == 'C'){
            inputValue = "";
            screen.value = inputValue;
        }

        else if(btntxt == '='){
            screen.value = eval(inputValue);
        }

        else{
            inputValue += btntxt;
            screen.value = inputValue;
        }
    })
}


