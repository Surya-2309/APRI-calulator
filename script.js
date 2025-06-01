function calculateAPRI() {
  const ast = parseFloat(document.getElementById("ast").value);
  const platelet = parseFloat(document.getElementById("platelet").value);
  const uln = parseFloat(document.getElementById("uln").value);

  if (isNaN(ast) || isNaN(platelet) || isNaN(uln) || platelet === 0 || uln === 0) {
    alert("Please fill in all fields correctly.");
    return;
  }

  const apri = ((ast / uln) / platelet) * 100;

  let interpretation = "";
  if (apri < 0.5) {
    interpretation = "Low likelihood of significant fibrosis.";
  } else if (apri >= 0.5 && apri < 1.5) {
    interpretation = "Possible fibrosis – further evaluation recommended.";
  } else {
    interpretation = "High likelihood of significant fibrosis or cirrhosis.";
  }

  document.getElementById("result").innerText = 
    `APRI Score: ${apri.toFixed(2)}\n${interpretation}`;
}
