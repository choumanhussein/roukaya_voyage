import axios from 'axios';

// Création d'une instance axios avec une configuration de base
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://api.roukaya-voyage.com/api',
  });
  

// Intercepteur pour ajouter le token d'authentification à chaque requête
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer les erreurs de réponse (comme les 401 Unauthorized)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    // Si l'erreur est 401 (non autorisé) et que nous n'avons pas déjà essayé de rafraîchir le token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Essayer de rafraîchir le token
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post('/auth/refresh-token', { refreshToken });
        
        const { token } = response.data;
        localStorage.setItem('token', token);
        
        // Réessayer la requête originale avec le nouveau token
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Si le rafraîchissement échoue, déconnecter l'utilisateur
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;
