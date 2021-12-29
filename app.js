const venom = require('venom-bot');
const banco = require('./src/banco')
const stages = require('./src/stages');



venom
  .create({
    session: 'session-name', //name of session
    multidevice: false
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });
function start(client) {
  client.onMessage((message) => {
    console.log(message)
    client.sendText(message.from, stages.step[getStage(message.from)].obj.execute)
  });
}



function getStage(user) {
  return banco.db[user].stage;
}

console.log(getStage('user1'))

console.log(stages.step[getStage('user1')].obj.execute())
console.log(stages.step[getStage('user2')].obj.execute())