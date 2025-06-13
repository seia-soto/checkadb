/**
 * @param {function (...args: never[]): unknown} callback
 */
export function withDocumentAvailability(callback) {
  if (document.readyState !== "loading") {
    void callback();
  }
  document.addEventListener(
    "readystatechange",
    function () {
      void callback();
    },
    { once: true },
  );
}

export function reflectDisplayedHostnames() {
  withDocumentAvailability(function () {
    if (document.location.hostname === "localhost") {
      return;
    }
    for (const element of document.querySelectorAll("code")) {
      if (!element.textContent.startsWith("localhost")) {
        continue;
      }
      element.textContent = element.textContent.replace(
        "localhost",
        document.location.hostname,
      );
    }
  });
}

export function collectTestResults() {
  const tableElement = document.querySelector("table");
  /**
   * @type {string[]}
   */
  const headers = [];
  for (const header of tableElement.querySelectorAll("tr>th")) {
    if (header.textContent) {
      headers.push(header.textContent.toLowerCase());
    }
  }

  /**
   * @type {Record<string, Record<string, string>>}
   */
  const report = {};
  let i = 0;
  for (const rowElement of tableElement.querySelectorAll("tr:not(:has(th))")) {
    const key = rowElement.querySelector("td:nth-child(1)").textContent;
    /**
     * @type {Record<string, string>}
     */
    const map = {};
    for (const resultElement of rowElement.querySelectorAll(
      "td:not(:nth-child(1))>section",
    )) {
      if (headers[++i]) {
        map[headers[i]] = resultElement.hasAttribute("pass");
      }
    }
    report[key] = map;
    i = 0;
  }

  return report;
}

/**
 * @param {Record<string, Record<string, string>>} results
 */
export function printResults(results) {
  console.log(`[filters]
${Object.keys(results).join("\n")}

[results]
${Object.entries(results)
  .map(function ([filter, result]) {
    return `${filter} ${JSON.stringify(result)}`;
  })
  .join("\n")}`);
}
