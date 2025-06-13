import * as http from "node:http";
import * as fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import * as path from "node:path";

const importUrl = fileURLToPath(import.meta.url);
const wwwRoot = path.join(importUrl, "..", "www");

export function createTestingServer() {
  const server = http.createServer(async function (req, res) {
    if (!req.url || req.url === "/") {
      req.url = "/index.html";
    }
    const errorOrFile = await fs
      .readFile(path.join(wwwRoot, req.url))
      .catch(function (error: NodeJS.ErrnoException) {
        return error;
      });
    if (errorOrFile instanceof Error) {
      if (errorOrFile.code === "ENOENT") {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("not found");
      } else if (errorOrFile.code === "EACCESS") {
        res.writeHead(403, { "content-type": "text/plain" });
        res.end("forbidden");
      } else {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end(errorOrFile.code);
      }
      return;
    }
    if (req.url.endsWith(".mjs")) {
      res.setHeader("content-type", "application/javascript");
    } else if (req.url.endsWith(".css")) {
      res.setHeader("content-type", "text/css");
    } else if (req.url.endsWith(".html")) {
      res.setHeader("content-type", "text/html");
    }
    res.writeHead(200);
    res.end(errorOrFile);
  });
  return server;
}
