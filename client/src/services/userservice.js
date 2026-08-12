import api from './api'

export const search = async (query) => {                    // was destructuring {username} — mismatched param
  const response = await api.get('/api/users/search', {
    params: { q: query }                                    // axios GET params go in config.params, not as 2nd positional arg
  });
  return response.data;                                      // return .data, not the whole axios response
};