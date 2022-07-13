import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);

  return request.then((response) => response.data);
};

const create = (newObject) => {
  if (!newObject) {
    return;
  } else {
    return axios.post(baseUrl, newObject);
  }
};

const update = (id, newer) => {
  return axios.put(`${baseUrl}/${id}`, newer);
};

const remove = (obj) => {
  const request = axios.delete(`${baseUrl}/${obj.id}`, { data: obj.id });
  return request.then((response) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, remove };
