import React from 'react';
import { useStateValue } from '../../state';
import { Details, Avatar } from './styles';
// TODO: Include more user information
const UserDetails = () => {
  const [{ user }] = useStateValue();

  if (!user) return null;

  return (
    <Details>
      <Avatar src={user.avatar_url} alt={`avatar for ${user.login}`} />
      <h3>
        Showing repositories for <a href={user.html_url}> {user.login}</a>
      </h3>
    </Details>
  );
};

export default UserDetails;
