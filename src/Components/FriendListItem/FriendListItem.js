import PropTypes from 'prop-types';
import defaultImage from '../../default.jpg';
import styles from './FriendListItem.module.css';

export default function FriendListItem({ imageUrl, name, isOnline }) {
  const statusClasses = [styles.status];
  isOnline
    ? statusClasses.push(styles.online)
    : statusClasses.push(styles.offline);

  return (
    <>
      {isOnline ? (
        <span className={statusClasses.join(' ')}></span>
      ) : (
        <span className={statusClasses.join(' ')}></span>
      )}
      <img className="avatar" src={imageUrl} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
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

// const Button = ({ type = 'button', label, disabled }) => {
//   const btnClasses = [styles.button];

//   if (disabled) {
//     btnClasses.push(styles.disabled);
//   }

//   return (
//     <button className={btnClasses.join(' ')} type={type} disabled={disabled}>
//       {label}
//     </button>
//   );
// };
