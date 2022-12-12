import React from 'react';
import { connect } from 'react-redux';

// Helpers
import { toggleSidebar } from '../../../actions';

// Views
import Avatar from '../Avatar/Avatar';
import Sprite from '../Sprite/Sprite';

const Header = (props) => {
    const { title, toggleSidebar } = props;

    const changeStateSidebar = () => {
        toggleSidebar();
    };

    return (
        <header className="header" style={{ display: 'flex' }}>
            <div className="header__title">
                <h1>{title}</h1>
            </div>
            <div className="header__content">
                <button className="header__content-action" onClick={changeStateSidebar}>
                    <Sprite name="menu" width="24" height="24" />
                </button>
                <div className="header__content-user">
                    <Avatar
                        image="https://www.gravatar.com/avatar/6e1772a51ff41ae1671362ee735135ef.jpg?d=identicon"
                        modify="avatar_theme_size_big"
                    />
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = ({ sidebarIsShow }) => {
    return { sidebarIsShow };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSidebar: toggleSidebar(dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
