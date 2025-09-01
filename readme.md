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
For an instance, EasyList ships `@@://localhost:$generichide` by default.
We recommend you to add custom DNS resolver or edit `hosts` file.
You can use any domain without HSTS, for example: `self`.

```
127.0.0.1 self
```

### Programmable

We also providea a programmable way to support your own testing setup.

You can reference `filters` from the main export to acquire filters required
for testing.
Also, the types for easier typing are exported with the name of `Report`.

When accessing the actual values from the page, you can reference: the values
under `globalThis.suite.collection`.
`globalThis.suite.collection.expected` will provide you a number of reports
expected and `globalThis.suite.collection.reports` will provide you an array of
reports.

Typically, you're expected to collect the reports after 2 seconds as the
longest test we're performing takes 1 second after `readystatechange` event.
However, we recommend you to check multiple times rather expecting a constant
load time because it may vary depending on the machine and setup.

```ts
import { filters } from "checkadb";
import type { Report } from "checkadb";
import { createTestingServer } from "checkadb/server";

const server = createTestingServer();

server.listen(PORT, "127.0.0.1", async function () {
  // Install filters
  installFilterToExtension(filters);
  // Access web server
  goToUrl("https://127.0.0.1/");
  // Wait for 2s for assertions to be completed
  await waitFor(2000);
  // Gather test results
  const actuals = await executeInPage(
    `return JSON.stringify(suite.collection.reports)`,
  );
  expect(JSON.parse(actuals)).toBe({
    /* YOUR EXPECTED VALUES HERE */
  } satisfies Report[]);
});
```
