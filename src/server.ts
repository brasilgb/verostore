import { app } from "./app";
require('dotenv').config();
const port = process.env.APP_NODE_PORT;

const server = app.listen(port, () =>
  console.log(`App rodando na porta ${port}`)
);

process.on("SIGINT", () => {
  server.close;
  console.log("App finalizado");
});
