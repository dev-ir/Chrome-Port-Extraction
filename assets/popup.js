document.getElementById('execute-code').addEventListener('click', async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: extractTableData
    });

    if (results?.[0]?.result) {
      const outputElement = document.getElementById('output');
      outputElement.value = results[0].result;
      copyTextarea(outputElement);
    }
  } catch (error) {
    console.error('Error executing script:', error);
  }
});

function copyTextarea(element) {
  element.select();
  document.execCommand('copy');
  alert('تمام پورت‌ها کپی شدند');
}

function extractTableData() {
  const rows = document.querySelectorAll('#content-layout > main > div > div > div:last-child > div.ant-card-body > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr');
  return Array.from(rows)
    .map(row => row.querySelector('td:nth-child(5)')?.innerText.trim())
    .filter(Boolean) // حذف مقادیر null یا undefined
    .join(',');
}
