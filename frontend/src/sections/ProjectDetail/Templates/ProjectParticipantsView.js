import React from 'react';

// Views
import Avatar from '../../../components/Views/Avatar/Avatar';
import AvatarGroup from '../../../components/Views/AvatarGroup/AvatarGroup';

const ParticipantsView = ({ author, team, client }) => {
    return (
        <ul>
            <li>
                <span>Постановщик:</span>
                <span>
                    <Avatar
                        image={author.avatar}
                        tooltip={author.username}
                        modify="avatar_theme_size_mini avatar_theme_tooltip_right"
                    />
                </span>
            </li>
            <li>
                <span>Исполнители:</span>
                <span>
                    <AvatarGroup
                        list={team.map((user) => {
                            return {
                                id: user.id,
                                image: user.avatar,
                                modify: 'avatar_theme_size_mini avatar_theme_tooltip_right',
                                tooltip: user.username,
                            };
                        })}
                    />
                </span>
            </li>
            <li>
                <span>Заказчик:</span>
                <span>
                    <Avatar
                        image={client.avatar}
                        tooltip={client.username}
                        modify="avatar_theme_size_mini avatar_theme_tooltip_right"
                    />
                </span>
            </li>
        </ul>
    );
};

export default ParticipantsView;
