const code = document.querySelector('#code');
const preview = document.querySelector('#preview');
const runButton = document.querySelector('#run');
const resetButton = document.querySelector('#reset');
const initialCode = code.value;

function runCode() {
  preview.srcdoc = code.value;
}

runButton.addEventListener('click', runCode);

resetButton.addEventListener('click', function () {
  code.value = initialCode;
  runCode();
});

code.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key === 'Enter') {
    runCode();
  }
});

runCode();
