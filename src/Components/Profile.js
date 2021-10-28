import propTypes from 'prop-types';

export default function Profile({
  profileName,
  profileTag,
  location,
  avatarSrc,
  followers,
  views,
  likes,
}) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatarSrc} alt="Аватар пользователя" className="avatar" />
        <p className="name">{profileName}</p>
        <p className="tag">@{profileTag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  profileName: propTypes.string.isRequired,
  profileTag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatarSrc: propTypes.string.isRequired,
  followers: propTypes.number.isRequired,
  views: propTypes.number.isRequired,
  likes: propTypes.number.isRequired,
};
