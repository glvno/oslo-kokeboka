import axios from 'axios';
// const baseUrl = '/recipe';
const baseUrl = '/api';
const getAll = async () => {
  const response = await axios.get(`${baseUrl}/getRecipes`);
  return response.data;
};

const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/getRecipeById/${id}`);
  return response.data;
};

const create = async (newObject) => {
  const response = await axios.post(`${baseUrl}/addRecipe`, newObject);
  return response.data;
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default { getAll, getOne, create, update };
