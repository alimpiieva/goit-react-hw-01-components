import React from 'react';
import Profile from '../Profile/Profile';
import user from '../user.json';
import Statistics from '../Statisctics/Statistics';
import data from '../data.json';
import FriendList from '../Friends/Friends.jsx';
import friends from '../friends.json';
import ReactDOM from 'react-dom';
import TransactionHistory from '../Transactions/TransactionHistory.jsx';
import transactions from '../transactions.json';
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
      <FriendList
        friends={friends}
      />
      <Statistics
        title="Upload stats" stats={data}
      />
     
      <TransactionHistory items={transactions} />
    </Container>
  );

export default App;

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<App />);