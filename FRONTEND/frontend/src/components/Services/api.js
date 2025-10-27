import axios from 'axios';

// Configuração da instância do Axios para a comunicação com a API
const api = axios.create({
    baseURL: 'http://localhost:3000', // Substitua pela URL da sua API
});

export default api;