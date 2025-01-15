---
layout: post
title:  "Modul 2: Maskinlæring"
date:   2025-01-15 21:51:00 +0000
categories: eksamen repetition
permalink: /modul-2-maskinlæring/
---

I alt {{ site.data.modul-02 | size }} spørgsmål.
<h1><u>Repetition af modul 2: Maskinlæring.</u></h1>
<div id="containerForModul2QA">containerForModul2QA</div>

<div id="msgContainerForModul2QA" style="display:none;"></div>

<!-- Tilføj denne knap et sted på din HTML-side -->
<button id="btnForModul2QA" class="shuffle-button">Randomiser spørgsmålene</button>



<!-- Inject JSON data into a JavaScript variable -->
<script>
  var modul02_QAData = {{ site.data["modul-02"] | jsonify }};
</script>

<!-- Include the script to handle the interactive functionality -->
<!-- the script is implemented in _includes/head.html -->
