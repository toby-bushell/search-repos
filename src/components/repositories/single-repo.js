import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, RepoName, IconHolder, StyledSVG, IconText } from './styles';
import RepoDetails from './repo-details';
import StarSVG from '../../assets/icons/star.svg';
import { Flex } from '../../styled-components/layout';

const SingleRepo = ({ repo }) => {
  const { name, stargazers_count: stars, forks, watchers } = repo;
  // TODO: Add show more details on click
  return (
    <ListItem>
      <Flex spaceBetween>
        <RepoName>{name}</RepoName>
        <IconHolder noRightMargin>
          <StyledSVG src={StarSVG} />
          <IconText>{stars}</IconText>
        </IconHolder>
      </Flex>
      <RepoDetails forks={forks} watchers={watchers} />
    </ListItem>
  );
};

SingleRepo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks: PropTypes.number,
    watchers: PropTypes.number
  }).isRequired
};

export default SingleRepo;
