import React from 'react';
import { useStateValue } from '../../state';
import SingleRepo from './single-repo';
import SortBy from './sort-by';
import { UnorderedList } from './styles';

const Repositories = () => {
  const [{ repos }] = useStateValue();

  if (!repos || repos.length === 0) return null;

  return (
    <>
      <SortBy />
      <UnorderedList>
        {repos.map(repo => (
          <SingleRepo key={repo.id} repo={repo} />
        ))}
      </UnorderedList>
    </>
  );
};

export default Repositories;
