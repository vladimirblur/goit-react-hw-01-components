import Profile from './Components/Profile'
import user from './user.json'
// import './App.css';

function App() {
  const { name, tag, location, avatar, stats:{followers, views, likes} } = user;
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
    </div>
  );
}

export default App;
