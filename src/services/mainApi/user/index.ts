import { api } from "../../mainApi";

interface User {
  username: string;
  token: string;
}

interface Login {
  username: string;
}

export const getUsers = async (id?: number): Promise<User> => {
  const response = await api.get<User>(`/user/${id}`);
  return response.data;
};

export const loginUser = async (user: Login) => {
  try {
    const response = await api.post("/login", user);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    alert("Usuário ou senha inválidos!");
  }
};
