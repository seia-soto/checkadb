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
      if (element.textContent.startsWith("localhost")) {
        continue;
      }
      element.textContent = element.textContent.replace(
        "localhost",
        document.location.hostname,
      );
    }
  });
}
