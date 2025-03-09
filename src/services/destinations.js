import api from './api';

export const getAllDestinations = async (params = {}) => {
  try {
    const response = await api.get('/destinations', { params });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec du chargement des destinations');
  }
};

export const getDestinationById = async (id) => {
  try {
    const response = await api.get(`/destinations/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Destination non trouvée');
  }
};

export const getFeaturedDestinations = async () => {
  try {
    const response = await api.get('/destinations/featured');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec du chargement des destinations vedettes');
  }
};

export const getDestinationsByCategory = async (category) => {
  try {
    const response = await api.get(`/destinations/category/${category}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec du chargement des destinations par catégorie');
  }
};

export const searchDestinations = async (searchTerm, filters = {}) => {
  try {
    const response = await api.get('/destinations/search', { 
      params: { q: searchTerm, ...filters } 
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de la recherche de destinations');
  }
};
