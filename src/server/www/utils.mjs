/**
 * @param {function (...args: never[]): unknown} callback
 */
export function withDocumentAvailability(callback) {
  if (document.readyState !== "loading") {
    void callback();
  } else {
    document.addEventListener(
      "readystatechange",
      function () {
        void callback();
      },
      { once: true },
    );
  }
}

export function reflectDisplayedHostnames() {
  withDocumentAvailability(function () {
    for (const element of document.querySelectorAll("code")) {
      element.textContent = element.textContent.replace(
        "example.com",
        document.location.hostname,
      );
    }
  });
}
