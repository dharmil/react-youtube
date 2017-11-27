export function searchYoutube(query) {
    return {
        type: 'SEARCH_YOUTUBE',
        payload: {
            query
        }
    }
}