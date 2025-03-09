import api from './api';

export const subscribeToNewsletter = async (email) => {
  try {
    const response = await api.post('/newsletters/subscribe', { email });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de l\'inscription à la newsletter');
  }
};

export const unsubscribeFromNewsletter = async (email, token) => {
  try {
    const response = await api.post('/newsletters/unsubscribe', { email, token });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de la désinscription de la newsletter');
  }
};