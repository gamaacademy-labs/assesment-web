import { api } from '../../mainApi';

interface User {
	username: string;
	token: string;
}

interface Login {
	username: string;
}

export const getUsers = async (name: string): Promise<User> => {
	const response = await api.get<User>(`/users/${name}`);
	return response.data;
};

export const loginUser = async (user: Login) => {
	try {
		const response = await api.post('/auth/login', user);
		return response.data;
	} catch (error) {
		console.error(error);
		alert('Usuário ou senha inválidos!');
	}
};
