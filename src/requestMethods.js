import axios from 'axios';

const BASE_URL = 'http://167.172.72.229:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2QxNGYzOGViNmMxZjMxMDM2ZDRlYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTcyMDY0OSwiZXhwIjoxNjU1OTc5ODQ5fQ.nqavXZOFwJ5G8mmMWGv27EilYOW0_aUJZUYpNRDAjeU';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
