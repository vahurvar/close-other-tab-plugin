chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.query(
            {"currentWindow": true, "active": false}, 
            tabs => tabs.map(tab => tab.id).forEach(id => chrome.tabs.remove(id))
        )
});