export const reducer = (state, action) => {
  console.log('reducer firing with:', action.type, action);

  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      };
    case 'USER_DETAILS_FETCHED':
      return {
        ...state,
        user: action.user,
        repos: action.repos,
        loading: false
      };
    case 'REPOS_SORTED':
      return {
        ...state,
        repos: action.repos,
        activeSort: action.activeSort,
        loading: false
      };

    case 'ERROR':
      return {
        ...state,
        error: action.message,
        loading: false
      };

    default:
      return state;
  }
};
