import { api } from '../mainApi';

interface answerType {
	questionId: string;
	alternativeId: string;
	assessmentId: string;
}

export const startingAssessment = async (assessmentId: string) => {
	try {
		const response = await api.post(`/user-assessments/started`, {
			assessmentId,
		});
		return response;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const finishingAssessment = async (assessmentId: string) => {
	try {
		const response = await api.patch(`/user-assessments/finished`, {
			assessmentId,
		});
		return response;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const scoreAssessment = async (assessmentId: string) => {
	try {
		const response = await api.patch(`/user-assessments/score`, {
			assessmentId,
		});
		return response;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const savingAnswer = async (answer: answerType) => {
	try {
		const response = await api.patch(`/user-assessments/questions`, answer);
		return response;
	} catch (error) {
		return Promise.reject(error);
	}
};
