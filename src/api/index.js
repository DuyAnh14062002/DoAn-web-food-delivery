import axios from "axios";
export const getStore = () => {
  return axios.get(`http://localhost:8000/api/store/`);
};
export const getOrdersByCustomerId = (id) => {
  return axios.get(`http://localhost:8000/api/order/${id}`);
};
export const getListFoodByStore = (id) => {
  return axios.get(`http://localhost:8000/api/food/${id}`);
};
