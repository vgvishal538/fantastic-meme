import axios from 'axios';



const API_BASE_URL = "https://api.themoviedb.org/3/";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmVmMTRlNWNjMjk2NTI0NTJkYTBiY2M5MGRhMzkxMCIsInN1YiI6IjY0ZDI4YmIzZTE4Yjk3MDBlNDk4ZjBlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8DYHpXLtaKYKy2lwVmYS9ChxDb9RD4skYQGuhyNBLJA"
const headersData = {
    'Authorization': `Bearer ${token}`,
    'accept': "application/json"
};

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000,
    headers: headersData
});

export default api;
