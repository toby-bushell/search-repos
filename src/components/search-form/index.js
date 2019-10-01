import React, { useState } from 'react';
import { useStateValue } from '../../state';
import { getUser, getUsersRepos } from '../../api';
import { Form, TextInput, SubmitButton, FormWrapper } from './styles';

const SearchForm = () => {
  const [value, setValue] = useState('');
  const [{ loading }, dispatch] = useStateValue();

  const handleOnChange = e => {
    setValue(e.target.value);
  };

  // TODO: Would look to extract logic to custom hook if
  // search became possible elsewhere
  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({
      type: 'LOADING'
    });
    try {
      const user = await getUser(value);
      // Check user type to decide if we wish to search for orgs or users
      const userType = user.type;
      const repos = await getUsersRepos(value, userType);

      dispatch({
        type: 'USER_DETAILS_FETCHED',
        user,
        repos
      });
    } catch (err) {
      dispatch({
        type: 'ERROR',
        message: err.message
      });
    }
  };

  return (
    <FormWrapper>
      <h1>Search for github username</h1>

      <Form onSubmit={handleSubmit}>
        <TextInput
          type='text'
          value={value}
          onChange={handleOnChange}
          placeholder='Search for username'
        />
        <SubmitButton type='submit' disabled={loading}>
          Submit
        </SubmitButton>
      </Form>
    </FormWrapper>
  );
};

export default SearchForm;
