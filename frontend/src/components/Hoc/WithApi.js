import React from 'react';
import { ApiServiceConsumer } from '../ApiContext/ApiContext';

const WithApi = () => (Wrapped) => {
    return (props) => {
        return (
            <ApiServiceConsumer>
                {(apiService) => {
                    return <Wrapped {...props} apiService={apiService} />;
                }}
            </ApiServiceConsumer>
        );
    };
};

export default WithApi;
