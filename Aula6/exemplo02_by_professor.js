const prepararSuco = (sabor) => {
  return new Promise((resolve) => {
    // Cada suco demora 1.5 segundos para ser batido
    setTimeout(() => {
      console.log(`🥤 Suco de ${sabor} finalizado!`);
      resolve(`Suco de ${sabor}`);
    }, 1500);
  });
};

const inicio = Date.now(); // Marca o tempo de início

console.log("⏳ Iniciando o preparo dos 3 sucos ao mesmo tempo...");

// Criamos um array de promessas
const pedidos = [
  prepararSuco("Laranja"),
  prepararSuco("Limão"),
  prepararSuco("Morango")
];

// O Promise.all espera TODAS serem resolvidas
Promise.all(pedidos)
  .then((sucosProntos) => {
    const fim = Date.now();
    const tempoTotal = (fim - inicio) / 1000; // Converte ms para segundos

    console.log("--- PEDIDO COMPLETO ---");
    console.log(`✅ Entregando: ${sucosProntos.join(", ")}`);
    console.log(`⏱️ Tempo total de espera: ${tempoTotal} segundos.`);
  })
  .catch((erro) => {
    console.error("❌ Ops, a centrífuga quebrou:", erro);
  });