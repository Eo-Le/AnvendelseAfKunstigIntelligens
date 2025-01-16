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

    // Shuffle function
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Function to create the question card
    function createCard(QA, QAData) {
        const card = document.createElement("div");
        card.classList.add("question-card");
        card.innerHTML = `
            <div class="question">
                <h3><u>${QA.Question}</u></h3>
            </div>
            <div class="answer" style="display: none;">
                <h3><u>${QA.Question}</u></h3>
                <p>${QA.Answer.join("<br>")}</p>
            </div>
            <div class="card-counter">
                ${currentQuestionIndex + 1}/${QAData.length}
            </div>
        `;

        container.innerHTML = ""; // Clear previous cards
        container.appendChild(card); // Append the new card

        card.addEventListener("click", function () {
            const answer = card.querySelector(".answer");
            const questionElement = card.querySelector(".question");

            if (answer.style.display === "none") {
                answer.style.display = "block";
                questionElement.style.display = "none";
            } else {
                answer.style.display = "none";
                questionElement.style.display = "block";

                currentQuestionIndex++;

                if (currentQuestionIndex < questionData.length) {
                    createCard(QAData[currentQuestionIndex], QAData);
                } else {
                    currentQuestionIndex = 0;
                    showFinalMessage();
                }
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
        questionDataShuffled = questionData.slice();
        shuffleArray(questionDataShuffled);
        currentQuestionIndex = 0; // Reset index to start from the first question
        createCard(questionDataShuffled[currentQuestionIndex], questionDataShuffled);
        messageContainer.style.display = "none";
        shuffleButton.disabled = true;
        resetButton.disabled = false;
    });

    // Event listener for the reset button
    resetButton.addEventListener("click", function () {
        console.log("Restarting questions in original order...");
        currentQuestionIndex = 0; // Reset index to start from the first question
        createCard(questionData[currentQuestionIndex], questionData);
        messageContainer.style.display = "none";
        shuffleButton.disabled = false;
        resetButton.disabled = true;
    });

    // Start by displaying the first question
    createCard(questionData[currentQuestionIndex], questionData);
}
