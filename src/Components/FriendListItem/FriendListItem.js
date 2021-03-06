import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import styles from './FriendListItem.module.css';

export default function FriendListItem({ imageUrl, name, isOnline }) {
  const statusClasses = [styles.status];
  isOnline
    ? statusClasses.push(styles.online)
    : statusClasses.push(styles.offline);

  return (
    <li className={styles.item}>
      <span className={statusClasses.join(' ')}></span>
      <img className={styles.avatar} src={imageUrl} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

FriendListItem.defaultProps = {
  imageUrl: defaultImage,
  name: 'unknown',
};
