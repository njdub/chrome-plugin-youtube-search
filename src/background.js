const YOUTUBE_CONTEXT_MENU_ITEM_ID = 'youtube-search-context-item'

chrome.contextMenus.removeAll();

chrome.contextMenus.create({
        title: 'Search YouTube for "%s"',
        id: YOUTUBE_CONTEXT_MENU_ITEM_ID,
        contexts: ['selection']
    }
)

chrome.contextMenus.onClicked.addListener(
    function (info, tab) {
        const search = encodeURI(info.selectionText)
        switch (info.menuItemId) {
            case YOUTUBE_CONTEXT_MENU_ITEM_ID:
                chrome.tabs.create({url: 'https://www.youtube.com/results?search_query=' + search, active: true})
                break
            default:
                console.error('Unknown option clicked: ' + info)
                break
        }
    },
)
