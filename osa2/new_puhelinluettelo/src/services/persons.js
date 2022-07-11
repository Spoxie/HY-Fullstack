import axios from "axios";

const baseUrl = "/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => {
    return response.data;
  });
};

const create = (newObject) => {
  if (!newObject) {
    return;
  } else {
    const request = axios.post(baseUrl, newObject);
    return request.then((response) => response.data);
  }
};

const update = (id, newer) => {
  console.log(id);
  console.log(newer);
  return axios.put(`${baseUrl}/${id}`, newer);
};

const remove = (obj) => {
  const request = axios.delete(`${baseUrl}/${obj.id}`, { data: obj.id });
  console.log(obj);
  return request.then((response) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, remove };
