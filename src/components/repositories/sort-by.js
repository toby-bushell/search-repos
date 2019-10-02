import React from 'react';
import { getUsersRepos } from '../../api';
import { useStateValue } from '../../state';
import { SortByWrapper } from './styles';

// TODO: Add slider filters for star rating if search api used
const SortBy = () => {
  const [{ user, activeSort, loading }, dispatch] = useStateValue();

  const handleChange = async e => {
    const { value } = e.target;
    dispatch({
      type: 'LOADING'
    });
    try {
      const sortedRepos = await getUsersRepos(user.login, user.type, value);
      dispatch({
        type: 'REPOS_SORTED',
        repos: sortedRepos,
        activeSort: value
      });
    } catch (err) {
      dispatch({
        type: 'ERROR',
        message: err.message
      });
    }
  };

  return (
    <SortByWrapper>
      <label htmlFor='repo-sort'>Sort By</label>
      <select
        value={activeSort}
        onChange={handleChange}
        disabled={loading}
        id='repo-sort'
      >
        <option disabled selected value=''>
          choose an option
        </option>
        <option value='full_name'>Full name</option>
        <option value='updated'>Updated</option>
      </select>
    </SortByWrapper>
  );
};

export default SortBy;
