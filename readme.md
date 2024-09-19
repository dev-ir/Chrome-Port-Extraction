# XUI Ports Extractor Chrome Extension

This Chrome extension allows users to extract all the port numbers from the XUI panel and copy them directly to a text area for easy use.

## Features:
- Automatically extracts all port numbers from the XUI panel.
- Displays the extracted port numbers in a `textarea`.
- Easy one-click functionality to copy the extracted ports to your clipboard.

## Installation:

1. **Download the extension**:
   - Clone or download this repository to your local machine.

2. **Load the extension**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** in the top right corner.
   - Click **Load unpacked** and select the directory where you saved the extension files.

3. **Activate**:
   - Once loaded, you will see the extension icon in your browser toolbar.
   - Navigate to your XUI panel in the active tab and use the extension to extract port numbers.

## How to Use:

1. Click on the extension icon in your Chrome browser.
2. Click the `Extract Ports` button.
3. The extension will retrieve all ports from the XUI panel and display them in a `textarea`.
4. You can copy the ports to your clipboard by clicking the **Copy** button.


## Permissions:
- `activeTab`: Allows the extension to access the currently active tab.
- `scripting`: Needed to inject scripts for extracting port numbers.

## Known Issues:
- The extension works only with the standard XUI panel layout. If the panel layout changes, the extraction script might need to be updated.

## Contribution:
If you encounter any issues or have suggestions for improvements, feel free to open a pull request or submit an issue.

## License:
This project is licensed under the MIT License.

---

Enjoy using the **XUI Ports Extractor Chrome Extension**!

