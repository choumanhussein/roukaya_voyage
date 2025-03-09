import api from './api';

export const getUserFavorites = async () => {
  try {
    const response = await api.get('/favorites');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec du chargement des favoris');
  }
};

export const addToFavorites = async (destinationId) => {
  try {
    const response = await api.post('/favorites', { destinationId });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de l\'ajout aux favoris');
  }
};

export const removeFromFavorites = async (destinationId) => {
  try {
    const response = await api.delete(`/favorites/${destinationId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de la suppression des favoris');
  }
};
