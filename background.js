chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'copyText') {
      const text = message.data;
      navigator.clipboard.writeText(text);
      sendResponse({ success: true });
    }
  });
  