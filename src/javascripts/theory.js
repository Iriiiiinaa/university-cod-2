console.clear(); //очистить консоль

const showModalWindowButton = document.querySelector(".showModalWindow"); //подключаем класс из theory.html
showModalWindowButton.addEventListener("click", showModalWindow); //функция работает по клику

//helloUser(); закомментили функцию с приветствием пользователя
function showModalWindow() {
  //вызов модального окна при клике на кнопку .showModalWindow
  alert("hey!");
}
function helloUser() {
  const userName = prompt("Как тебя зовут?"); //вызов модального окна с приветствием пользователя

  if (userName == null) {
    //если нажимаем отмена в модальном окне, то выводится Аноним?
    alert("Аноним?");
  } else {
    alert(`Привет, ${userName}!`); //если вводим свое имя
  }
}

//testWhile(); //вызов функции с while

function testWhile() {
  let number = 5; //переменные
  let i = 0; //переменные

  console.log("Таблица умножения на число", number);
  while (i < 10) {
    //функция выполняется пока...
    i++; //i увеличивается на 1
    console.log(number * i);
  }

  //   let scream = "a";

  //   while (scream != "aaaaaaaaaaaa") {
  //     console.log(scream);

  //     scream += "a";
  //   }
}

showPineTree(); //вызов функции с рисованием елки
function showPineTree() {
  //рисуем елку
  const treeHeight = 9;

  for (let i = 0; i < treeHeight; i++) {
    let starsCount = i * 2 + 1;

    let out = "";
    let spaceCount = treeHeight - i - 1;

    for (let k = 0; k < spaceCount; k++) {
      out += " ";
    }

    for (let j = 0; j < starsCount; j++) {
      out += "*";
    }

    console.log(out);
  }
}
