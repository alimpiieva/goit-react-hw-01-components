import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  ProfileImage,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <ProfileCard>
    <Description>
      <ProfileImage src={avatar} alt="User avatar" className="avatar" />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <StatsItem>
        <Label>Followers:</Label>
        <Quantity>{stats.followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views:</Label>
        <Quantity>{stats.views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes:</Label>
        <Quantity>{stats.likes}</Quantity>
      </StatsItem>
    </Stats>
  </ProfileCard>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
};

export default Profile;
