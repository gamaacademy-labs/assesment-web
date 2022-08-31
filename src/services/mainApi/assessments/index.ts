import { Assessment, Question } from '../../../@types';
import { api } from '../../mainApi';

export const getAssessment = async (id: string): Promise<Assessment> => {
	try {
		const response = await api.get<Assessment>(`/assessment/${id}`);
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getAssessmentQuestion = async (
	id: string,
): Promise<Question[]> => {
	try {
		const response = await api.get(`/assessment/questions/${id}`);
		return response.data.questions;
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
