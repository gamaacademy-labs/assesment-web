import { api } from '..';

interface User {
	username: string;
	token: string;
}

interface Login {
	username: string;
}

export const getUser = async (name: string): Promise<User> => {
	const response = await api.get<User>(`/users/${name}`);

	return response.data;
};

export const loginUser = async (user: Login) => {
	try {
		const response = await api.post('/auth/login', user);

		return response.data;
	} catch (error) {
	}
};
