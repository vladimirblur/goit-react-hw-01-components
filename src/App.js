import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './db/user.json';
import statisticalData from './db/statistical-data.json';
import friends from './db/friends.json';
import transaction from './db/transaction.json';

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
      <Container>
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
      </Container>
    </div>
  );
}

export default App;
