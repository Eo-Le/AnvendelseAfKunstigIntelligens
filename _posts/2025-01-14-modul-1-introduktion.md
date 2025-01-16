---
layout: post
title:  "Modul 1: Introduktion"
date:   2025-01-14 10:27:00 +0000
categories: eksamen repetition
permalink: /modul-1-introduktion/
---

<h1><u>Repetition af modul 1: Introduktion</u></h1>
<div id="containerForModul1QA">containerForModul1QA</div>
<div id="msgContainerForModul1QA" style="display:none;">msgContainerForModul1QA</div>

<p>
<button id="resetBtnForModul1QA" class="btn btn-primary">Start forfra</button> | 
<button id="shuffleBtnForModul1QA" class="btn btn-success">Randomiser spørgsmålene</button>
</p>


<h1 class="mt-5"><u>5 gode tips for prompting</u></h1>
<div id="containerForModul1_5tips_QA">containerForModul1_5tips_QA</div>
<div id="msgContainerForModul1_5tips_QA" style="display:none;">msgContainerForModul1_5tips_QA</div>

<p>
<button id="resetBtnForModul1_5tips_QA" class="btn btn-primary">Start forfra</button> | 
<button id="shuffleBtnForModul1_5tips_QA" class="btn btn-success">Randomiser spørgsmålene</button>
</p>



<!-- Inject JSON data into a JavaScript variable -->
<script>
  var modul01_QAData = {{ site.data["modul-01"] | jsonify }};
  initializeQuestionModule({
    questionContainerId: "containerForModul1QA",
    shuffleButtonId: "shuffleBtnForModul1QA",
    resetButtonId: "resetBtnForModul1QA",
    messageContainerId: "msgContainerForModul1QA",
    questionData: modul01_QAData
  });

  var modul01_5tips_QAData = {{ site.data["modul-01-5-gode-prompt-tips"] | jsonify }};
  initializeQuestionModule({
    questionContainerId: "containerForModul1_5tips_QA",
    shuffleButtonId: "shuffleBtnForModul1_5tips_QA",
    resetButtonId: "resetBtnForModul1_5tips_QA",
    messageContainerId: "msgContainerForModul1_5tips_QA",
    questionData: modul01_5tips_QAData
  });
</script>
