fetch(window.location.href)
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // انتخاب تمام سطرهای موجود در جدول
    let rows = doc.querySelectorAll('#content-layout > main > div > div > div:nth-child(3) > div.ant-card-body > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr');

    let values = [];

    rows.forEach((row, index) => {
      // انتخاب سلول پنجم در هر سطر
      let cell = row.querySelector('td:nth-child(5)');
      if (cell) {
        values.push(cell.innerText.trim()); // افزودن مقدار به آرایه و حذف فضاهای خالی اضافی
      }
    });

    let output = values.join(',');
    document.getElementById('result-box').textContent = output;
  });
