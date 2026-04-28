// Função para solicitar e somar 5 números
function somarNumeros() {
  let soma = 0;  // Variável para armazenar a soma

  // Loop para pegar 5 números do usuário
  for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt(`Informe o ${i}º número:`)); // Solicita o número
    soma += numero;  // Adiciona o número à soma
  }

  // Exibe a soma final
  alert(`A soma dos números informados é: ${soma}`);
}

// Chama a função para rodar o programa
somarNumeros();