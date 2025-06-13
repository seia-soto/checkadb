import { createTestingServer } from "../src/server/index.js";

const server = createTestingServer();

server.listen(3000, "localhost", function () {
  console.log("Listening on http://localhost:3000/");
});
