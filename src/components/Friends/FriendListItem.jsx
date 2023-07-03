import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItemContainer, StatusIndicator, Avatar, Name } from './Friends.styled.jsx';


const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;
    return (
        <FriendListItemContainer>
            <StatusIndicator isOnline={isOnline}/>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendListItemContainer>
    );
};




FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};

export default FriendListItem;
