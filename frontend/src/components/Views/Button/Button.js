import React from 'react';
import { NavLink } from 'react-router-dom';
import Sprite from '../Sprite/Sprite';

const Button = ({ text, href, blank, icon, iconAfter, action, modify }) => {
    if (href && !blank) {
        return (
            <NavLink to={href} className={`button ${modify}`} activeclassname="active">
                {icon && <Sprite name={icon} width="24" height="24" />}
                {text}
                {iconAfter && <Sprite name={iconAfter} width="24" height="24" />}
            </NavLink>
        );
    } else if (href) {
        return (
            <a href={href} target="_blank" rel="noreferrer" className={`button ${modify}`}>
                {icon && <Sprite name={icon} width="24" height="24" />}
                {text}
                {iconAfter && <Sprite name={iconAfter} width="24" height="24" />}
            </a>
        );
    }

    return (
        <button className={`button button_theme_default ${modify}`} onClick={action}>
            {icon && <Sprite name={icon} width="24" height="24" />}
            {text}
            {iconAfter && <Sprite name={iconAfter} width="24" height="24" />}
        </button>
    );
};

export default Button;
