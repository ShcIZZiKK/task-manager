import React from 'react';
import DOMPurify from 'dompurify';

// Views
import Status from '../Status/Status';
import Utils from '../../../utils/utils';
import Avatar from '../Avatar/Avatar';

const Detail = (props) => {
    const { image, title, description, tags, date, author, hideSidebar } = props;

    return (
        <div className="detail">
            <div className="detail__content">
                <div className="detail__content-image">
                    <img src={image} alt={title} />
                </div>
                <div className="detail__content-wrapper">
                    <div className="detail__content-title">
                        <h2>{title}</h2>
                    </div>
                    {tags && tags.length && (
                        <ul className="detail__content-tags">
                            {tags.map((tag) => {
                                return <li>{tag.name}</li>;
                            })}
                        </ul>
                    )}
                    <div className="detail__content-props"></div>
                    <div className="detail__content-subtitle">Описание</div>
                    <div
                        className="detail__content-description"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(description),
                        }}
                    ></div>
                    {(author || date) && (
                        <div className="detail__content-info">
                            {author && (
                                <div className="detail__content-info-author">
                                    <span>Автор:</span>
                                    <Avatar
                                        image={author.avatar}
                                        name={author.username}
                                        post={author.post}
                                    />
                                </div>
                            )}
                            {date && (
                                <div className="detail__content-info-date">
                                    <span>Дата публикации:</span>
                                    {Utils.formatDate(date)}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {!hideSidebar && <DetailSidebar {...props} />}
        </div>
    );
};

const DetailSidebar = ({ title, status, purpose, users, info }) => {
    return (
        <div className="detail__sidebar">
            <div className="detail__sidebar-label">Детали проекта</div>
            <div className="detail__sidebar-title">{title}</div>
            {status && (
                <div className="detail__sidebar-status">
                    <Status color={status.color} title={status.title} />
                </div>
            )}
            {purpose && (
                <React.Fragment>
                    <div className="detail__sidebar-subtitle">Цель</div>
                    <div className="detail__sidebar-text">{purpose}</div>
                </React.Fragment>
            )}
            {users && (
                <React.Fragment>
                    <div className="detail__sidebar-subtitle">Участники</div>
                    <div className="detail__sidebar-props">{users}</div>
                </React.Fragment>
            )}
            {info && (
                <React.Fragment>
                    <div className="detail__sidebar-subtitle">Дополнительно</div>
                    <div className="detail__sidebar-props">{info}</div>
                </React.Fragment>
            )}
        </div>
    );
};

export default Detail;
