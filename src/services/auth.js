import api from './api';

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    const { token, refreshToken, user } = response.data;
    
    // Stocker les tokens dans le localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    
    return user;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de la connexion');
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    const { token, refreshToken, user } = response.data;
    
    // Stocker les tokens dans le localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    
    return user;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de l\'inscription');
  }
};

export const logoutUser = async () => {
  try {
    await api.post('/auth/logout');
    
    // Supprimer les tokens du localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    
    return true;
  } catch (error) {
    console.error('Logout error:', error);
    
    // Même en cas d'erreur, supprimer les tokens
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    
    return true;
  }
};

export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    
    if (!token) {
      return null;
    }
    
    const response = await api.get('/auth/me');
    return response.data.user;
  } catch (error) {
    console.error('Get current user error:', error);
    return null;
  }
};

export const updateUserProfile = async (userData) => {
  try {
    const response = await api.put('/auth/profile', userData);
    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de la mise à jour du profil');
  }
};

export const updateUserPassword = async (passwordData) => {
  try {
    const response = await api.put('/auth/password', passwordData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de la mise à jour du mot de passe');
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de la demande de réinitialisation');
  }
};

export const resetPassword = async (token, newPassword) => {
  try {
    const response = await api.post('/auth/reset-password', {
      token,
      newPassword
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de la réinitialisation du mot de passe');
  }
};
