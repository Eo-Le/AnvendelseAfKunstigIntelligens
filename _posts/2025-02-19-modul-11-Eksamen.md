---
layout: post
title:  "Modul 11: Eksamen"
date:   2025-02-11 15:30 +0000
categories: eksamen repetition
permalink: /modul-11-Eksamen/
---

<h1><u>Repetition af {{ page.title }}</u></h1>
<div id="containerForModul11QA">containerForModul11QA</div>
<div id="msgContainerForModul11QA" style="display:none;">msgContainerForModul11QA</div>

<p>
<button id="resetBtnForModul11QA" class="btn btn-primary">Start forfra</button> | 
<button id="shuffleBtnForModul11QA" class="btn btn-success">Randomiser spørgsmålene</button>
</p>


<h1 class="mt-5"><u>Min præsentation til eksamen</u></h1>
<div id="containerForModul11QA_Exam_Presentation">containerForModul11QA_Exam_Presentation</div>
<div id="msgContainerForModul11QA_Exam_Presentation" style="display:none;">msgContainerForModul11QA_Exam_Presentation</div>

<p>
<button id="resetBtnForModul11QA_Exam_Presentation" class="btn btn-primary">Start forfra</button> | 
<button id="shuffleBtnForModul11QA_Exam_Presentation" class="btn btn-success">Randomiser spørgsmålene</button>
</p>


<!-- Inject JSON data into a JavaScript variable -->
<script>
  var modul11_QAData = {{ site.data["modul-11"] | jsonify }};
  initializeQuestionModule({
    questionContainerId: "containerForModul11QA",
    shuffleButtonId: "shuffleBtnForModul11QA",
    resetButtonId: "resetBtnForModul11QA",
    messageContainerId: "msgContainerForModul11QA",
    questionData: modul11_QAData
  });

  var modul11_QAData_Exam_Presentation = {{ site.data["modul-11-exam-presentation"] | jsonify }};
  initializeQuestionModule({
    questionContainerId: "containerForModul11QA_Exam_Presentation",
    shuffleButtonId: "shuffleBtnForModul11QA_Exam_Presentation",
    resetButtonId: "resetBtnForModul11QA_Exam_Presentation",
    messageContainerId: "msgContainerForModul11QA_Exam_Presentation",
    questionData: modul11_QAData_Exam_Presentation
  });

</script>

<!-- Include the script to handle the interactive functionality -->
<!-- the script is implemented in _includes/head.html -->
