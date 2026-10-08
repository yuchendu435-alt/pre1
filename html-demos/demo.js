const source = document.querySelector("#demo-source").textContent.trim();
const sourceCode = document.querySelector("#source-code");
const resultFrame = document.querySelector("#result-frame");

const editor = document.createElement("div");
const lineNumbers = document.createElement("pre");
const sourceEditor = document.createElement("textarea");
const runButton = document.createElement("button");

editor.className = "editor";
lineNumbers.className = "line-numbers";
lineNumbers.setAttribute("aria-hidden", "true");
sourceEditor.className = "source-editor";
sourceEditor.value = source;
sourceEditor.spellcheck = false;
sourceEditor.setAttribute("aria-label", "可编辑的源代码");

editor.append(lineNumbers, sourceEditor);
sourceCode.replaceWith(editor);

function updateLineNumbers() {
  const count = sourceEditor.value.split("\n").length;
  lineNumbers.textContent = Array.from({ length: count }, (_, index) => index + 1).join("\n");
}

function runCode() {
  resultFrame.srcdoc = sourceEditor.value;
}

sourceEditor.addEventListener("input", updateLineNumbers);
sourceEditor.addEventListener("scroll", () => {
  lineNumbers.scrollTop = sourceEditor.scrollTop;
});

sourceEditor.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "Enter") {
    event.preventDefault();
    runCode();
  }
});

runButton.className = "run-button";
runButton.type = "button";
runButton.textContent = "▶ 运行";
runButton.addEventListener("click", runCode);
document.querySelector(".panel-head").lastElementChild.replaceWith(runButton);

updateLineNumbers();
runCode();
