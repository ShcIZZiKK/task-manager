import React from 'react';

import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import Spinner from '../Spinner/Spinner';

const StateContent = ({ loading, error, children }) => {
    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;

    if (hasData) {
        return <React.Fragment>{children}</React.Fragment>;
    } else {
        return (
            <React.Fragment>
                {spinner}
                {errorMessage}
            </React.Fragment>
        );
    }
};

export default StateContent;
