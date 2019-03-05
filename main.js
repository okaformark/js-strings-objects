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

const catName=()=>{
    return 'killer';
};
const bucketOfCats = {
    cat1: 'fluffy',
    cat2: 5,
    cat3: catName,
    cat4: {
        water: 'nope',
        sunlight: 'yep'
    }
};
//dot notation to access function
console.log(bucketOfCats.cat2);
console.log(bucketOfCats.cat4.water);

//bracket notation
console.log(bucketOfCats['cat2']);

let hitchhikers_guide={
    characters: ["zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "don't panic",
    random_facts: {
        copies_sold: 140000,
        formats: ["radio", "tv", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life:42
        }
    }
}
console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010",
    }

console.log('our company lawyer is' + " "+ employee.name);
console.log(employee['name']+ " was hired "+employee.hire_date);
employee.vacation_days = 20;

let eom = "employee_of_the_month";
employee[eom] = false;
