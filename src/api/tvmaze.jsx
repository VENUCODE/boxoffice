const BASE_URL = ' https://api.tvmaze.com';
const apiGet = async querySearch => {
  const response = await fetch(`${BASE_URL}${querySearch}`);
  console.log(`${BASE_URL}${querySearch}`)
  const body = await response.json();
  return body;
};
export const searchShow = showSearch => apiGet(`/search/shows?q=${showSearch}`);
export const searchPerson = personSearch =>
  apiGet(`/search/people?q=${personSearch}`);
export const getShowById = (showId) => {
  return apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`);
};
