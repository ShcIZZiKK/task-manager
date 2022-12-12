const toggleSidebarRequest = () => {
    return {
        type: 'TOGGLE_SIDEBAR_REQUEST',
    };
};

const toggleSidebar = (dispatch) => () => {
    dispatch(toggleSidebarRequest());
};

export { toggleSidebar };
