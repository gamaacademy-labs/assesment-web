import { Assessment } from '../../../@types';
import { api } from '../../mainApi';

export const getAssessment = async (id: string): Promise<Assessment> => {
	try {
		const response = await api.get<Assessment>(`/assessment/${id}`);
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getAllAssessmentList = async (): Promise<Assessment[]> => {
	try {
		const { data } = await api.get('/assessment/active');
		return data.assessmentsActive;
	} catch (error) {
		return Promise.reject(error);
	}
};