import React from 'react';

// Helpers
import Utils from '../../../utils/utils';

// Views
import Avatar from '../Avatar/Avatar';
import Sprite from '../Sprite/Sprite';

const Comments = ({ list }) => {
    if (!list || !list.length) {
        return null;
    }

    return (
        <div className="comments">
            <div className="comments__title">Комментарии</div>
            <div className="comments__list">
                {list.map((item) => {
                    return <Comment {...item} key={item.id} />;
                })}
            </div>
        </div>
    );
};

const Comment = ({ author, text, createdAt }) => {
    return (
        <div className="comment">
            <div className="comment__header">
                <Avatar image={author.avatar} name={author.username} post={author.post} />
            </div>
            <div className="comment__content">{text}</div>
            <div className="comment__footer">
                <div className="comment__footer-prop">
                    <Sprite name="briefcase" width="24" height="24" />
                    {author.projectsCount}
                </div>

                <div className="comment__footer-prop">
                    <Sprite name="clock" width="24" height="24" />
                    {Utils.formatDate(createdAt)}
                </div>
            </div>
        </div>
    );
};

export default Comments;
