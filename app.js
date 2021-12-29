const venom = require('venom-bot');
const estagioZero = require('./stages/0');
const estagioUm = require('./stages/1.js')
const estagioDois = require('./stages/2.js')
const estagioTres = require('./stages/3.js')
const estagioQuatro = require('./stages/4.js')
const estagioCinco = require('./stages/5.js')

venom
  .create({
    session: 'session-name', //name of session
    multidevice: false
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });


var datas = {
  user1: {
    stage: 0
  },
  user2: {
    stage: 0
  }
};


function getStage(user) {
  return datas[user].stage;
}

var stages = {
  0: {
    description: "Boas vindas",
    obj: estagioZero,
  },
  1: {
    description: "Vendas",
    obj: estagioUm,
  },
  2: {
    description: "Resumo",
    obj: estagioDois,
  },
  3: {
    description: "Endereço",
    obj: estagioTres,
  },
  4: {
    description: "Encerramento",
    obj: estagioQuatro,
  },
  4: {
    description: "Forma de Pagamento",
    obj: estagioCinco,
  }
}

console.log(getStage('user1'))

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Welcome Venom 🕷')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}