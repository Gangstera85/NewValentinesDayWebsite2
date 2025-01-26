const noButton = document.querySelector("#noButton");
const yesButton = document.querySelector("#yesButton");
const kittenImage = document.querySelector("#mainPicture");
const h1Element = document.querySelector(".card h1");

let noButtonTapCounter = 10;

function setButtonRandomPosition(button) {
  const body = document.body;
  const bodyRect = body.getBoundingClientRect();
  const margin = 20;

  const randomX =
    Math.random() * (bodyRect.width - button.offsetWidth - margin);
  const randomY =
    Math.random() * (bodyRect.height - button.offsetHeight - margin);

  button.style.position = "absolute";
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}

function handleNoButtonClick() {
  noButtonTapCounter--;

  if (noButtonTapCounter > 0) {
    h1Element.textContent = `Остават ти ${noButtonTapCounter} от 10 опита 😠`;
    kittenImage.src = "../Pictures/angryCat.jpg";
    setButtonRandomPosition(noButton);
  } else {
    noButton.style.display = "none";
    h1Element.textContent = "Нямаш повече опити! 😠";
  }
}

function handleYesButtonClick() {
  noButton.style.display = "none";

  if (noButtonTapCounter < 10) {
    h1Element.innerHTML =
      "Можеше и от първия път да се съгласиш..но все пак благодаря 😠😑.<br>Ще те очаквам на 14-ти 😑";
    kittenImage.src = "../Pictures/angryCat2.jpg";
  } else {
    h1Element.innerHTML =
      "Оооо, супер 🧡🧡😊. <br> Много ти благодаря и радост ще те очаквам на 14-ти 🤗😊";
    kittenImage.src = "../Pictures/happyCat.jpg";
  }

  yesButton.textContent = "Продължи напред";
  yesButton.addEventListener("click", () => {
    window.location.href = "../Page3-Folder/page3.html";
  });
}

yesButton.addEventListener("click", handleYesButtonClick);
noButton.addEventListener("click", handleNoButtonClick);
