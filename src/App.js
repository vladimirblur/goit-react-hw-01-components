import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/transactionHistory';
import user from './db/user.json';
import statisticalData from './db/statistical-data.json';
import friends from './db/friends.json';
import transaction from './db/transaction.json';

// import './App.css';

function App() {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <div className="App">
      <Profile
        profileName={name}
        profileTag={tag}
        location={location}
        avatarSrc={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title={'Upload stats'} stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
}

export default App;
