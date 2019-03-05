const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

const iAmThirsty =(num)=>{
    if(num<21){
        return 'drink some water'+ '<br>';
        
    }
    if(21>num<65){
        return 'take a nap' + '<br>';
        
    }
    if(num>65){
        return 'have a beer';
       
    }
}
printToDom('thirsty', iAmThirsty(55));
printToDom('thirsty', iAmThirsty(11));
printToDom('thirsty', iAmThirsty(67));

const quote ='winter is coming';
console.log(quote.indexOf('is'));