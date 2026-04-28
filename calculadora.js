function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
      return "Erro: Divisão por zero não permitida!";
  }
  return a / b;
}

function calcular() {

  let operacao = prompt("Escolha a operação (soma, subtracao, multiplicacao, divisao):").toLowerCase();
  let num1 = parseFloat(prompt("Digite o primeiro número:"));
  let num2 = parseFloat(prompt("Digite o segundo número:"));
 
  let resultado;

  switch(operacao) {
      case 'soma':
          resultado = somar(num1, num2);
          break;
      case 'subtracao':
          resultado = subtrair(num1, num2);
          break;
      case 'multiplicacao':
          resultado = multiplicar(num1, num2);
          break;
      case 'divisao':
          resultado = dividir(num1, num2);
          break;
      default:
          resultado = "Operação inválida!";
  }

  alert("Resultado: " + resultado);
}

calcular();