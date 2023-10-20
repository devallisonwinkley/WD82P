import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

// function getAll() {
//   return axios.get(baseUrl);
// }

function getAll() {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
}

// function create(newObject) {
//   return axios.post(baseUrl, newObject);
// }

function create(newObject) {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
}

export default {
  getAll,
  create,
};
