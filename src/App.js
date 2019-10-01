import React from 'react';
import { ThemeProvider } from 'styled-components';
import SearchForm from './components/search-form';
import { StateProvider } from './state';
import { initialState } from './state/initial';
import { reducer } from './state/reducer';
import Repositories from './components/repositories';
import ErrorMessage from './components/error-message';
import { Container } from './styled-components/containers';
import theme from './theme/variables';
import { GlobalStyle } from './theme/global';
import UserDetails from './components/user-details';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorMessage />
        {/* Would extract the below components to a 
        layout component once app evolves */}
        <Container>
          <SearchForm />
          <UserDetails />
          <Repositories />
        </Container>
      </ThemeProvider>
    </StateProvider>
  );
}

export default App;
