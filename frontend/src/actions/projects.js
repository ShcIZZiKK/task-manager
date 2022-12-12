const projectsRequest = () => {
    return {
        type: 'FETCH_PROJECTS_REQUEST',
    };
};

const projectsLoaded = ({ projects }) => {
    return {
        type: 'FETCH_PROJECTS_SUCCESS',
        payload: projects,
    };
};

const projectsError = (error) => {
    return {
        type: 'FETCH_PROJECTS_FAILURE',
        payload: error,
    };
};

const projectRequest = () => {
    return {
        type: 'FETCH_PROJECT_REQUEST',
    };
};

const projectLoaded = ({ project }) => {
    return {
        type: 'FETCH_PROJECT_SUCCESS',
        payload: project,
    };
};

const projectError = (error) => {
    return {
        type: 'FETCH_PROJECT_FAILURE',
        payload: error,
    };
};

const fetchProject = (apiService, dispatch, id) => () => {
    dispatch(projectRequest());

    apiService
        .getProject(id)
        .then((data) => dispatch(projectLoaded(data)))
        .catch((error) => dispatch(projectError(error)));
};

const fetchProjects = (apiService, dispatch) => () => {
    dispatch(projectsRequest());

    apiService
        .getProjects()
        .then((data) => dispatch(projectsLoaded(data)))
        .catch((error) => dispatch(projectsError(error)));
};

export { fetchProjects, fetchProject };
