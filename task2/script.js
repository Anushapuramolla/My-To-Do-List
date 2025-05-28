document.getElementById('contactForm').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const error = document.getElementById('formError');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !emailPattern.test(email)) {
    event.preventDefault();
    error.textContent = 'Please enter a valid name and email address.';
  } else {
    error.textContent = '';
  }
});

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  const error = document.getElementById("taskError");

  if (taskText === "") {
    error.textContent = "Task cannot be empty!";
    return;
  }

  error.textContent = "";
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "Remove";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
