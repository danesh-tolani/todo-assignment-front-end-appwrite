import axios from "axios";

// * we wil have to send firstname, lastname, email, password
const registerUser = async (userData) => {
  const response = axios.post("/api/user/register", userData);
  return response;
};

// * elain and password will come
const loginUser = async (userData) => {
  const response = axios.post("/api/user/login", userData);
  return response;
};

export { registerUser, loginUser };
