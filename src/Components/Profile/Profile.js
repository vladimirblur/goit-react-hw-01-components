import propTypes from 'prop-types';
import s from './Profile.module.css';

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
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatarSrc} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{profileName}</p>
        <p className={s.tag}>@{profileTag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
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
