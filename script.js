let Buttonn = document.getElementById("buttonn");
let Button = document.getElementById("button");
let text = document.getElementById("pelement");

Buttonn.addEventListener('click', OnButtonOneClicked);
button.addEventListener('click', OnButtonTwoClicked);







function OnButtonOneClicked() {
    document.getElementById("pelement").innerHTML = "Button 1 was clicked!";
};

function OnButtonTwoClicked() {
    document.getElementById("pelement").innerHTML = "You clicked on Button 2!";
};