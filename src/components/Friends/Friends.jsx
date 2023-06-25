import React from 'react';
import PropTypes from 'prop-types';
import { ContainerFriends, FriendListItemContainer, StatusIndicator, Avatar, Name, FriendListStyle } from './Friends.styled.jsx';

const FriendList = ({ friends }) => (
    <ContainerFriends>
        <FriendListStyle>
            {friends.map((friend) => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}
        </FriendListStyle>
    </ContainerFriends>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

const FriendListItem = ({ friend }) => {
    const { avatar, name } = friend;
    return (
        <FriendListItemContainer>
            <StatusIndicator />
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendListItemContainer>
    );
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
};

export default FriendList;
