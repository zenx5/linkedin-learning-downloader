// background events for chrome extension
// https://developer.chrome.com/extensions/background_pages
// import image from "../../assets/red.svg";
chrome.action.onClicked.addListener(async (tab) => {

    const response = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['src/js/download.js'],
    })
});

