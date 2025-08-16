document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("recommendationForm");
  const input = document.getElementById("recommendationInput");
  const list = document.getElementById("recommendationList");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    const text = input.value.trim();
    if (text !== "") {
      // create new recommendation card
      const newRec = document.createElement("div");
      newRec.classList.add("card");
      newRec.textContent = `"${text}"`;

      // add to list
      list.appendChild(newRec);

      // clear input
      input.value = "";

      // popup confirmation
      alert("✅ Thank you! Your recommendation has been submitted.");
    } else {
      alert("⚠️ Please enter a recommendation before submitting.");
    }
  });
});

