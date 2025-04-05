function calculate() {
    let A = parseInt(document.getElementById("a").value);
    let B = parseInt(document.getElementById("b").value);
    let gate = document.getElementById("gate").value;
  
    if ((A !== 0 && A !== 1) || (B !== 0 && B !== 1)) {
      alert("Only 0 or 1 allowed!");
      return;
    }
  
    let output;
    switch (gate) {
      case "AND": output = A & B; break;
      case "OR": output = A | B; break;
      case "NOT A": output = A ^ 1; break;
      case "NOT B": output = B ^ 1; break;
      case "NAND": output = (A & B) ^ 1; break;
      case "NOR": output = (A | B) ^ 1; break;
      case "XOR": output = A ^ B; break;
      case "XNOR": output = (A ^ B) ^ 1; break;
      default: output = "Invalid Gate";
    }
  
    document.getElementById("result").innerText = `${gate} Output = ${output}`;
  }
  