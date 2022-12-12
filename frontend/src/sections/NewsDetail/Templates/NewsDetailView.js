import React from 'react';

// Views
import Detail from '../../../components/Views/Detail/Detail';

const NewsDetailView = ({ newsItem }) => {
    return (
        <div className="project">
            <Detail
                image={newsItem.image}
                title={newsItem.title}
                date={newsItem.createdAt}
                tags={newsItem.tags}
                description={newsItem.text}
                author={newsItem.author}
                hideSidebar={true}
            />
        </div>
    );
};

export default NewsDetailView;
