import axios from 'axios';

const URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest';
const token = '3ba950c928eb7a21e6e3c0eb084c287309d53f6b';

export const postFullName = user => async dispatch => {
  await axios.post(`${URL}/fio`, {user}, {headers: {'Authorization': 'Token ' + token}}).then(res => console.log(res.data));
};
