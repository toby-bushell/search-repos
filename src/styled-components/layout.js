import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  ${({ spaceBetween }) =>
    spaceBetween &&
    `
    justify-content: space-between;
  `}
`;
