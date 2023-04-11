import PropTypes from 'prop-types';
import { ProfileCard } from "./ProfileCard";

export const Profile = ({items}) => {
    return (
        <div>
            {items.map(item => (
                <li key={item.username}>
<ProfileCard item={item} />
                </li>
            ))
}
      
      </div>
    );
};
Profile.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
      })
    ).isRequired,
  };