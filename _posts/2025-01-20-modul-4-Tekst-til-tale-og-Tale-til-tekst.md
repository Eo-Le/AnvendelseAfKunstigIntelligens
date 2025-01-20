---
layout: post
title:  "Modul 4: Tekst-til-tale og Tale-til-tekst"
date:   2025-01-20 09:20 +0000
categories: eksamen repetition
permalink: /modul-4-Tekst-til-tale-og-Tale-til-tekst/
---

<h1><u>Repetition af {{ page.title }}</u></h1>
<div id="containerForModul4QA">containerForModul4QA</div>
<div id="msgContainerForModul4QA" style="display:none;">msgContainerForModul4QA</div>

<p>
<button id="resetBtnForModul4QA" class="btn btn-primary">Start forfra</button> | 
<button id="shuffleBtnForModul4QA" class="btn btn-success">Randomiser spørgsmålene</button>
</p>



<!-- Inject JSON data into a JavaScript variable -->
<script>
  var modul04_QAData = {{ site.data["modul-04"] | jsonify }};
  initializeQuestionModule({
    questionContainerId: "containerForModul4QA",
    shuffleButtonId: "shuffleBtnForModul4QA",
    resetButtonId: "resetBtnForModul4QA",
    messageContainerId: "msgContainerForModul4QA",
    questionData: modul04_QAData
});
</script>

<!-- Include the script to handle the interactive functionality -->
<!-- the script is implemented in _includes/head.html -->
