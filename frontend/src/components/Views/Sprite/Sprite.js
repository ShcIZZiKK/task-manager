import React from 'react';

const Sprite = (props) => {
    const { name, width, height } = props;

    const svgStyle = {
        overflow: 'hidden',
    };

    return (
        <svg width={width} height={height} style={svgStyle}>
            <use xlinkHref={`/sprites/sprite.svg#${name}`}></use>
        </svg>
    );
};

export default Sprite;
