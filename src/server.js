import http from "node:http";

const server = http.createServer((req, res) => {
  return res.end("Hello Wolrd")
})

server.listen(3333);