const scriptURL =
  "https://script.google.com/macros/s/AKfycbwZOOVC213eb14JuQDjHKr5Eu3WdyLdeWXNBn0Z3X1iP0gGPs6vwDd91pvxkLn8Z_4dsQ/exec";

const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Thanks for contacting me! I'll reach out to you!");
    })
    .catch((error) => console.error("Error!", error.message));
});
