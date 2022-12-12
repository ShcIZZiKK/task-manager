const updateNewsItem = (state, action) => {
    if (state === undefined) {
        return {
            newsItem: {},
            loading: true,
            error: null,
        };
    }

    switch (action.type) {
        case 'FETCH_NEWS_ITEM_REQUEST':
            return {
                newsItem: {},
                loading: true,
                error: null,
            };
        case 'FETCH_NEWS_ITEM_SUCCESS':
            return {
                newsItem: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_NEWS_ITEM_FAILURE':
            return {
                newsItem: {},
                loading: false,
                error: action.payload,
            };
        default:
            return state.newsItem;
    }
};

export default updateNewsItem;
