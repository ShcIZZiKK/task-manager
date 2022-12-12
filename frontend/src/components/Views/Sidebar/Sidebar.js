import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import Sprite from '../Sprite/Sprite';
import { toggleSidebar } from '../../../actions';

const Sidebar = ({ sidebarIsShow, toggleSidebar }) => {
    const menuItems = [
        {
            id: 'menu1',
            link: '/',
            name: 'Аналитика',
            icon: 'category',
        },
        {
            id: 'menu2',
            link: '/projects',
            name: 'Проекты',
            icon: 'book',
        },
        {
            id: 'menu3',
            link: '/users',
            name: 'Пользователи',
            icon: 'user',
        },
        {
            id: 'menu4',
            link: '/news',
            name: 'Новости',
            icon: 'news',
        },
    ];

    const submenuItems = [
        {
            id: 'submenu1',
            link: '/settings',
            name: 'Настройки',
            icon: 'settings',
        },
        {
            id: 'submenu2',
            link: '/logout',
            name: 'Выйти',
            icon: 'logout',
        },
    ];

    const changeStateSidebar = () => {
        toggleSidebar();
    };

    return (
        <aside className={`sidebar${sidebarIsShow ? ' is-active' : ''}`}>
            <div className="sidebar__content">
                <div className="sidebar__logo">
                    <div className="sidebar__logo-icon">
                        <Sprite name="logo" width="34" height="34" />
                    </div>
                    <div className="sidebar__logo-text">DEVLOG</div>
                </div>
                <nav className="sidebar__navigation">
                    <ul>
                        <MenuView list={menuItems} />
                    </ul>
                </nav>
                <div className="sidebar__footer">
                    <ul>
                        <MenuView list={submenuItems} />
                    </ul>
                </div>
            </div>
            <div className="sidebar__overflow" onClick={changeStateSidebar}></div>
        </aside>
    );
};

const MenuView = ({ list }) => {
    return list.map((item) => {
        const { id, link, name, icon } = item;
        return (
            <li key={id}>
                <Button href={link} text={name} icon={icon} modify="button_theme_navigate" />
            </li>
        );
    });
};

const mapStateToProps = ({ sidebarIsShow }) => {
    return { sidebarIsShow };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSidebar: toggleSidebar(dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
