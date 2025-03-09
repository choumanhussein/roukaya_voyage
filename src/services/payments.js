import api from './api';

export const createPaymentIntent = async (bookingData) => {
  try {
    const response = await api.post('/payments/create-intent', bookingData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de la création de l\'intention de paiement');
  }
};

export const confirmPayment = async (paymentId, paymentMethodId) => {
  try {
    const response = await api.post('/payments/confirm', {
      paymentId,
      paymentMethodId
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de la confirmation du paiement');
  }
};

export const getPaymentMethods = async () => {
  try {
    const response = await api.get('/payments/methods');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec du chargement des méthodes de paiement');
  }
};

export const addPaymentMethod = async (paymentMethodData) => {
  try {
    const response = await api.post('/payments/methods', paymentMethodData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de l\'ajout de la méthode de paiement');
  }
};

export const deletePaymentMethod = async (paymentMethodId) => {
  try {
    const response = await api.delete(`/payments/methods/${paymentMethodId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de la suppression de la méthode de paiement');
  }
};