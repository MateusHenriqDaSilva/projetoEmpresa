import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:2082/root",
    headers: { 'X-Token': 'fxC7FFu6J66Ph8ya34Ks3fJ9JE9ekqY2OQq2V1tq4kWkL' }
});

export default api;

