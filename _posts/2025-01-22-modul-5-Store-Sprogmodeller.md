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


<h1 class="mt-5"><u>Prompting techniques</u></h1>
<div id="containerForModul5-prompting-techniques-QA">containerForModul5-prompting-techniques-QA</div>
<div id="msgContainerForModul5-prompting-techniques-QA" style="display:none;">msgContainerForModul5-prompting-techniques-QA</div>

<p>
<button id="resetBtnForModul5-prompting-techniques-QA" class="btn btn-primary">Start forfra</button> | 
<button id="shuffleBtnForModul5-prompting-techniques-QA" class="btn btn-success">Randomiser spørgsmålene</button>
</p>


<h1 class="mt-5"><u>Sprogmodeller på din egen computer</u></h1>
<div id="containerForModul5-LM-on-local-machine-QA">containerForModul5-LM-on-local-machine-QA</div>
<div id="msgContainerForModul5-LM-on-local-machine-QA" style="display:none;">msgContainerForModul5-LM-on-local-machine-QA</div>

<p>
<button id="resetBtnForModul5-LM-on-local-machine-QA" class="btn btn-primary">Start forfra</button> | 
<button id="shuffleBtnForModul5-LM-on-local-machine-QA" class="btn btn-success">Randomiser spørgsmålene</button>
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

  var modul05_Prompting_techniques_QAData = {{ site.data["modul-05-prompting-techniques"] | jsonify }};
  initializeQuestionModule({
    questionContainerId: "containerForModul5-prompting-techniques-QA",
    shuffleButtonId: "shuffleBtnForModul5-prompting-techniques-QA",
    resetButtonId: "resetBtnForModul5-prompting-techniques-QA",
    messageContainerId: "msgContainerForModul5-prompting-techniques-QA",
    questionData: modul05_Prompting_techniques_QAData
  });

  var modul05_LM_on_local_machine_QAData = {{ site.data["modul-05-LM-on-local-machine"] | jsonify }};
  initializeQuestionModule({
    questionContainerId: "containerForModul5-LM-on-local-machine-QA",
    shuffleButtonId: "shuffleBtnForModul5-LM-on-local-machine-QA",
    resetButtonId: "resetBtnForModul5-LM-on-local-machine-QA",
    messageContainerId: "msgContainerForModul5-LM-on-local-machine-QA",
    questionData: modul05_LM_on_local_machine_QAData
  });
</script>

<!-- Include the script to handle the interactive functionality -->
<!-- the script is implemented in _includes/head.html -->
