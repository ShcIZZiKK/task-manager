import React from 'react';

// Views
import Card from '../../../components/Views/Card/Card';

const NewsView = ({ news, onNewItemSelected }) => {
    return (
        <div className="news">
            {news.map((newItem) => {
                return (
                    <Card
                        id={newItem.id}
                        slug={newItem.slug}
                        image={newItem.image}
                        title={newItem.title}
                        text={newItem.preview}
                        date={newItem.createdAt}
                        action={onNewItemSelected}
                        propsList={newItem.tags}
                        users={[newItem.author]}
                        key={newItem.id}
                    />
                );
            })}
        </div>
    );
};

export default NewsView;
