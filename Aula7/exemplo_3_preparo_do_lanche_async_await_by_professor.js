// Funções da Aula 06 (Mantêm-se iguais, retornando Promises)
const fazerPedido = (lanche) => new Promise(res => setTimeout(() => res(lanche), 1000));
const prepararLanche = (lanche) => new Promise(res => setTimeout(() => res(`${lanche} Quentinho`), 2000));
const entregarLanche = (lanche) => new Promise(res => setTimeout(() => res(true), 1000));

// --- A MAGIA DO ASYNC/AWAIT ---

async function fluxoLanchonete(nomeDoLanche) {
  try {
    console.log("=== INICIANDO ATENDIMENTO ===");
    
    // O código "espera" aqui, mas o Node continua livre
    const pedido = await fazerPedido(nomeDoLanche);
    console.log(`[OK] Pedido de ${pedido} registrado.`);

    const lanchePronto = await prepararLanche(pedido);
    console.log(`[OK] ${lanchePronto} saindo da chapa.`);

    const entregue = await entregarLanche(lanchePronto);
    
    if (entregue) {
      console.log("=== CLIENTE SATISFEITO! ✅ ===");
    }
  } catch (erro) {
    console.error("❌ Tivemos um problema no balcão:", erro.message);
  } finally {
    console.log("Log: Atendimento finalizado.");
  }
}

fluxoLanchonete("X-Egg");