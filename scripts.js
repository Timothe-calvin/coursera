// Add new recommendation dynamically
document.getElementById("recommendationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("recommendationInput").value;
  if (input.trim() !== "") {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.textContent = `"${input}"`;
    document.getElementById("recommendationList").appendChild(newCard);

    // Confirmation popup
    alert("Thank you for your recommendation!");
    document.getElementById("recommendationForm").reset();
  }
});
