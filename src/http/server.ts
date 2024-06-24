import fastify from "fastify";

import { createContest } from "./routes/create-contest";

const app = fastify()

app.register(createContest)

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!")
})