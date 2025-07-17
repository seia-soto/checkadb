# checkadb

Half-automated ad-blocking capability end-to-end testing framework.
This framework helps ad-blockers to test their functionality with an ease.

See [contributing.md](./contributing.md) for the project development setup.

## Testing

`checkadb` is intended to be self-containable.

### Manual testing

Run web server via `pnpm www` after setting up the development environment.
You can see inline filters to apply and results immeidately.

Accessing `localhost` may disturb matching process of generic cosmetic filters.
We recommend you to add custom DNS resolver or edit `hosts` file.
You can use any domain without HSTS, for example: `example.com`.

```
127.0.0.1 example.com
```

### Programmable

**Experimental**

We also provide programmable interface to support your own testing setup.
Note that all domain matcher values in `scenario.expects` are fixed to `example.com`.

```ts
import { scenarios } from "checkadb/scenario";
import { createTestingServer } from "checkadb/server";

const server = createTestingServer();

server.listen(PORT, "127.0.0.1", async function () {
  for (const scenario of scenarios) {
    // Install filters
    installFilterToExtension(scenario.filters);
    // Access web server
    goToUrl("https://127.0.0.1/" + scenario.path);
    // Gather test results
    const actuals = await executeInPage(
      `return JSON.stringify(window.__checkadb__results)`,
    );
    expect(JSON.parse(actuals)).toBe(scenario.expects);
  }
});
```
