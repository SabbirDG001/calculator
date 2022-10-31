// eval to make calculator 

// get everything through button 
const number = document.getElementById('number');
const operator = document.getElementById('operator');
const field = document.getElementById('calc-field');
const result = document.getElementById('result');

// number click 
number.addEventListener('click', function(event){
    const num = event.target.innerText;
    if(num !== 'C'){        
        field.innerText += num;
    }
    else{
        field.innerText = '';
    }

})
// operator click 
operator.addEventListener('click', function(event){
    const opera = event.target.innerText;
    if(opera === '='){
        const calculation = eval(field.innerText);
        result.innerText = calculation;
        // console.log(calculation);
        field.innerText = '';
    }
    else if(opera == '<'){
        // console.log(field.innerText);
        const digits = field.innerText.split('');
        digits.pop();
        field.innerText = digits.join('');
    }
    else{
        field.innerText += opera;
    }
})

