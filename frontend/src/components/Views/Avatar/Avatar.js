import React from 'react';

const Avatar = ({ image, name, modify = '', tooltip, post }) => {
    return (
        <div className={`avatar ${modify}`}>
            <img className="avatar__image" src={image} alt={name} />
            <AvatarContent name={name} post={post} />
            <AvatarTooltip tooltip={tooltip} />
        </div>
    );
};

const AvatarContent = ({ name, post }) => {
    if (!name) {
        return null;
    }

    return (
        <div className="avatar__content">
            <span className="avatar__content-name">{name}</span>
            {post && <span className="avatar__content-info">{post}</span>}
        </div>
    );
};

const AvatarTooltip = ({ tooltip }) => {
    if (!tooltip) {
        return null;
    }

    return <span className="avatar__tooltip">{tooltip}</span>;
};

export default Avatar;
