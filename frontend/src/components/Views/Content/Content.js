import React from 'react';

import Header from '../Header/Header';

const Content = (props) => {
    const { title, modify = '', children } = props;
    return (
        <div className={`content ${modify}`}>
            <Header title={title} />
            <main className="content__wrapper">
                <div className="content__body">{children}</div>
            </main>
        </div>
    );
};

export default Content;
