document.addEventListener("DOMContentLoaded", function() {
    console.log("loaded: assets/js/modul-01-5-gode-tips.js");

    // Check if QA-Data-modul-01-5-gode-prompt-tips is available globally
    if (typeof QA-Data-modul-01-5-gode-prompt-tips === "undefined" || !Array.isArray(QA-Data-modul-01-5-gode-prompt-tips) || QA-Data-modul-01-5-gode-prompt-tips.length === 0) {
        console.warn("QA-Data-modul-01-5-gode-prompt-tips is not available or empty. The script will not run.");
        return; // Exit early if QA-Data-modul-01-5-gode-prompt-tips is not available or is empty
      }
    
      // Your existing code logic that operates on QA-Data-modul-01-5-gode-prompt-tips
      console.log("QA-Data-modul-01-5-gode-prompt-tips is available. Proceeding with script...");

    const data = QA-Data-modul-01-5-gode-prompt-tips; // Use the injected data directly
  
    // Shuffle the questions (not the answers)
    function shuffleQuestions(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    const container = document.getElementById("containerFor5GodePromptTips");
    // const shuffleButton = document.getElementById("shuffle-answers"); // The shuffle button
    // const messageContainer = document.getElementById("message-container"); // Message container
    let currentQuestionIndex = 0;
  
    // Function to create the question card
    function createCard(QA-Data-modul-01-5-gode-prompt-tips) {
      // Create the card element
      const card = document.createElement("div");
      card.classList.add("question-card");
      
      // Set the question HTML structure
      card.innerHTML = `
        <div class="question">
          <h3>${QA-Data-modul-01-5-gode-prompt-tips.Question}</h3>
        </div>
        <div class="answer" style="display: none;">
          <p>${QA-Data-modul-01-5-gode-prompt-tips.Answer.join("<br>")}</p>
        </div>
      `;
  
      // Add the card to the container
      container.innerHTML = ''; // Clear previous cards
      container.appendChild(card); // Append the new card
  
      // Handle card click event
      card.addEventListener("click", function() {
        const answer = card.querySelector(".answer");
        const question = card.querySelector(".question");
  
        // Toggle the visibility of the answer
        if (answer.style.display === "none") {
          answer.style.display = "block";  // Show answer
          question.style.display = "none"; // Hide question
        } else {
          answer.style.display = "none";  // Hide answer
          question.style.display = "block"; // Show question again
  
          // After showing the answer, move to the next question
          currentQuestionIndex++;

          if (currentQuestionIndex < data.length) {
            createCard(data[currentQuestionIndex]); // Show next question
          } else {
            currentQuestionIndex = 0; // Loop back to the first question if at the end
            // showFinalMessage(); // Show the final message after all questions are shown
          }
        }
      });
    }
  
    // Start by displaying the first shuffled question
    createCard(data[currentQuestionIndex]);
  });
  
