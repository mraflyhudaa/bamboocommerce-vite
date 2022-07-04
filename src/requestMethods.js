import axios from 'axios';

const BASE_URL = import.meta.env.VITE_SERVER_API;
let TOKEN;
if (localStorage.getItem('persist:root') != null) {
  TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
    .currentUser?.token;
} else {
  TOKEN = '';
}
// const TOKEN = () => {
//   if (
//     JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
//       .currentUser.token
//   ) {
//     return JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
//       .currentUser.token;
//   } else {
//     return '';
//   }
// };

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
