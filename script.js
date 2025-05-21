// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill out all fields.";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Message sent successfully!";
});

// TO-DO LIST
function addTask() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Optional: Remove task on click
  li.addEventListener("click", () => {
    li.remove();
  });

  document.getElementById("todoList").appendChild(li);
  input.value = "";
}
