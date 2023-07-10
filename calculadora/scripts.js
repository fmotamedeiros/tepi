function calculate() {
  let screen = document.getElementById('screen');
  let result = eval(screen.value);
  screen.value = result;
}

function clearScreen() {
  let screen = document.getElementById('screen');
  screen.value = '';
}

function buttonClick(button) {
  let screen = document.getElementById('screen');
  screen.value = screen.value + button;
}