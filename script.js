function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.onclick = () => li.classList.toggle("completed");
  
    const img = document.createElement("img");
    img.src = "unclicked.png"; // Replace with your circle image
    img.className = "icon";
  
    const span = document.createElement("span");
    span.textContent = taskText;
  
    li.appendChild(img);
    li.appendChild(span);
    document.getElementById("taskList").appendChild(li);
  
    input.value = "";
  }
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  // Toggle completed on click
  li.onclick = () => {
    li.classList.toggle("completed");
  };

  // Circle icon
  const img = document.createElement("img");
  img.src = "IMG/CHECKED.png";
  img.className = "icon";

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Cancel (delete) button
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "❌";
  cancelBtn.className = "cancel-btn";
  cancelBtn.onclick = (e) => {
    e.stopPropagation(); // prevent marking as completed
    li.remove();
  };

  li.appendChild(img);
  li.appendChild(span);
  li.appendChild(cancelBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
  