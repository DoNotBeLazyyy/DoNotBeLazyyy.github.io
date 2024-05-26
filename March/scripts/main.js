let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "/images/Mozilla_Firefox_3.5_logo.png") {
    myImage.setAttribute("src", "/images/Funny-Google-Logos-26.png");
  } else {
    myImage.setAttribute("src", "/images/Mozilla_Firefox_3.5_logo.png");
  }
};

