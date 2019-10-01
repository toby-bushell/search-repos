import React from 'react';
import { useStateValue } from '../../state';
import { Error } from './styles';
import { Container } from '../../styled-components/containers';

const ErrorMessage = () => {
  const [{ error }] = useStateValue();

  if (!error) return null;

  return (
    <Error>
      <Container>
        <p>{error}</p>
      </Container>
    </Error>
  );
};

export default ErrorMessage;
