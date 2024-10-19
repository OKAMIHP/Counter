// Counter
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
// use console.log() to log the number of clicks - then test that in the browser’s console Hi
let count = 0;
function increment() {
  count = count + 1;
  document.getElementById("count-el").innerText = count;
  console.log(count);
}
function save() {
  let save1 = 0;
  save1 = count;
  document.getElementById("save2").innerText = save2.innerText + save1 + "-";
}

function autoIncrement() {
  let x = prompt("What value?");
  for (let i = 0; i < x; i++) {
    count = count + 1;
    document.getElementById("count-el").innerText = count;
  }
  console.log(count);
}

function increment() {
  let x = prompt("What value?");
  for (let i = 0; i < x; i++) {
    setTimeout(autoIncrement, 1000);
  }
}
