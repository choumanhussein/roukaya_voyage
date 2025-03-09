import api from './api';

export const sendContactMessage = async (messageData) => {
  try {
    const response = await api.post('/contact', messageData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de l\'envoi du message');
  }
};