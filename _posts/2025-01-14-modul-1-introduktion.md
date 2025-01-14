---
layout: post
title:  "Modul 1: Introduktion"
date:   2025-01-14 10:27:00 +0000
categories: eksamen repetition
permalink: /modul-1-introduktion/
---

I alt {{ site.data.modul-01 | size }} spørgsmål.
<h1>Repetition af modul 1: Introduktion.</h1>
<div id="questions-container"></div>

<div id="message-container" style="display:none;"></div>

<!-- Tilføj denne knap et sted på din HTML-side -->
<button id="shuffle-answers" class="shuffle-button">Randomiser spørgsmålene</button>


<!-- Inject JSON data into a JavaScript variable -->
<script>
  var questionData = {{ site.data["modul-01"] | jsonify }};
</script>

<!-- Include the script to handle the interactive functionality -->
<!-- <script src="{{ '/assets/js/all.js' | relative_url }}"></script> -->