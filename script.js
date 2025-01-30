handsymbole = ["✊", "✋", "✌️"];
let userScore = 0;
function startRecognition() {
//   return handsymbole[userScore];
  userScore++;
  document.getElementById('result').innerText = handsymbole[userScore];
}