// Listen for a click on the browser action button.
browser.browserAction.onClicked.addListener(function() {
    // Get the current tab and close it.
    browser.tabs.query({ active: true, currentWindow: true }).then(function(tabs) {
      if (tabs.length > 0) {
        browser.tabs.remove(tabs[0].id);
      }
    });
  });
  