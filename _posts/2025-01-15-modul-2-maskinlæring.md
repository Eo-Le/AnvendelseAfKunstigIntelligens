---
layout: post
title:  "Modul 2: Maskinlæring"
date:   2025-01-15 21:51:00 +0000
categories: eksamen repetition
permalink: /modul-2-maskinlæring/
---

<h1><u>Repetition af modul 2: Maskinlæring.</u></h1>
<div id="containerForModul2QA">containerForModul2QA</div>
<div id="msgContainerForModul2QA" style="display:none;">msgContainerForModul2QA</div>

<p>
<button id="resetBtnForModul2QA" class="btn btn-primary">Start forfra</button> | 
<button id="shuffleBtnForModul2QA" class="btn btn-success">Randomiser spørgsmålene</button>
</p>



<!-- Inject JSON data into a JavaScript variable -->
<script>
  var modul02_QAData = {{ site.data["modul-02"] | jsonify }};
  initializeQuestionModule({
    questionContainerId: "containerForModul2QA",
    shuffleButtonId: "shuffleBtnForModul2QA",
    resetButtonId: "resetBtnForModul2QA",
    messageContainerId: "msgContainerForModul2QA",
    questionData: modul02_QAData
});




</script>

<!-- Include the script to handle the interactive functionality -->
<!-- the script is implemented in _includes/head.html -->
