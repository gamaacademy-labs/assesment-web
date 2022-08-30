import { Assessment, Question } from '../../../@types';
import { api } from '../../mainApi';

export const getAssessment = async (id: string): Promise<Assessment> => {
	try {
		const response = await api.get<Assessment>(`/assessment/assessment/${id}`);
		
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getAssessmentQuestion = async (
	id: string,
): Promise<Question[]> => {
	try {
		const response = await api.get(`/assessment/assessmentQuestion/${id}`);

		return response.data.assessment[0].questions;
	} catch (error) {
		return Promise.reject(error);
	}
};
