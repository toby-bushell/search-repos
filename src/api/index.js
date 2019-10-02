import { GITHUB_API } from '../constants';

export const getUser = async username => {
  // TODO: Santiize
  const response = await fetch(`${GITHUB_API}/users/${username}`);
  if (response.status !== 200) {
    throw new Error(`User: "${username}" not found, please try again`);
  }

  const user = await response.json();
  return user;
};

export const getUsersRepos = async (username, userType, query = null) => {
  // Check we support the userType returned
  const supportedUserTypes = ['User', 'Organization'];
  if (!supportedUserTypes.includes(userType)) {
    throw new Error(`User type ${userType} not supported`);
  }

  let apiPathToFetch =
    userType === 'Organization'
      ? `orgs/${username}/repos`
      : `users/${username}/repos`;

  // If the repository list has been sorted
  if (query) apiPathToFetch = `${apiPathToFetch}?sort=${query}`;

  const response = await fetch(`${GITHUB_API}/${apiPathToFetch}`);

  if (response.status !== 200) {
    throw new Error(`Unable to fetch repos`);
  }

  const repos = await response.json();
  return repos;
};
