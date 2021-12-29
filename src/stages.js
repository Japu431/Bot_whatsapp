var stages = {
    0: {
      description: "Boas vindas",
      obj: require('./stages/0')
    },
    1: {
      description: "Vendas",
      obj: require('./stages/1')
    },
    2: {
      description: "Resumo",
      obj: require('./stages/2')
    },
    3: {
      description: "Endereço",
      obj: require('./stages/3')
    },
    4: {
      description: "Encerramento",
      obj: require('./stages/4')
    },
    5: {
      description: "Forma de Pagamento",
      obj: require('./stages/5')
    }
  }

module.exports.step = stages;
  