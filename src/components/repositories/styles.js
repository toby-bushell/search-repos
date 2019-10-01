import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const UnorderedList = styled.div`
  margin: 0 0 ${({ theme }) => theme.spacing.large} 0;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: ${({ theme }) => theme.spacing.medium};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.palette.grey};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  transition: all 0.1s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.offWhite};
    box-shadow: 0px 0px 2px 1px ${({ theme }) => theme.palette.grey};
  }
`;

export const RepoName = styled.h3`
  margin-bottom: 0;
`;

export const IconHolder = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${({ noRightMargin }) => (noRightMargin ? '0' : '10px')};
`;

export const StyledSVG = styled(SVG)`
  svg {
    display: block;
    width: 35px;
    height: 40px;
  }
`;

export const IconText = styled.p`
  margin: 0;
  font-size: 0.9em;
  line-height: 0.9em;
  margin: 0 5px;
`;

export const Details = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.medium};
  border-top: 1px solid ${({ theme }) => theme.palette.grey};
  padding-top: ${({ theme }) => theme.spacing.medium};
`;

export const SortByWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  label {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;
