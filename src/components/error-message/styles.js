import styled from 'styled-components';

export const Error = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.palette.red};
  color: ${({ theme }) => theme.palette.white};
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  p {
    margin-bottom: 0;
  }
`;
