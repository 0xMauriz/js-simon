const casualNumbers = document.getElementById("numbers-list");
const formSaver = document.getElementById("answers-form");
const wholeForm = document.querySelector('form');
const inputs0 = document.querySelector('.form-control-0');
const inputs1 = document.querySelector('.form-control-1');
const inputs2 = document.querySelector('.form-control-2');
const inputs3 = document.querySelector('.form-control-3');
const inputs4 = document.querySelector('.form-control-4');

const inputsUtenteArray = [];

const arrayOfNumbers = [];


let rightNumbersCount = 5;



setTimeout(hideNumbersShowForm, 30000);

for (let i = 0; i < 5; i++) {
    arrayOfNumbers.push(inrangeRandomNumberGenerator(1, 50));
};

for (let i = 0; i < 5; i++) {
    casualNumbers.innerHTML += `<li>${arrayOfNumbers[i]}</li>`;
}




function hideNumbersShowForm() {
    casualNumbers.classList.add("d-none");
    formSaver.classList.remove("d-none");
    formSaver.classList.add("d-flex");
}

wholeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    inputsUtenteArray.push(parseInt(inputs0.value));
    inputsUtenteArray.push(parseInt(inputs1.value));
    inputsUtenteArray.push(parseInt(inputs2.value));
    inputsUtenteArray.push(parseInt(inputs3.value));
    inputsUtenteArray.push(parseInt(inputs4.value));


    for (let i = 0; i < 5; i++) {


        if (arrayOfNumbers.includes(inputsUtenteArray[i])) {
            console.log(`Il ${i + 1}° numero inserito è corretto!`);
        }

        else {
            console.log(`Il ${i + 1}° numero inserito è sbagliato!`);
            rightNumbersCount--;
        }
    }

    console.log(rightNumbersCount);
    

//    if (arrayOfNumbers.includes(inputsUtenteArray[0]) && arrayOfNumbers.includes(inputsUtenteArray[1]) 
//    && arrayOfNumbers.includes(inputsUtenteArray[2]) && arrayOfNumbers.includes(inputsUtenteArray[3]) && 
//    arrayOfNumbers.includes(inputsUtenteArray[4])) {
//        console.log('Esatto!');
//    }

//    else{
//        console.log('Sbagliato! :(');
        
//   }
    
}
)




