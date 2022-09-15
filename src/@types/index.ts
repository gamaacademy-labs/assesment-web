export interface Assessment {
	id: string;
	isActive: boolean;
	title: string;
	finishedAt: string;
	qtdQuestions: number;
	maxScore: number;
	status: number;
}

export interface Alternative {
	id: string;
	title: string;
}

export interface Question {
	id: string;
	createdAt: string;
	updatedAt: string;
	isActive: boolean;
	title: string;
	alternatives: Alternative[];
}

export interface User {
	username: string;
	token: string;
}

export interface ScoreAssessment {
	id: string;
	score: number;
	status: number;
	updatedAt: string;
}

export interface CorrectAnswer {
	isCorrect: number;
	alternativeId: number;
	questionId: string;
	title: string;
	alternatives: Alternative[];
}

export interface ResponseStore {
	answers: CorrectAnswer[];
	createdAt: string;
	id: string;
	isActive: boolean;
	score: number;
	status: number;
	updatedAt: string;
}
