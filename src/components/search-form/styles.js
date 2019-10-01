import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;
export const Form = styled.form`
  display: flex;
  width: 100%;
`;

export const TextInput = styled.input`
  padding: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.headers.h4};
  flex: 1;
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.palette.blue};
  color: ${({ theme }) => theme.palette.white};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.large}`};
  font-size: ${({ theme }) => theme.headers.h4};
`;
