// Variabile Name
let name = prompt("Please enter your name", " ");
console.log(name);

// Variabile Surname
let surname = prompt("Please enter your surname", " ");
console.log(surname);

// Variabile Favouritecolour
let favouritecolour = prompt("Please enter your favourite color", " ");
console.log(favouritecolour);

// Variabile Password
let password = name + surname + favouritecolour + '23'
console.log(password)

// Variabile per display password in html
document.getElementById('password').innerHTML = password