---
layout: post
title:  "Modul 5: Store sprogmodeller"
date:   2025-01-22 09:45 +0000
categories: eksamen repetition
permalink: /modul-5-Store-sprogmodeller/
---

<h1><u>Repetition af {{ page.title }}</u></h1>
<div id="containerForModul5Q4">containerForModul5Q4</div>
<div id="msgContainerForModul5Q4" style="display:none;">msgContainerForModul5Q4</div>

<p>
<button id="resetBtnForModul5Q4" class="btn btn-primary">Start forfra</button> | 
<button id="shuffleBtnForModul5Q4" class="btn btn-success">Randomiser spørgsmålene</button>
</p>


<!-- Inject JSON data into a JavaScript variable -->
<script>
  var modul05_QAData = {{ site.data["modul-05"] | jsonify }};
  initializeQuestionModule({
    questionContainerId: "containerForModul5Q4",
    shuffleButtonId: "shuffleBtnForModul5Q4",
    resetButtonId: "resetBtnForModul5Q4",
    messageContainerId: "msgContainerForModul5Q4",
    questionData: modul05_QAData
  });
</script>

<!-- Include the script to handle the interactive functionality -->
<!-- the script is implemented in _includes/head.html -->
