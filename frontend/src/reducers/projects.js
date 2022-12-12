const updateProjectsList = (state, action) => {
    if (state === undefined) {
        return {
            projects: [],
            loading: true,
            error: null,
        };
    }

    switch (action.type) {
        case 'FETCH_PROJECTS_REQUEST':
            return {
                projects: [],
                loading: true,
                error: null,
            };
        case 'FETCH_PROJECTS_SUCCESS':
            return {
                projects: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_PROJECTS_FAILURE':
            return {
                projects: [],
                loading: false,
                error: action.payload,
            };
        default:
            return state.projects;
    }
};

export default updateProjectsList;
