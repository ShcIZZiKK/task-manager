import updateNewsItem from './newsItem';
import updateNewsList from './news';
import updateProjectItem from './project';
import updateProjectsList from './projects';
import updateUsersList from './users';
import updateSidebar from './sidebar';

const reducer = (state, action) => {
    return {
        newsItem: updateNewsItem(state, action),
        sidebarIsShow: updateSidebar(state, action),
        news: updateNewsList(state, action),
        projects: updateProjectsList(state, action),
        project: updateProjectItem(state, action),
        users: updateUsersList(state, action),
    };
};

export default reducer;
