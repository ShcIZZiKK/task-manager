import React from 'react';

// Helpers
import DOMPurify from 'dompurify';
import Utils from '../../../utils/utils';

// Views
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import Sprite from '../Sprite/Sprite';

const Card = (props) => {
    const { id, slug, image, title, subtitle, text, progress, date, action, propsList, users } =
        props;

    const formatText = (text) => {
        return `${text} ...`;
    };

    const runAction = () => {
        if (!id || !action) {
            return;
        }

        if (slug) {
            action(slug);

            return;
        }

        action(id);
    };

    return (
        <article className="card" onClick={runAction}>
            <div className="card__wrapper">
                <div className="card__image">
                    <img src={image} alt={title} />
                </div>
                <div className="card__content">
                    <div className="card__content-title">{title}</div>
                    {subtitle && <div className="card__content-subtitle">{subtitle}</div>}
                    {propsList && propsList.length && (
                        <ul className="card__content-props">
                            {propsList.map((item) => {
                                return <li key={item.id}>{item.name}</li>;
                            })}
                        </ul>
                    )}
                    {text && (
                        <div
                            className="card__content-text"
                            dangerouslySetInnerHTML={{
                                __html: formatText(DOMPurify.sanitize(text)),
                            }}
                        ></div>
                    )}
                </div>

                {progress && (
                    <div className="card__progress">
                        <div className="card__progress-info">
                            <span>Прогресс</span>
                            <span>{progress.percent}%</span>
                        </div>
                        <div className="card__progress-line">
                            <span
                                className="card__progress-line-fill"
                                style={{ width: `${progress.percent}%` }}
                            ></span>
                            <span
                                className="card__progress-line-point"
                                style={{ left: `${progress.percent}%` }}
                            ></span>
                        </div>
                    </div>
                )}

                <div className="card__footer">
                    {date && (
                        <div className="card__footer-date">
                            {<Sprite name="clock" width="24" height="24" />}
                            {Utils.formatDate(date, 'DD.MM.YYYY')}
                        </div>
                    )}
                    {users && users.length && (
                        <AvatarGroup
                            list={users.map((user) => {
                                return {
                                    id: user.id,
                                    image: user.avatar,
                                };
                            })}
                        />
                    )}
                </div>
            </div>
        </article>
    );
};

export default Card;
