const newsRequest = () => {
    return {
        type: 'FETCH_NEWS_REQUEST',
    };
};

const newsLoaded = ({ news }) => {
    return {
        type: 'FETCH_NEWS_SUCCESS',
        payload: news,
    };
};

const newsError = (error) => {
    return {
        type: 'FETCH_NEWS_FAILURE',
        payload: error,
    };
};

const newsItemRequest = () => {
    return {
        type: 'FETCH_NEWS_ITEM_REQUEST',
    };
};

const newsItemLoaded = ({ newsItem }) => {
    return {
        type: 'FETCH_NEWS_ITEM_SUCCESS',
        payload: newsItem,
    };
};

const newsItemError = (error) => {
    return {
        type: 'FETCH_NEWS_ITEM_FAILURE',
        payload: error,
    };
};

const fetchNews = (apiService, dispatch) => () => {
    dispatch(newsRequest());

    apiService
        .getNews()
        .then((data) => dispatch(newsLoaded(data)))
        .catch((error) => dispatch(newsError(error)));
};

const fetchNewsItem = (apiService, dispatch, slug) => () => {
    dispatch(newsItemRequest());

    apiService
        .getNewsDetail(slug)
        .then((data) => dispatch(newsItemLoaded(data)))
        .catch((error) => dispatch(newsItemError(error)));
};

export { fetchNews, fetchNewsItem };
