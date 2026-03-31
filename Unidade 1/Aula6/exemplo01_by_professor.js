// Funções que retornam Promises
const fazerPedido = (lanche) => {
  return new Promise((resolve, reject) => {
    console.log(`[1] Registrando pedido de ${lanche}...`);
    setTimeout(() => resolve(lanche), 1000);
  });
};

const prepararLanche = (lanche) => {
  return new Promise((resolve, reject) => {
    console.log(`[2] Preparando o ${lanche}...`);
    // Simulando um erro: se for "X-Salada", acabou a alface!
    if (lanche === "X-Salada") {
      return reject(new Error("Acabou a alface para o X-Salada!"));
    }
    setTimeout(() => resolve(lanche), 2000);
  });
};

const entregarLanche = (lanche) => {
  return new Promise((resolve) => {
    console.log(`[3] Entregando o ${lanche}. Bom apetite!`);
    setTimeout(() => resolve(true), 1000);
  });
};

// --- O FLUXO LINEAR (Adeus Callback Hell!) ---
// Exemplo com sucesso
fazerPedido("X-Bacon")
  .then(lanche => prepararLanche(lanche))
  .then(lanchePronto => entregarLanche(lanchePronto))
  .then(() => console.log("Processo concluído com sucesso!"))
  .catch(erro => console.error("❌ Ocorreu um problema no pedido:", erro.message));

// Exemplo com error
fazerPedido("X-Salada")
  .then(lanche => prepararLanche(lanche))
  .then(lanchePronto => entregarLanche(lanchePronto))
  .then(() => console.log("Processo concluído com sucesso!"))
  .catch(erro => console.error("❌ Ocorreu um problema no pedido:", erro.message));