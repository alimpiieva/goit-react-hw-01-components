import React from 'react';
import Profile from '../Profile/Profile';
import user from '../Data/user.json';
import Statistics from '../Statisctics/Statistics';
import data from '../Data/data.json';
import FriendList from '../Friends/Friends.jsx';
import friends from '../Data/friends.json';
import TransactionHistory from '../Transactions/TransactionHistory.jsx';
import transactions from '../Data/transactions.json';
import { Container } from './App.styled';


const App = () => (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics
        title="Upload stats" stats={data}
      />
      <TransactionHistory items={transactions} />
    </Container>
  );

export default App;


