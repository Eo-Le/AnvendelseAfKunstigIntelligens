---
layout: post
title:  "Modul 3: Billedegenkendelse og -analyse"
date:   2025-01-17 10:15 +0000
categories: eksamen repetition
permalink: /modul-3-billedegenkedelse-og-analyse/
---

<h1><u>Repetition af {{ page.title }}</u></h1>
<div id="containerForModul3QA">containerForModul3QA</div>
<div id="msgContainerForModul3QA" style="display:none;">msgContainerForModul3QA</div>

<p>
<button id="resetBtnForModul3QA" class="btn btn-primary">Start forfra</button> | 
<button id="shuffleBtnForModul3QA" class="btn btn-success">Randomiser spørgsmålene</button>
</p>



<!-- Inject JSON data into a JavaScript variable -->
<script>
  var modul03_QAData = {{ site.data["modul-03"] | jsonify }};
  initializeQuestionModule({
    questionContainerId: "containerForModul3QA",
    shuffleButtonId: "shuffleBtnForModul3QA",
    resetButtonId: "resetBtnForModul3QA",
    messageContainerId: "msgContainerForModul3QA",
    questionData: modul03_QAData
});
</script>

<!-- Include the script to handle the interactive functionality -->
<!-- the script is implemented in _includes/head.html -->
