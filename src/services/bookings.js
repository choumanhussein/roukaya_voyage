import api from './api';

export const createBooking = async (bookingData) => {
  try {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de la création de réservation');
  }
};

export const getUserBookings = async () => {
  try {
    const response = await api.get('/bookings');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec du chargement des réservations');
  }
};

export const getBookingById = async (id) => {
  try {
    const response = await api.get(`/bookings/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Réservation non trouvée');
  }
};

export const cancelBooking = async (id, reason) => {
  try {
    const response = await api.post(`/bookings/${id}/cancel`, { reason });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de l\'annulation de la réservation');
  }
};

export const updateBookingPreferences = async (id, preferences) => {
  try {
    const response = await api.put(`/bookings/${id}/preferences`, preferences);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de la mise à jour des préférences');
  }
};