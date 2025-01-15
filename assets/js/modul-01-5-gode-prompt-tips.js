document.addEventListener("DOMContentLoaded", function() {
  console.log("loaded: assets/js/modul-01-5-gode-prompt-tips.js");

  // Check if modul01_5GodePromptTipsQAData is available globally
  if (typeof modul01_5GodePromptTipsQAData === "undefined" || !Array.isArray(modul01_5GodePromptTipsQAData) || modul01_5GodePromptTipsQAData.length === 0) {
      console.warn("modul01_5GodePromptTipsQAData is not available or empty. The script will not run.");
      return; // Exit early if modul01_5GodePromptTipsQAData is not available or is empty
  }

  console.log("Data available:", modul01_5GodePromptTipsQAData); // Log data

  const data = modul01_5GodePromptTipsQAData; // Use the injected data directly
  const container = document.getElementById("containerFor5GodePromptTips");

  if (!container) {
      console.error("Container for 5GodePromptTips not found!");
      return;
  } else {
      console.log("Container found:", container);
  }

  let currentQuestionIndex = 0;

  // Function to create the question card
  function createCard(questionData) {
      // Create the card element
      const card = document.createElement("div");
      card.classList.add("question-card");

      // Set the question HTML structure
      card.innerHTML = `
          <div class="question">
              <h3>${questionData.Question}</h3>
          </div>
          <div class="answer" style="display: none;">
              <p>${questionData.Answer.join("<br>")}</p>
          </div>
      `;

      console.log("Card HTML generated:", card.innerHTML); // Log the generated card HTML

      // Add the card to the container
      container.innerHTML = ''; // Clear previous cards
      container.appendChild(card); // Append the new card

      // Handle card click event
      card.addEventListener("click", function() {
          console.log("Card clicked!");

          const answer = card.querySelector(".answer");
          const question = card.querySelector(".question");

          // Toggle the visibility of the answer
          if (answer.style.display === "none") {
              console.log("Showing answer...");
              answer.style.display = "block";  // Show answer
              question.style.display = "none"; // Hide question
          } else {
              console.log("Hiding answer...");
              answer.style.display = "none";  // Hide answer
              question.style.display = "block"; // Show question again

              // After showing the answer, move to the next question
              currentQuestionIndex++;

              if (currentQuestionIndex < data.length) {
                  console.log("Displaying next question...");
                  createCard(data[currentQuestionIndex]); // Show next question
              } else {
                  console.log("Looping back to the first question...");
                  currentQuestionIndex = 0; // Loop back to the first question if at the end
                  createCard(data[currentQuestionIndex]); // Show first question again
              }
          }
      });
  }

  // Start by displaying the first question
  createCard(data[currentQuestionIndex]);
});