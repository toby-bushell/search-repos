import React from 'react';
import PropTypes from 'prop-types';
import EyeSVG from '../../assets/icons/eye.svg';
import ForkedSVG from '../../assets/icons/repo-forked.svg';
import { IconHolder, StyledSVG, IconText, Details } from './styles';

const RepoDetails = ({ forks, watchers }) => {
  return (
    <Details>
      <IconHolder>
        <StyledSVG src={EyeSVG} />
        <IconText>{watchers}</IconText>
      </IconHolder>
      <IconHolder>
        <StyledSVG src={ForkedSVG} />
        <IconText>{forks}</IconText>
      </IconHolder>
    </Details>
  );
};

RepoDetails.propTypes = {
  forks: PropTypes.number,
  watchers: PropTypes.number
};

export default RepoDetails;
