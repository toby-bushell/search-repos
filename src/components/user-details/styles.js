import styled from 'styled-components';

export const Details = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium} 0;

  h3 {
    margin: 0;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;
