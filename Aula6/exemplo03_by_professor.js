/**
 * Versão Moderna: Retorna uma Promise em vez de aceitar uma callback.
 * @param {number} id 
 * @returns {Promise}
 */
function buscarUsuario(id) {
  // Retornamos a promessa imediatamente
  return new Promise((resolve, reject) => {
    console.log(`🔎 Iniciando busca do usuário ${id}...`);

    setTimeout(() => {
      // Regra de Erro
      if (id < 0) {
        // O reject "dispara" o .catch()
        return reject(new Error("O ID não pode ser negativo."));
      }

      // Sucesso
      const usuario = {
        id: id,
        nome: "Admin",
        email: "admin@sistema.com"
      };

      // O resolve "dispara" o .then()
      resolve(usuario);
    }, 2000);
  });
}

buscarUsuario(1)
    .then((u) => console.log(u))
    .catch((e) => console.log(e))