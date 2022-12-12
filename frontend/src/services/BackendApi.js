import { GraphQLClient, gql } from 'graphql-request';

export default class BackendApi {
    _baseUrl = 'http://localhost:8000/graphql';
    _client = new GraphQLClient(this._baseUrl);

    getResource = async (query, variables = null) => {
        return await this._client
            .request(query, variables)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                throw new Error(error);
            });
    };

    getProjects = async () => {
        const query = gql`
            query {
                projects {
                    id
                    image
                    name
                    description
                    status {
                        title
                        color
                        percent
                    }
                    royalties
                    dateEnd
                    team {
                        id
                        username
                        avatar
                    }
                }
            }
        `;

        return this.getResource(query);
    };

    getProject = async (id) => {
        const query = gql`
            query ($id: ID!) {
                project(id: $id) {
                    id
                    imageFull
                    name
                    description
                    status {
                        title
                        color
                    }
                    client {
                        id
                        username
                        avatar
                    }
                    author {
                        id
                        username
                        avatar
                    }
                    team {
                        id
                        username
                        avatar
                    }
                    timeSpent {
                        duration
                    }
                    comments {
                        author {
                            id
                            username
                            avatar
                            post
                            projectsCount
                        }
                        text
                    }
                    royalties
                    dateEnd
                    createdAt
                    purpose
                }
            }
        `;

        return this.getResource(query, { id });
    };

    getUsers = async () => {
        const query = gql`
            query {
                users {
                    id
                    username
                    email
                    role {
                        name
                        type
                    }
                    telegram
                    avatar
                    workTimes {
                        duration
                    }
                    projects {
                        id
                        image
                        name
                    }
                    createdAt
                }
            }
        `;

        return this.getResource(query);
    };

    getNews = async () => {
        const query = gql`
            query {
                news {
                    id
                    slug
                    image
                    title
                    preview
                    text
                    author {
                        id
                        username
                        avatar
                    }
                    tags {
                        id
                        name
                    }
                    createdAt
                }
            }
        `;

        return this.getResource(query);
    };

    getNewsDetail = async (slug) => {
        const query = gql`
            query ($slug: String!) {
                newsItem(slug: $slug) {
                    id
                    slug
                    title
                    text
                    createdAt
                    image
                    author {
                        id
                        username
                        avatar
                    }
                    tags {
                        name
                    }
                }
            }
        `;

        return this.getResource(query, { slug });
    };
}
