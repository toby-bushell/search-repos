import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.medium};
`;
