const updateSidebar = (state, action) => {
    if (state === undefined) {
        return false;
    }

    switch (action.type) {
        case 'TOGGLE_SIDEBAR_REQUEST':
            return !state.sidebarIsShow;
        default:
            return false;
    }
};

export default updateSidebar;
