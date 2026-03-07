const greetingElement = document.getElementById("greeting");
greetingElement.styletextAlign + "center";
greetingElement.style.marginTop = "50px";
const username = window.prompt("What is your name?", "Welcome to my portfolio!");
greetingElement.textContent = `Hello, ${username}! Welcome to my portfolio!`; f
