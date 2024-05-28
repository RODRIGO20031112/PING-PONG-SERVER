## PING PONG SERVER

# NÃO COMERCIALIZE ESTE SOFTWARE

A utilização em massa do software Ping Pong Server é proibída por lei, ele visa estabelecer duas conexões, um fixa que dispara rotineiramente uma requisição para o endpoint indicado na URL dentro do .env e outra estabelecida dentro do software desenvolvido pelo cliente

# Utilização:

```sh
npm install
```

```
node index.js
```

# Configure o cliente (seu servidor):

```js
const makeRequest = () => {
  setTimeout(() => {
    axios
      .get(process.env.URL_STANDUP_SERV) // http://127.0.0.1:8080/standup/webhook/pong
      .then((response) => {
        console.log("The adjacent answer is:", response.data);
      })
      .catch((error) => {
        console.error("[ERROR] Resuming connection:", error.code);

        setTimeout(() => {
          makeRequest();
        }, 1000);
      });
  }, 1000);
};

app.get("/standup/webhook/pong", (req, res) => {
  makeRequest();
  res.send("Stand up server says ping");
});

setInterval(makeRequest, 10000);
```

# Adicione o arquivo .env na raiz do projeto com o seguinte conteúdo:

```
URL_STANDUP_SERV=http://127.0.0.1:8080/standup/webhook/pong
```

Isenção de responsabilidade, você pode fazer um fork deste repositório e implementá-lo no render ou em outro serviço gratuito, lembre-se que a conexão ficará reativando infinitamente, afim de que o servidor não entre em Stand By e você economize seus preciosos 7 dólares mensais...

https://github.com/RODRIGO20031112/PING-PONG-SERVER/assets/105398999/5dd50cd3-df24-4d83-95fe-b3a26b17de04
