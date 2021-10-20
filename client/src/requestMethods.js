import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjFkZTI3NGUxNWRlZWYwMmMzYTE1MiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzM5MDY4OTcsImV4cCI6MTYzNDE2NjA5N30.1rVtSHca3CrYC2g7YSvg1tr77Ih2wF7Jrw5JcPqP2Bc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
