import figlet from "figlet";

const server = Bun.serve({
  port: 8080,
  fetch(req) {
    console.log(Bun.version);
    const body = figlet.textSync("Bun!");
    // return new Response("Bun is running!");
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port}`);
