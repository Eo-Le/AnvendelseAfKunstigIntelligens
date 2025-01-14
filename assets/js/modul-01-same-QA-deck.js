document.addEventListener("DOMContentLoaded", function() {
    console.log("loaded: assets/js/modul-01-same-QA-deck.js");

    // Check if questionData is available globally
    if (typeof questionData === "undefined" || !Array.isArray(questionData) || questionData.length === 0) {
        console.warn("questionData is not available or empty. The script will not run.");
        return; // Exit early if questionData is not available or is empty
      }
    
      // Your existing code logic that operates on questionData
      console.log("questionData is available. Proceeding with script...");

    const data = questionData; // Use the injected data directly
  
    // Shuffle the questions (not the answers)
    function shuffleQuestions(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    const container = document.getElementById("questions-container");
    const shuffleButton = document.getElementById("shuffle-answers"); // The shuffle button
    const messageContainer = document.getElementById("message-container"); // Message container
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
            showFinalMessage(); // Show the final message after all questions are shown
          }
        }
      });
    }
  
    // Function to show the final message after all questions have been shown
    function showFinalMessage() {
      // Clear the container of any remaining questions/cards
      container.innerHTML = ''; 
  
      // Show the final message
      messageContainer.innerHTML = `
        <p>Tryk på randomiseringsknappen for at prøve igen!</p>
      `;
      messageContainer.style.display = "block"; // Ensure the message is visible
  
      // Enable the shuffle button to allow the user to restart
      shuffleButton.disabled = false;
    }
  
    // Add event listener to the shuffle button
    shuffleButton.addEventListener("click", function() {
      // Randomize only the questions (not the answers)
      console.log("Rækkefølge af spørgsmål før shuffle:");
      console.log(data.map(q => q.Question));  // Log the current order of questions before shuffle
  
      // Shuffle the entire data array (questions only, not answers)
      shuffleQuestions(data);
      
      console.log("Rækkefølge af spørgsmål efter shuffle:");
      console.log(data.map(q => q.Question));  // Log the order of questions after shuffle
  
      // Create the first card
      createCard(data[currentQuestionIndex]);
  
      // Hide the final message and reset the button
      messageContainer.style.display = "none";  // Hide the final message
      shuffleButton.disabled = true;  // Disable the button temporarily
      currentQuestionIndex = 0;  // Reset the question index
    });
  
    // Start by displaying the first shuffled question
    createCard(data[currentQuestionIndex]);
  });
  