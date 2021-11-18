const YOUTUBE_CONTEXT_MENU_ITEM_ID = 'youtube-search-context-item'
const YOUTUBE_MUSIC_CONTEXT_MENU_ITEM_ID = 'youtube-music-search-context-item'

chrome.contextMenus.removeAll();

chrome.contextMenus.create({
        title: 'Search YouTube for: "%s"',
        id: YOUTUBE_CONTEXT_MENU_ITEM_ID,
        contexts: ['selection']
    }
)
chrome.contextMenus.create({
        title: 'Search YouTube Music for: "%s"',
        id: YOUTUBE_MUSIC_CONTEXT_MENU_ITEM_ID,
        contexts: ['selection']
    }
)

chrome.contextMenus.onClicked.addListener(
    function (info, tab) {
        search = encodeURI(info.selectionText)
        switch (info.menuItemId) {
            case YOUTUBE_CONTEXT_MENU_ITEM_ID:
                chrome.tabs.create({url: 'https://www.youtube.com/results?search_query=' + search, active: true})
                break
            case YOUTUBE_MUSIC_CONTEXT_MENU_ITEM_ID:
                chrome.tabs.create({url: 'https://music.youtube.com/search?q=' + search, active: true})
                break
            default:
                console.error('Unknown option clicked: ' + info)
                break
        }
    },
)
