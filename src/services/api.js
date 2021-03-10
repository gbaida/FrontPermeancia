// Serviço de configuração da API
import axios from 'axios';

// URL da API
const api = axios.create({
    baseURL: "https://back-permeancia-klabin-sacos.herokuapp.com/"
});

// Exporta a API para ser utilizada posteriormente
export default api;