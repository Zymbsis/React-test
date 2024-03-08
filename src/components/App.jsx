import './App.css';
import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="container">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />
    </div>
  );
}

export default App;
