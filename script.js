let points = 0;
let level = 1;

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const difficulty = document.getElementById("difficulty").value;
  const taskList = document.getElementById("taskList");

  if (taskInput.value === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value + " (+ " + difficulty + " pts)";
  
  li.onclick = function() {
    points += parseInt(difficulty);
    updateLevel();
    li.remove();
  };

  taskList.appendChild(li);
  taskInput.value = "";
}

function updateLevel() {
  if (points >= level * 100) {
    level++;
  }

  document.getElementById("points").textContent = points;
  document.getElementById("level").textContent = level;
}
