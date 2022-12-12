const updateProjectItem = (state, action) => {
    if (state === undefined) {
        return {
            project: {},
            loading: true,
            error: null,
        };
    }

    switch (action.type) {
        case 'FETCH_PROJECT_REQUEST':
            return {
                project: {},
                loading: true,
                error: null,
            };
        case 'FETCH_PROJECT_SUCCESS':
            return {
                project: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_PROJECT_FAILURE':
            return {
                project: {},
                loading: false,
                error: action.payload,
            };
        default:
            return state.project;
    }
};

export default updateProjectItem;
