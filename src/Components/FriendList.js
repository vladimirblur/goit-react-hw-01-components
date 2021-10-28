import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id} className="item">
          <FriendListItem
            imageUrl={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
