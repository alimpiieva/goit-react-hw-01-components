import React from 'react';
import PropTypes from 'prop-types';
import { ContainerFriends, FriendListStyle } from './Friends.styled.jsx';
import FriendListItem from './FriendListItem.jsx';

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
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired    
        })
    ).isRequired
};


export default FriendList;

