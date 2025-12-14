let casualNumbers = document.getElementById("numbers-list")


const arrayOfNumbers = [];


for (let i = 0; i < 5; i++) {
    arrayOfNumbers.push(inrangeRandomNumberGenerator(1, 50));
};

for (let i = 0; i < 5; i++) {
    casualNumbers.innerHTML += `<li>${arrayOfNumbers[i]}</li>`;
}





