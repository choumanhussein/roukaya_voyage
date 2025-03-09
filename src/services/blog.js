import api from './api';

export const getAllBlogPosts = async (params = {}) => {
  try {
    const response = await api.get('/blog', { params });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec du chargement des articles de blog');
  }
};

export const getBlogPostById = async (id) => {
  try {
    const response = await api.get(`/blog/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Article de blog non trouvé');
  }
};

export const getBlogPostsByCategory = async (category) => {
  try {
    const response = await api.get(`/blog/category/${category}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec du chargement des articles par catégorie');
  }
};

export const getFeaturedBlogPosts = async () => {
  try {
    const response = await api.get('/blog/featured');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec du chargement des articles vedettes');
  }
};

export const addComment = async (postId, commentData) => {
  try {
    const response = await api.post(`/blog/${postId}/comments`, commentData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de l\'ajout du commentaire');
  }
};

export const searchBlogPosts = async (searchTerm) => {
  try {
    const response = await api.get('/blog/search', { params: { q: searchTerm } });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Échec de la recherche d\'articles');
  }
};