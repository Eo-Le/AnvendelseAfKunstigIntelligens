console.log("loaded: assets/js/QA-same-card-deck.js");
function initializeQuestionModule({
    questionContainerId,
    shuffleButtonId,
    resetButtonId,
    messageContainerId,
    questionData
}) {
    console.log("Initializing the function initializeQuestionModule");

    // Validate arguments
    if (typeof questionContainerId !== "string" || !document.getElementById(questionContainerId)) {
        console.error(`Invalid or missing questionContainerId: ${questionContainerId}. The module will not run.`);
        return;
    }
    if (typeof shuffleButtonId !== "string" || !document.getElementById(shuffleButtonId)) {
        console.error(`Invalid or missing shuffleButtonId: ${shuffleButtonId}. The module will not run.`);
        return;
    }
    if (typeof resetButtonId !== "string" || !document.getElementById(resetButtonId)) {
        console.error(`Invalid or missing resetButtonId: ${resetButtonId}. The module will not run.`);
        return;
    }
    if (typeof messageContainerId !== "string" || !document.getElementById(messageContainerId)) {
        console.error(`Invalid or missing messageContainerId: ${messageContainerId}. The module will not run.`);
        return;
    }
    if (!Array.isArray(questionData) || questionData.length === 0) {
        console.warn(`Invalid or empty questionData: ${questionData}. The module will not run.`);
        return;
    }

    const container = document.getElementById(questionContainerId);
    const shuffleButton = document.getElementById(shuffleButtonId);
    const resetButton = document.getElementById(resetButtonId);
    const messageContainer = document.getElementById(messageContainerId);
    let currentQuestionIndex = 0;
    let isAnswerVisible = false; // Tracks if the current card is showing an answer

    // Shuffle function
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Function to create the question card
    function createCard(QAData) {
        const QA = QAData[currentQuestionIndex];
        const card = document.createElement("div");
        card.classList.add("question-card");
        card.innerHTML = `
            <div class="question" style="display: ${isAnswerVisible ? "none" : "block"};">
                <h3><u>${QA.Question}</u></h3>
            </div>
            <div class="answer" style="display: ${isAnswerVisible ? "block" : "none"};">
                <h3><u>${QA.Question}</u></h3>
                <p>${QA.Answer.join("<br>")}</p>
            </div>
            
            <div class="card-back">
                <i class="bi bi-arrow-left"></i>
            </div>
            <div class="card-counter">
                ${currentQuestionIndex + 1}/${QAData.length}
            </div>
        `;

        container.innerHTML = ""; // Clear previous cards
        container.appendChild(card); // Append the new card

        // Add click listener to the "Tilbage" button and its child <i> element
        const backButton = card.querySelector(".card-back");
        backButton.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent event from bubbling to the card click listener
            if (isAnswerVisible) {
                isAnswerVisible = false; // Switch to question
            } else if (currentQuestionIndex > 0) {
                currentQuestionIndex--; // Move to the previous card
                isAnswerVisible = true; // Show the answer for the previous card
            }
            createCard(QAData); // Re-render the card
        });

        // Add click listener to the main card to flip and move forward
        card.addEventListener("click", function (event) {
            if (event.target.closest(".card-back")) {
                return; // Ignore clicks on the "Tilbage" button
            }

            if (isAnswerVisible) {
                // If currently showing the answer, move to the next question
                currentQuestionIndex++;
                if (currentQuestionIndex < QAData.length) {
                    isAnswerVisible = false; // Show the question for the next card
                    createCard(QAData);
                } else {
                    // If no more questions, show final message
                    showFinalMessage();
                }
            } else {
                // If currently showing the question, flip to show the answer
                isAnswerVisible = true;
                createCard(QAData);
            }
        });
    }

    // Function to show the final message
    function showFinalMessage() {
        container.innerHTML = "";
        messageContainer.innerHTML = `
            <p>Tryk på en af knapperne for at prøve igen!</p>
        `;
        messageContainer.style.display = "block";
        shuffleButton.disabled = false;
        resetButton.disabled = false;
    }

    // Event listener for the shuffle button
    shuffleButton.addEventListener("click", function () {
        console.log("Shuffling questions...");
        const questionDataShuffled = questionData.slice();
        shuffleArray(questionDataShuffled);
        currentQuestionIndex = 0; // Reset index to start from the first question
        isAnswerVisible = false; // Start with the question
        createCard(questionDataShuffled); // Re-render with shuffled data
        messageContainer.style.display = "none";
        shuffleButton.disabled = true;
        resetButton.disabled = false;
    });

    // Event listener for the reset button
    resetButton.addEventListener("click", function () {
        console.log("Restarting questions in original order...");
        currentQuestionIndex = 0; // Reset index to start from the first question
        isAnswerVisible = false; // Start with the question
        createCard(questionData); // Re-render with original order
        messageContainer.style.display = "none";
        shuffleButton.disabled = false;
        resetButton.disabled = true;
    });

    // Start by displaying the first question
    createCard(questionData);
}
