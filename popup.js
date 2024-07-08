document.getElementById('execute-code').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: extractTableData
    }, function(results) {
      if (results && results[0] && results[0].result) {
        document.getElementById('output').value = results[0].result;
      }
    });
  });
});

document.getElementById('copy-output').addEventListener('click', function() {
  const output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
  alert('تمام پورت ها کپی شدند');
});

function extractTableData() {
  let rows = document.querySelectorAll('#content-layout > main > div > div > div:last-child > div.ant-card-body > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr');

  let values = [];

  rows.forEach((row, index) => {
    let cell = row.querySelector('td:nth-child(5)');
    if (cell) {
      values.push(cell.innerText.trim());
    }
  });
  return values.join(',');
}
