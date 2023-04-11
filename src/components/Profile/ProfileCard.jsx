import PropTypes from 'prop-types';

export const ProfileCard = ({item: {username,
tag,
location,
avatar,
stats: {
  followers,
  views,
  likes}}}) => {
    return (
        <div> 
  <div>
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p>{username}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </div>

  <ul>
    <li>
      <span>"followers"</span>
      <span>{followers}</span>
    </li>
    <li>
      <span>"views"</span>
      <span>{views}</span>
    </li>
    <li>
      <span>"likes"</span>
      <span>{likes}</span>
    </li>
  </ul>
  </div>
    );
  };
  ProfileCard.propTypes = {
    item: PropTypes.shape({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
        }).isRequired,
  };