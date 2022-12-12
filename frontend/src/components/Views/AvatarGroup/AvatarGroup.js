import React from 'react';

import Avatar from '../Avatar/Avatar';

const AvatarGroup = ({ list }) => {
    return (
        <div className="avatar-group">
            {list.map((item) => {
                return (
                    <Avatar {...item} key={item.id} modify={`avatar_theme_group ${item.modify}`} />
                );
            })}
        </div>
    );
};

export default AvatarGroup;
