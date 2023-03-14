const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect
  .create()
  .then((client) => start(client))
  .catch((error) => console.log(error));

  function start(client) {
    client.onMessage((message) => {
      console.log(message)
      console.log(message.body)
    });
  }