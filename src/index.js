document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      const taskInput = document.getElementById("new-task-description").value;

      if (taskInput.trim() !== "") {
          const taskItem = document.createElement("li");
          taskItem.textContent = taskInput;

          const deleteButton = document.createElement("button");
          deleteButton.textContent = "X";
          deleteButton.style.marginLeft = "10px";

          deleteButton.addEventListener("click", function() {
              taskItem.remove();
          });

          taskItem.appendChild(deleteButton);
          taskList.appendChild(taskItem);

          form.reset();
      }
  });
});
