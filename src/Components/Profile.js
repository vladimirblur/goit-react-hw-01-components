import propTypes from 'prop-types';

export default function Profile({ profileName, profileTag, location, avatarSrc, followers, views, likes }) {
  return (
    <div class="profile">
    <div class="description">
      <img
        src={avatarSrc}
        alt="Аватар пользователя"
        class="avatar"
      />
      <p class="name">{profileName}</p>
      <p class="tag">@{profileTag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
      </li>
    </ul>
  </div>);
};


Profile.propTypes = {
  profileName: propTypes.string.isRequired,
  profileTag:propTypes.string.isRequired,
  location:propTypes.string.isRequired,
  avatarSrc:propTypes.string.isRequired,
  followers:propTypes.number.isRequired,
  views:propTypes.number.isRequired,
  likes:propTypes.number.isRequired,
}