import { createTestingServer } from "../src/server/index.js";

const server = createTestingServer();

server.listen(3000, "127.0.0.1", function () {
  console.log("Listening on http://127.0.0.1:3000/");
});
